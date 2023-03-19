import { Poster, PosterSize } from 'types/manga';

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
