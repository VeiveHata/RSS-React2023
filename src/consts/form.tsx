import { FormField, SelectOption } from 'types/form';
import { MangaStatus, TitleLanguage } from 'types/manga';

export const formFields: Record<FormField, FormField> = {
  poster: 'poster',
  title: 'title',
  description: 'description',
  titleLang: 'titleLang',
  canonicalTitle: 'canonicalTitle',
  startDate: 'startDate',
  status: 'status',
};

export const languageOptions: SelectOption<TitleLanguage>[] = [
  { value: TitleLanguage.en, text: 'English' },
  { value: TitleLanguage.en_us, text: 'English (American)' },
  { value: TitleLanguage.en_jp, text: 'English (Japanese)' },
  { value: TitleLanguage.ja_jp, text: 'Japanese' },
];

export const statusOptions: SelectOption<MangaStatus>[] = [
  { value: 'finished', text: 'Finished' },
  { value: 'current', text: 'Ongoing' },
  { value: 'tba', text: 'To be announced' },
];
