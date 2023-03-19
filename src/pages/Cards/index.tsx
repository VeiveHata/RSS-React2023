import { Card } from 'components/Card';
import { SearchInput } from 'components/SearchInput';
import { Page } from 'components/Page';
import React from 'react';
import { mangaList } from '../../../tests/mock.ts/cardsMock';
import './styles.css';

class Cards extends React.Component {
  onSearch = (value: string) => {
    console.log(value);
  };

  render() {
    return (
      <Page className="cards" name="Cards">
        <SearchInput onSearch={this.onSearch} name="cardsSearch" withSave />
        <div className="cards-wrapper">
          {mangaList.map((manga) => (
            <Card item={manga} key={manga.id} />
          ))}
        </div>
      </Page>
    );
  }
}

export default Cards;
