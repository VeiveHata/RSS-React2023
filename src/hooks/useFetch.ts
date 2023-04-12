import { mangaUrl } from 'consts/api';
import { useEffect, useState } from 'react';
import { ResponseItemStructure } from 'types/api';

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
