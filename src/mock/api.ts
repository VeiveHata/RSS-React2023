import { ResponseItemStructure, ResponseListStructure } from 'types/api';
import { Category, Genre, Manga } from 'types/manga';
import { apiTestMangaItem, categoriesList, genresList, mangaList } from './mangaMock';

export const mangaListResponse: ResponseListStructure<Manga> = {
  data: mangaList,
  links: {
    first: 'https://kitsu.io/api/edge/manga?page%5Blimit%5D=10&page%5Boffset%5D=0',
    next: 'https://kitsu.io/api/edge/manga?page%5Blimit%5D=10&page%5Boffset%5D=10',
    last: 'https://kitsu.io/api/edge/manga?page%5Blimit%5D=10&page%5Boffset%5D=53821',
  },
  meta: { count: 53831 },
};

export const mangaItemResponse: ResponseItemStructure = {
  attributes: apiTestMangaItem.attributes,
  id: apiTestMangaItem.id,
  links: {
    self: 'https://kitsu.io/api/edge/manga/1',
  },
  relationships: apiTestMangaItem.relationships,
  type: 'manga',
};

export const mangaCategoriesResponse: ResponseListStructure<Category> = {
  data: categoriesList,
  links: {
    first: 'https://kitsu.io/api/edge/manga/8/categories?page%5Blimit%5D=10&page%5Boffset%5D=0',
    next: 'https://kitsu.io/api/edge/manga/8/categories?page%5Blimit%5D=10&page%5Boffset%5D=10',
    last: 'https://kitsu.io/api/edge/manga/8/categories?page%5Blimit%5D=10&page%5Boffset%5D=10',
  },
  meta: { count: 20 },
};

export const mangaGenresResponse: ResponseListStructure<Genre> = {
  data: genresList,
  links: {
    first: 'https://kitsu.io/api/edge/manga/8/genres?page%5Blimit%5D=10&page%5Boffset%5D=0',
    last: 'https://kitsu.io/api/edge/manga/8/genres?page%5Blimit%5D=10&page%5Boffset%5D=0',
  },
  meta: { count: 9 },
};
