import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { mangaUrl } from 'consts/api';
import { ResponseListStructure } from 'types/api';
import type { Manga } from 'types/manga';

type MangaListProps = {
  pagination?: string;
  offset?: string;
  sort?: string;
  filter?: string;
};

export const mangaApi = createApi({
  reducerPath: 'mangaApi',
  baseQuery: fetchBaseQuery({ baseUrl: mangaUrl }),
  endpoints: (builder) => ({
    getMangaList: builder.query<ResponseListStructure<Manga>, MangaListProps>({
      query: ({ filter, pagination, offset }) => {
        return {
          url: '',
          params: {
            ...(filter ? { 'filter[text]': filter } : {}),
            'page[limit]': pagination,
            'page[offset]': offset,
          },
        };
      },
    }),
  }),
});

export const { useGetMangaListQuery } = mangaApi;
