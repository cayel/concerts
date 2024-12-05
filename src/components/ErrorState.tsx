import React from 'react';
import { AlertCircle } from 'lucide-react';

export const ErrorState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <AlertCircle className="w-12 h-12 text-red-500" />
      <p className="mt-4 text-gray-600">Problème de chargement des concerts. Veuillez rééssayer plus tard</p>
    </div>
  );
}