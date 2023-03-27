import { SearchInput } from 'components/SearchInput';
import React from 'react';
import { mangaList } from 'mock/cardsMock';
import './styles.css';
import { CardsList } from 'components/CardsList';
import { PageContent } from 'components/PageContent';
import { pagesData } from 'consts/router';

const Cards: React.FC = () => {
  const onSearch = (value: string) => {
    console.log(value);
  };

  return (
    <PageContent testId={pagesData.library.testId}>
      <SearchInput onSearch={onSearch} name="cardsSearch" withSave />
      <CardsList mangaList={mangaList} />
    </PageContent>
  );
};

export default Cards;
