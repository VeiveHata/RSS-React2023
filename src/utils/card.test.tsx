import { PosterSize } from 'types/manga';
import { describe, it, expect } from 'vitest';
import { mockCardItem } from '../mock/mangaMock';
import { getPoster } from './card';

describe('getPoster', () => {
  const mangaPoster = mockCardItem.attributes.posterImage;

  it('return medium poster size as default priority value', () => {
    const mediumPoster = mangaPoster[PosterSize.medium];
    const poster = getPoster(mangaPoster);
    expect(poster).toEqual(mediumPoster);
  });

  it('return small poster for defined small size priority', () => {
    const smallPoster = mangaPoster[PosterSize.small];
    const poster = getPoster(mangaPoster, [PosterSize.small]);
    expect(poster).toEqual(smallPoster);
  });

  it('return large poster for not provided sizes', () => {
    const largePoster = mangaPoster[PosterSize.large];
    const poster = getPoster(mangaPoster, []);
    expect(poster).toEqual(largePoster);
  });
});
