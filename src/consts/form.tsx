import { FormErrors, SelectOption } from 'types/form';
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

export const emptyFormErrors: FormErrors = {
  canonicalTitle: null,
  description: null,
  poster: null,
  startDate: null,
  status: null,
  title: null,
  titleLang: null,
};

export const MIN_DESCRIPTION_LENGTH = 50;
export const MIN_TITLE_LENGTH = 5;
export const MOST_RECENT_MANGA_DAYS = 30;

export const errorMessages = {
  requiredField: 'This field is requiered',
  requiredFile: 'Please upload a file',
  requiredDate: 'Date should be specified',
  minDescriptionLength: `The prescription is too short. Should be more than ${MIN_DESCRIPTION_LENGTH} symbols`,
  minTtitleLength: `The title is too short. Should be more than ${MIN_TITLE_LENGTH} symbols`,
  tbaWithDate: 'With selected date the status cannot be set',
  currentWithTodayDate: 'The date cannot be less then today for Ongoing manga',
  finishedWithEarlyDate:
    'Manga cannot be finished less than for 30 days. Please check the date and status',
};
