import { SearchInput } from 'components/SearchInput';
import { Page } from 'components/Page';
import React from 'react';
import { mangaList } from 'mock/cardsMock';
import './styles.css';
import { CardsList } from 'components/CardsList';
class Cards extends React.Component {
  onSearch = (value: string) => {
    console.log(value);
  };

  render() {
    return (
      <Page className="cards" name="home" testId="cardsPage">
        <SearchInput onSearch={this.onSearch} name="cardsSearch" withSave />
        <CardsList mangaList={mangaList} />
      </Page>
    );
  }
}

export default Cards;
