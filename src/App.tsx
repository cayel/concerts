import React from 'react';
import { Music } from 'lucide-react';
import { ConcertList } from './components/ConcertList';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-klein text-white py-8 mb-12 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-full">
              <Music className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Concerts in Lyon</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-16">
        <ConcertList />
      </main>
    </div>
  );
}

export default App;