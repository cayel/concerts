import useSWR from 'swr';
import { Concert } from '../types/concert';

const API_URL = 'https://moleskine-api-git-main-christophe-ayels-projects.vercel.app/concerts';
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

const fetcher = async (url: string) => {
  const response = await fetch(`${CORS_PROXY}${encodeURIComponent(url)}`, {
    headers: {
      'Accept': 'application/json',
    }
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch concerts');
  }
  
  const data = await response.json();
  console.log('API Response:', data);
  return Array.isArray(data) ? data : [data];
};

export function useConcerts() {
  const { data, error, isLoading } = useSWR<Concert[]>(
    API_URL,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000, // Cache for 1 minute
      onSuccess: (data) => {
        console.log('Processed concerts data:', data);
      },
      onError: (error) => {
        console.error('Error fetching concerts:', error);
      }
    }
  );

  return {
    concerts: data,
    isLoading,
    isError: error
  };
}