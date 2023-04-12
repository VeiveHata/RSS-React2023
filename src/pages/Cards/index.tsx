import { SearchInput } from 'components/SearchInput';
import React, { useState } from 'react';
import './styles.css';
import { CardsList } from 'components/CardsList';
import { PageContent } from 'components/PageContent';
import { pagesData } from 'consts/router';
import { Pagination } from 'components/Pagination';
import { ConditionalRender } from 'components/ConditionalRender';
import { usePagination } from 'hooks/usePagination';
import { Modal } from 'components/Modal';
import { CardModalInfo } from 'components/CardModalInfo';
import { Loading } from 'components/Loading';
import { useAppDispatch, useAppSelector } from 'hooks/useDispatch';
import { selectSearchValue, update } from 'reducers/search';
import { useGetMangaListQuery } from 'api/manga';

const defaultPagination = 10;

const Cards: React.FC = () => {
  const searchValue = useAppSelector(selectSearchValue);
  const dispatch = useAppDispatch();
  const [selectedCard, setSelectedCard] = useState('');

  const { currentPage, onPageChange, offset, getTotalPagesCount } = usePagination({
    initialPage: 1,
    pagination: defaultPagination,
  });

  const { data, isLoading, isError } = useGetMangaListQuery({
    offset: `${offset}`,
    filter: searchValue,
    pagination: `${defaultPagination}`,
  });

  const getPage = (page: number) => {
    onPageChange(page);
  };

  const onCardSelect = (id: string) => {
    setSelectedCard(id);
  };

  const onModalClose = () => {
    setSelectedCard('');
  };

  const onSearchChange = (value: string) => {
    dispatch(update(value));
  };

  return (
    <PageContent testId={pagesData.library.testId}>
      <SearchInput onSearch={onSearchChange} name="cardsSearch" defaultValue={searchValue} />
      {isLoading && <Loading />}
      <ConditionalRender condition={!isLoading && !isError}>
        {data && (
          <>
            <CardsList mangaList={data.data} onCardSelect={onCardSelect} />
            <Pagination
              current={currentPage}
              total={getTotalPagesCount(data.meta.count)}
              onPageChange={getPage}
            />
            <div>Total: {data.meta.count}</div>
          </>
        )}
      </ConditionalRender>
      <Modal visible={!!selectedCard} onClose={onModalClose}>
        <CardModalInfo id={selectedCard} />
      </Modal>
    </PageContent>
  );
};

export default Cards;
