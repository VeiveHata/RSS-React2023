import { useCallback, useState } from 'react';

const apiUrl = 'https://kitsu.io/api/edge';

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return String(error);
};

type Pagination = {
  first: string;
  last: string;
  next: string;
};

type ResponseStructure<T> = {
  data: T;
  meta: {
    count: number;
  };
  links: Pagination;
};

export const useFetch = <T>() => {
  const [responseData, setResponseData] = useState<ResponseStructure<T>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async (url: string) => {
    try {
      setLoading(true);
      setError('');
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
        },
      });
      if (!res.ok) {
        throw new Error('Error recieving data');
      }
      const resData = await res.json();
      setResponseData(resData);
    } catch (err) {
      setError(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchData,
    loading,
    error,
    response: responseData,
  };
};

export const useGetMangaList = <T>({ defaultPagination = 10 }: { defaultPagination?: number }) => {
  const { fetchData, loading, error, response } = useFetch<T>();

  const getList = useCallback(
    ({
      pagination = `${defaultPagination}`,
      offset = '0',
      sort = '-averageRating',
      filter = '',
    }: {
      pagination?: string;
      offset?: string;
      sort?: string;
      filter?: string;
    }) => {
      const listOptions = new URLSearchParams({
        ...(filter ? { 'filter[text]': filter } : {}),
        sort: sort,
        'page[limit]': pagination,
        'page[offset]': offset,
      });
      return fetchData(`${apiUrl}/manga?${listOptions}`);
    },
    [defaultPagination, fetchData]
  );

  return {
    getList,
    data: response?.data || [],
    loading,
    error,
    total: response?.meta.count,
  };
};
