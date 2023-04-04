import { useCallback, useMemo, useState } from 'react';

type UsePaginationProps = {
  totalCount: number;
  pagination: number;
  initialPage: number;
};

export const usePagination = ({ totalCount, pagination, initialPage }: UsePaginationProps) => {
  const [page, setPage] = useState(initialPage);

  const onPageChange = useCallback(
    (selectedPage: number, callback?: (offsetValue: number) => void) => {
      setPage(selectedPage);
      const offset = (selectedPage - 1) * pagination;
      callback && callback(offset);
    },
    [pagination]
  );

  return useMemo(() => {
    return {
      total: Math.ceil(totalCount / pagination),
      onPageChange,
      currentPage: page,
    };
  }, [onPageChange, page, pagination, totalCount]);
};
