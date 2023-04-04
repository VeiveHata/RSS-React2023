import { useCallback, useState } from 'react';

const mangaApiUrl = 'https://kitsu.io/api/edge/manga';
const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return String(error);
};

export const useFetch = <T>() => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async (params: string) => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch(`${mangaApiUrl}${params}`, {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
        },
      });
      if (!response.ok) {
        throw new Error('Error recieving data');
      }
      const responseData = await response.json();
      setData(responseData.data);
    } catch (err) {
      setError(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchData,
    data,
    loading,
    error,
  } as const;
};

export const useGetList = <T>() => {
  const { fetchData, data, loading, error } = useFetch<T>();

  const getList = useCallback(
    ({
      pagination = '10',
      sort = '-averageRating',
      filter = '',
    }: {
      pagination?: string;
      sort?: string;
      filter?: string;
    }) => {
      const listOptions = new URLSearchParams({
        ...(filter ? { 'filter[text]': filter } : {}),
        sort: sort,
        'page[limit]': pagination,
      });
      console.log(listOptions);
      return fetchData(`?${listOptions}`);
    },
    [fetchData]
  );

  return {
    getList,
    data,
    loading,
    error,
  };
};
