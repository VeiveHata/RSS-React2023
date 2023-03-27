import { FormValues } from 'types/form';

const file = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' });

export const emptyForm: FormValues = {
  title: '',
  description: '',
  poster: undefined,
  canonicalTitle: false,
  startDate: '',
  titleLang: 'en',
  status: '',
};

export const validFormValues: FormValues = {
  title: 'Test title',
  description:
    'Correct description with more than 50 symbols.Correct description with more than 50 symbols',
  poster: file,
  canonicalTitle: false,
  startDate: '',
  titleLang: 'en',
  status: 'tba',
};
