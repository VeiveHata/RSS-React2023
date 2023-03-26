import { Card } from 'components/Card';
import React from 'react';
import { Manga } from 'types/manga';
import './styles.css';

export class CardsList extends React.Component<{ mangaList: Manga[] }> {
  render() {
    return (
      <div className="cards-wrapper" data-testid="cardsList">
        {this.props.mangaList.map((manga) => {
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
    );
  }
}
