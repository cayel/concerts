import React from 'react';
import { ConcertCard } from './ConcertCard';
import { MonthSection } from './MonthSection';
import { concerts } from '../data/concerts';
import { groupConcertsByMonth } from '../utils/dateUtils';

export const ConcertList: React.FC = () => {
  const groupedConcerts = groupConcertsByMonth(concerts);

  return (
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
  );
}