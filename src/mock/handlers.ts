import { mangaUrl } from 'consts/api';
import { rest } from 'msw';
import {
  mangaCategoriesResponse,
  mangaGenresResponse,
  mangaItemResponse,
  mangaListResponse,
} from './api';
import { apiTestMangaItem } from './mangaMock';

export const handlers = [
  rest.get(mangaUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mangaListResponse));
  }),
  rest.get(`${mangaUrl}/${apiTestMangaItem.id}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mangaItemResponse));
  }),
  rest.get(apiTestMangaItem.relationships.categories.links.related, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mangaCategoriesResponse));
  }),
  rest.get(apiTestMangaItem.relationships.genres.links.related, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mangaGenresResponse));
  }),
];
