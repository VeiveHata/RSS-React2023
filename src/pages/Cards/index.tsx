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

const Cards: React.FC = () => {
  const { getList, data, loading, error, pagination, total } = useGetMangaList<Manga[]>();
  const onSearch = (value: string) => {
    getList({ filter: value });
  };

  useEffect(() => {
    getList({});
  }, []);

  const getFirstPage = () => {
    getList({ url: pagination?.first });
  };

  const getNextPage = () => {
    getList({ url: pagination?.next });
  };

  const getLastPage = () => {
    getList({ url: pagination?.last });
  };

  return (
    <PageContent testId={pagesData.library.testId}>
      <SearchInput onSearch={onSearch} name="cardsSearch" withSave />
      {loading && <div>Loading...</div>}
      <ConditionalRender condition={!loading && !!data && !error}>
        <CardsList mangaList={data} />
        <Pagination onLast={getLastPage} onNext={getNextPage} onFirst={getFirstPage} />
        <div>Total: {total}</div>
      </ConditionalRender>
    </PageContent>
  );
};

export default Cards;
