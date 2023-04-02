import { Poster, Titles } from './manga';
import { UseFormRegister, FieldError } from 'react-hook-form';

export type SelectOption<T> = { value: T; text: string };
export type InputProps = {
  name: FormField;
  errors?: FieldError;
  register: UseFormRegister<FormValues>;
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

export type FormValues = {
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

export enum FormErrorsTypes {
  requiredField = 'requiredField',
  requiredFile = 'requiredFile',
  requiredDate = 'requiredDate',
  minDescriptionLength = 'minDescriptionLength',
  minTtitleLength = 'minTtitleLength',
  tbaWithDate = 'tbaWithDate',
  currentWithTodayDate = 'currentWithTodayDate',
  finishedWithEarlyDate = 'finishedWithEarlyDate',
}

export type InputValue = string | boolean | File | undefined;

export type FormErrors = Partial<
  Record<FormErrorsTypes, (value: InputValue, formValues: FormValues) => boolean>
>;
