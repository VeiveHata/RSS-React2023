import { Poster, Titles } from './manga';
import { Nullable } from './utils';

export type SelectOption<T> = { value: T; text: string };
export type InputProps = {
  name: string;
  errors?: Nullable<string[]>;
};

export enum FormField {
  poster = 'poster',
  title = 'title',
  description = 'description',
  titleLang = 'titleLang',
  canonicalTitle = 'canonicalTitle',
  startDate = 'startDate',
  status = 'status',
}

export type FormElements = Record<FormField, HTMLInputElement>;

export type FormObject = {
  [FormField.canonicalTitle]: boolean;
  [FormField.description]: string;
  [FormField.poster]: File | undefined;
  [FormField.startDate]: string;
  [FormField.status]: string;
  [FormField.title]: string;
  [FormField.titleLang]: string;
};

export interface FormSubmitValues {
  posterImage: Poster;
  titles: Titles;
  canonicalTitle: string;
  startDate: string;
  description: string;
  status: string;
}

export type FormErrors = Record<FormField, string[] | null>;
