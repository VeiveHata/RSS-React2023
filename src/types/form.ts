import { MangaStatus, Poster, Titles } from './manga';

export type SelectOption<T> = { value: T; text: string };

export type FormField =
  | 'poster'
  | 'title'
  | 'description'
  | 'titleLang'
  | 'canonicalTitle'
  | 'startDate'
  | 'status';

export type FormSubmitValue = {
  poster: unknown;
  title: string;
  language: string;
  isCanonical: boolean;
  startDate: string;
  status: MangaStatus;
};

export interface FormSubmitValues {
  posterImage: Poster;
  titles: Titles;
  canonicalTitle: string;
  startDate: string;
  description: string;
  status: string;
}
