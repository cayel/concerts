import React from 'react';
import { Calendar, MapPin, Music, Users } from 'lucide-react';
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

      <div className="flex items-center gap-3 text-gray-600 mb-4">
        <MapPin className="w-5 h-5" />
        <div>
          <span className="font-medium">{concert.venue}</span>
          <span className="text-gray-400 ml-2">• {concert.city}</span>
        </div>
      </div>

      {concert.attend && concert.attend.length > 0 && (
        <div className="flex items-start gap-3 pt-4 border-t border-gray-100">
          <Users className="w-5 h-5 text-klein" />
          <div>
            <span className="text-sm font-medium text-gray-700">Présents :</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {concert.attend.map((trigram, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-klein/10 text-klein"
                >
                  {trigram}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}