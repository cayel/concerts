import React from 'react';
import { Calendar, MapPin, Music } from 'lucide-react';
import { Concert } from '../types/concert';

interface ConcertCardProps {
  concert: Concert;
}

export const ConcertCard: React.FC<ConcertCardProps> = ({ concert }) => {
  const formattedDate = new Date(concert.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-klein/30 transition-all duration-300 group">
      <div className="flex items-center gap-3 text-klein mb-4">
        <Calendar className="w-5 h-5" />
        <span className="font-medium">{formattedDate}</span>
      </div>
      
      <div className="flex items-start gap-3 mb-4">
        <Music className="w-5 h-5 mt-1 text-klein" />
        <div>
          <h3 className="font-bold text-xl text-gray-900 group-hover:text-klein transition-colors">
            {concert.bands[0]}
          </h3>
          {concert.bands.slice(1).map((band, index) => (
            <p key={index} className="text-gray-600 mt-1">+ {band}</p>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 text-gray-600">
        <MapPin className="w-5 h-5" />
        <div>
          <span className="font-medium">{concert.venue}</span>
          <span className="text-gray-400 ml-2">• {concert.city}</span>
        </div>
      </div>
    </div>
  );
}