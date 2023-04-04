import { SearchInput } from 'components/SearchInput';
import React, { useEffect } from 'react';
import { mangaList } from 'mock/cardsMock';
import './styles.css';
import { CardsList } from 'components/CardsList';
import { PageContent } from 'components/PageContent';
import { pagesData } from 'consts/router';
import { useGetList } from 'hooks/useFetch';
import { Manga } from 'types/manga';

const Cards: React.FC = () => {
  const { getList, data = [], loading, error } = useGetList<Manga[]>();
  const onSearch = (value: string) => {
    getList({ filter: value });
  };

  useEffect(() => {
    console.log('hi');
    getList({});
  }, []);

  return (
    <PageContent testId={pagesData.library.testId}>
      <SearchInput onSearch={onSearch} name="cardsSearch" withSave />
      {loading ? <div>Loading...</div> : <CardsList mangaList={data} />}
    </PageContent>
  );
};

export default Cards;
