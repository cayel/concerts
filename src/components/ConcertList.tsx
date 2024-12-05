import React, { useState, useMemo } from 'react';
import { ConcertCard } from './ConcertCard';
import { MonthSection } from './MonthSection';
import { LoadingState } from './LoadingState';
import { ErrorState } from './ErrorState';
import { VenueFilter } from './VenueFilter';
import { useConcerts } from '../hooks/useConcerts';
import { groupConcertsByMonth } from '../utils/dateUtils';

export const ConcertList: React.FC = () => {
  const { concerts, isLoading, isError } = useConcerts();
  const [selectedVenue, setSelectedVenue] = useState<string | null>(null);

  const venues = useMemo(() => {
    if (!concerts) return [];
    return Array.from(new Set(concerts.map(concert => concert.venue))).sort();
  }, [concerts]);

  const filteredConcerts = useMemo(() => {
    if (!concerts) return [];
    if (!selectedVenue) return concerts;
    return concerts.filter(concert => concert.venue === selectedVenue);
  }, [concerts, selectedVenue]);

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
      <VenueFilter
        venues={venues}
        selectedVenue={selectedVenue}
        onVenueSelect={setSelectedVenue}
      />
      
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