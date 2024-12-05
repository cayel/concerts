import React from 'react';

interface MonthSectionProps {
  month: string;
}

export const MonthSection: React.FC<MonthSectionProps> = ({ month }) => {
  return (
    <div className="col-span-full mt-12 first:mt-0 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center">
        <div className="bg-klein w-1.5 h-12 mr-4 rounded-full"></div>
        {month}
      </h2>
    </div>
  );
}