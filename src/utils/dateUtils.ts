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

export const isRecentlyAdded = (dateAdded?: string): boolean => {
  if (!dateAdded) return false;
  
  const addedDate = new Date(dateAdded);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - addedDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays <= 15;
};