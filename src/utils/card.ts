import { Poster, PosterSize, TitleLanguage, Titles } from 'types/manga';

const posterSizes: PosterSize[] = [
  PosterSize.medium,
  PosterSize.original,
  PosterSize.small,
  PosterSize.small_webp,
];

export const getPoster = (poster: Poster, sizes = posterSizes) => {
  const posterSize = sizes.find((size) => poster[size]) || PosterSize.large;
  return poster[posterSize];
};

const languages: TitleLanguage[] = [TitleLanguage.en, TitleLanguage.en_us];
export const getTitle = (titles: Titles, lang?: TitleLanguage) => {
  const titleLanguage = lang || languages.find((lang) => titles[lang]) || TitleLanguage.en;
  return titles[titleLanguage];
};

export const getFirstExistTitle = (titles: Titles) => {
  const titleLanguage =
    Object.values(TitleLanguage).find((lang) => titles[lang]) || TitleLanguage.en;
  return titles[titleLanguage];
};
