import React from 'react';
import { Sparkles } from 'lucide-react';

interface NewFilterProps {
  showNewOnly: boolean;
  onToggle: (value: boolean) => void;
}

export const NewFilter: React.FC<NewFilterProps> = ({ showNewOnly, onToggle }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-klein" />
        <h2 className="text-lg font-semibold text-gray-900">Nouveaux concerts</h2>
      </div>
      <button
        onClick={() => onToggle(!showNewOnly)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2
          ${showNewOnly 
            ? 'bg-klein text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
      >
        <Sparkles className="w-4 h-4" />
        Nouveaux concerts uniquement
      </button>
    </div>
  );
};