import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { mangaUrl } from 'consts/api';
import { ResponseItemStructure, ResponseListStructure } from 'types/api';
import type { Category, Genre, Manga } from 'types/manga';

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
    getMangaItem: builder.query<ResponseItemStructure['data'], string>({
      query: (id: string) => `/${id}`,
      transformResponse: (response: ResponseItemStructure) => response.data,
    }),
    getMangaGenres: builder.query<ResponseListStructure<Genre>, string>({
      query: (id: string) => `/${id}/genres`,
    }),
    getMangaCategories: builder.query<ResponseListStructure<Category>, string>({
      query: (id: string) => `/${id}/categories`,
    }),
  }),
});

export const {
  useGetMangaListQuery,
  useGetMangaItemQuery,
  useGetMangaGenresQuery,
  useGetMangaCategoriesQuery,
} = mangaApi;
