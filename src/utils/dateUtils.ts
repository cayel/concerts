import { Concert } from '../types/concert';

export const formatMonth = (date: string): string => {
  return new Date(date).toLocaleDateString('fr-FR', {
    month: 'long',
    year: 'numeric'
  });
};

export const sortConcerts = (concerts: Concert[]): Concert[] => {
  return [...concerts].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export const groupConcertsByMonth = (concerts: Concert[]): Map<string, Concert[]> => {
  const sorted = sortConcerts(concerts);
  const grouped = new Map<string, Concert[]>();

  sorted.forEach(concert => {
    const monthKey = formatMonth(concert.date);
    if (!grouped.has(monthKey)) {
      grouped.set(monthKey, []);
    }
    grouped.get(monthKey)?.push(concert);
  });

  return grouped;
};