import { SearchInput } from 'components/SearchInput';
import React, { useEffect } from 'react';
import './styles.css';
import { CardsList } from 'components/CardsList';
import { PageContent } from 'components/PageContent';
import { pagesData } from 'consts/router';
import { useGetMangaList } from 'hooks/useFetch';
import { Manga } from 'types/manga';
import { Pagination } from 'components/Pagination';
import { ConditionalRender } from 'components/ConditionalRender';
import { usePagination } from 'hooks/usePagination';

const defaultPagination = 10;

const Cards: React.FC = () => {
  const { getList, data, loading, error, total } = useGetMangaList<Manga[]>({ defaultPagination });
  const {
    currentPage,
    onPageChange,
    total: totalPagesNumber,
  } = usePagination({
    totalCount: Number(total),
    initialPage: 1,
    pagination: defaultPagination,
  });

  const onSearch = (value: string) => {
    getList({ filter: value });
  };

  useEffect(() => {
    getList({});
  }, []);

  const getPage = (page: number) => {
    onPageChange(page, (offset) => getList({ offset: `${offset}` }));
  };

  return (
    <PageContent testId={pagesData.library.testId}>
      <SearchInput onSearch={onSearch} name="cardsSearch" withSave />
      {loading && <div>Loading...</div>}
      <ConditionalRender condition={!loading && !!data && !error}>
        <CardsList mangaList={data} />
        <Pagination current={currentPage} total={totalPagesNumber} onPageChange={getPage} />
        <div>Total: {total}</div>
      </ConditionalRender>
    </PageContent>
  );
};

export default Cards;
