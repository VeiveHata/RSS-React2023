import { useCallback, useMemo, useState } from 'react';

type UsePaginationProps = {
  pagination: number;
  initialPage: number;
};

export const usePagination = ({ pagination, initialPage }: UsePaginationProps) => {
  const [page, setPage] = useState(initialPage);
  const [offset, setOffset] = useState(initialPage);

  const onPageChange = useCallback(
    (selectedPage: number) => {
      setPage(selectedPage);
      const offset = (selectedPage - 1) * pagination;
      setOffset(offset);
    },
    [pagination]
  );

  const getTotalPagesCount = useCallback(
    (totalCount: number) => {
      return Math.ceil(totalCount / pagination);
    },
    [pagination]
  );

  return useMemo(() => {
    return {
      getTotalPagesCount: getTotalPagesCount,
      onPageChange,
      currentPage: page,
      offset,
    };
  }, [getTotalPagesCount, offset, onPageChange, page]);
};
