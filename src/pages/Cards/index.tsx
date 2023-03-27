import { SearchInput } from 'components/SearchInput';
import { Page } from 'components/Page';
import React from 'react';
import { mangaList } from 'mock/cardsMock';
import './styles.css';
import { CardsList } from 'components/CardsList';

const Cards: React.FC = () => {
  const onSearch = (value: string) => {
    console.log(value);
  };

  return (
    <Page className="cards" name="home" testId="cardsPage">
      <SearchInput onSearch={onSearch} name="cardsSearch" withSave />
      <CardsList mangaList={mangaList} />
    </Page>
  );
};

export default Cards;
