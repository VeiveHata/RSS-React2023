import { SearchInput } from 'components/SearchInput';
import React, { useEffect, useState } from 'react';
import './styles.css';
import { CardsList } from 'components/CardsList';
import { PageContent } from 'components/PageContent';
import { pagesData } from 'consts/router';
import { useGetMangaList } from 'hooks/useFetch';
import { Pagination } from 'components/Pagination';
import { ConditionalRender } from 'components/ConditionalRender';
import { usePagination } from 'hooks/usePagination';
import { Modal } from 'components/Modal';
import { CardModalInfo } from 'components/CardModalInfo';
import { Loading } from 'components/Loading';
import { getValueFromLS, setValueToLS } from 'utils/localStorage';

const defaultPagination = 10;

const Cards: React.FC = () => {
  const [query, setQuery] = useState(getValueFromLS('cardsSearch'));
  const [selectedCard, setSelectedCard] = useState('');
  const { getList, data, loading, error, total } = useGetMangaList({
    defaultPagination,
  });
  const {
    currentPage,
    onPageChange,
    total: totalPagesNumber,
  } = usePagination({
    totalCount: Number(total),
    initialPage: 1,
    pagination: defaultPagination,
  });

  const getPage = (page: number) => {
    onPageChange(page, (offset) => getList({ filter: query, offset: `${offset}` }));
  };

  useEffect(() => {
    getList({ filter: query, offset: '0' });
    onPageChange(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const onCardSelect = (id: string) => {
    setSelectedCard(id);
  };

  const onModalClose = () => {
    setSelectedCard('');
  };

  const onSearchChange = (value: string) => {
    setQuery(value);
    setValueToLS('cardsSearch', value);
  };

  return (
    <PageContent testId={pagesData.library.testId}>
      <SearchInput onSearch={onSearchChange} name="cardsSearch" defaultValue={query} />
      {loading && <Loading />}
      <ConditionalRender condition={!loading && !!data && !error}>
        <CardsList mangaList={data} onCardSelect={onCardSelect} />
        <Pagination current={currentPage} total={totalPagesNumber} onPageChange={getPage} />
        <div>Total: {total}</div>
      </ConditionalRender>
      <Modal visible={!!selectedCard} onClose={onModalClose}>
        <CardModalInfo id={selectedCard} />
      </Modal>
    </PageContent>
  );
};

export default Cards;
