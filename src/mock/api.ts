import { ResponseStructure } from 'types/api';
import { Manga } from 'types/manga';
import { mangaList } from './cardsMock';

export const mangaListResponse: ResponseStructure<Manga[]> = {
  data: mangaList,
  links: {
    first: 'https://kitsu.io/api/edge/manga?page%5Blimit%5D=10&page%5Boffset%5D=0',
    next: 'https://kitsu.io/api/edge/manga?page%5Blimit%5D=10&page%5Boffset%5D=10',
    last: 'https://kitsu.io/api/edge/manga?page%5Blimit%5D=10&page%5Boffset%5D=53821',
  },
  meta: { count: 53831 },
};
