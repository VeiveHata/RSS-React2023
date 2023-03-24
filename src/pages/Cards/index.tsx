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
      <Page className="cards" name="home">
        <SearchInput onSearch={this.onSearch} name="cardsSearch" withSave />
        <div className="cards-wrapper">
          {mangaList.map((manga) => {
            const { attributes } = manga;
            return (
              <Card
                averageRating={attributes.averageRating}
                status={attributes.status || ''}
                posterImage={attributes.posterImage}
                canonicalTitle={attributes.canonicalTitle}
                titles={attributes.titles}
                description={attributes.description}
                synopsis={attributes.synopsis}
                serialization={attributes.serialization}
                chapterCount={attributes.chapterCount}
                volumeCount={attributes.volumeCount}
                key={manga.id}
              />
            );
          })}
        </div>
      </Page>
    );
  }
}

export default Cards;
