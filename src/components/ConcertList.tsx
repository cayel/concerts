import React, { useState, useMemo } from 'react';
import { ConcertCard } from './ConcertCard';
import { MonthSection } from './MonthSection';
import { LoadingState } from './LoadingState';
import { ErrorState } from './ErrorState';
import { VenueFilter } from './VenueFilter';
import { NewFilter } from './NewFilter';
import { useConcerts } from '../hooks/useConcerts';
import { groupConcertsByMonth, isRecentlyAdded } from '../utils/dateUtils';

export const ConcertList: React.FC = () => {
  const { concerts, isLoading, isError } = useConcerts();
  const [selectedVenue, setSelectedVenue] = useState<string | null>(null);
  const [showNewOnly, setShowNewOnly] = useState(false);

  const venues = useMemo(() => {
    if (!concerts) return [];
    return Array.from(new Set(concerts.map(concert => concert.venue))).sort();
  }, [concerts]);

  const filteredConcerts = useMemo(() => {
    if (!concerts) return [];
    
    return concerts.filter(concert => {
      const matchesVenue = !selectedVenue || concert.venue === selectedVenue;
      const matchesNew = !showNewOnly || isRecentlyAdded(concert.dateAdded);
      return matchesVenue && matchesNew;
    });
  }, [concerts, selectedVenue, showNewOnly]);

  const groupedConcerts = useMemo(() => {
    return groupConcertsByMonth(filteredConcerts);
  }, [filteredConcerts]);

  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState />;
  if (!concerts || concerts.length === 0) {
    return (
      <div className="text-center py-12 text-gray-600">
        Aucun concert trouvé.
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="md:flex-1">
          <VenueFilter
            venues={venues}
            selectedVenue={selectedVenue}
            onVenueSelect={setSelectedVenue}
          />
        </div>
        <div className="md:flex-1">
          <NewFilter
            showNewOnly={showNewOnly}
            onToggle={setShowNewOnly}
          />
        </div>
      </div>
      
      <div className="space-y-6">
        {Array.from(groupedConcerts.entries()).map(([month, monthConcerts]) => (
          <div key={month}>
            <MonthSection month={month} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {monthConcerts.map((concert) => (
                <ConcertCard key={concert.id} concert={concert} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}