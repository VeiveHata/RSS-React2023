import { Card } from 'components/Card';
import React from 'react';
import { Manga } from 'types/manga';
import './styles.css';

export const CardsList: React.FC<{ mangaList: Manga[]; onCardSelect?: (id: string) => void }> = ({
  mangaList,
  onCardSelect,
}) => {
  return (
    <div className="cards-wrapper" data-testid="cardsList">
      {mangaList.map((manga) => {
        const { attributes } = manga;
        return (
          <Card
            averageRating={attributes.averageRating}
            status={attributes.status || ''}
            posterImage={attributes.posterImage}
            canonicalTitle={attributes.canonicalTitle}
            titles={attributes.titles}
            serialization={attributes.serialization}
            chapterCount={attributes.chapterCount}
            volumeCount={attributes.volumeCount}
            key={manga.id}
            onClick={() => onCardSelect && onCardSelect(manga.id)}
            id={manga.id}
          />
        );
      })}
    </div>
  );
};
