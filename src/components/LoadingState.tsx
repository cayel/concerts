import React from 'react';
import { Music } from 'lucide-react';

export const LoadingState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Music className="w-12 h-12 text-klein animate-pulse" />
      <p className="mt-4 text-gray-600">Chargements en cours...</p>
    </div>
  );
}