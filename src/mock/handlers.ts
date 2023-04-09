import { mangaUrl } from 'consts/api';
import { rest } from 'msw';
import { mangaListResponse } from './api';

export const handlers = [
  rest.get(mangaUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mangaListResponse));
  }),
];
