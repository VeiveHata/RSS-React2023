import { mangaUrl } from 'consts/api';
import { useCallback, useEffect, useState } from 'react';
import { ResponseItemStructure, ResponseListStructure } from 'types/api';

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return String(error);
};

export const useFetch = <T>() => {
  const [responseData, setResponseData] = useState<T>();
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
  const { fetchData, loading, error, response } = useFetch<ResponseListStructure<T>>();

  const getList = useCallback(
    ({
      pagination = `${defaultPagination}`,
      offset = '0',
      filter = '',
    }: {
      pagination?: string;
      offset?: string;
      sort?: string;
      filter?: string;
    }) => {
      const listOptions = new URLSearchParams({
        ...(filter ? { 'filter[text]': filter } : {}),
        'page[limit]': pagination,
        'page[offset]': offset,
      });
      return fetchData(`${mangaUrl}?${listOptions}`);
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

export const useGetMangaItem = ({ id }: { id: string }) => {
  const { fetchData, loading, error, response } = useFetch<ResponseItemStructure>();

  useEffect(() => {
    fetchData(`${mangaUrl}/${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    data: response?.data,
    loading,
    error,
  };
};
