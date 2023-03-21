import { SelectOption } from 'types/form';
import { MangaStatus, TitleLanguage } from 'types/manga';

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
