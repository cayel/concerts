import React from 'react';
import { MapPin } from 'lucide-react';

interface VenueFilterProps {
  venues: string[];
  selectedVenue: string | null;
  onVenueSelect: (venue: string | null) => void;
}

export const VenueFilter: React.FC<VenueFilterProps> = ({
  venues,
  selectedVenue,
  onVenueSelect,
}) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-klein" />
        <h2 className="text-lg font-semibold text-gray-900">Filtrer par lieu</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onVenueSelect(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${!selectedVenue 
              ? 'bg-klein text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          Tous les lieux
        </button>
        {venues.map((venue) => (
          <button
            key={venue}
            onClick={() => onVenueSelect(venue)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedVenue === venue
                ? 'bg-klein text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            {venue}
          </button>
        ))}
      </div>
    </div>
  );
};