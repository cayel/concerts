export interface Concert {
  id: string;
  date: string;
  bands: string[];
  venue: string;
  city: string;
  attend?: string[];
}