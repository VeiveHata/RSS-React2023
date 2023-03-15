import React from 'react';
import { Manga, Poster, PosterSize, TitleLanguage, Titles } from 'types/manga';
import './styles.css';

type CardProps = {
  manga: Manga;
};

const getTitle = (titles: Titles) => {
  const languages: TitleLanguage[] = [
    TitleLanguage.en,
    TitleLanguage.en_us,
    TitleLanguage.en_us,
    TitleLanguage.ja_jp,
  ];
  const titleLanguage = languages.find((lang) => titles[lang]) || TitleLanguage.en;
  return titles[titleLanguage];
};

const getPoster = (poster: Poster) => {
  const posterSizes: PosterSize[] = [
    PosterSize.medium,
    PosterSize.original,
    PosterSize.small,
    PosterSize.small_webp,
  ];
  const posterSize = posterSizes.find((size) => poster[size]) || PosterSize.large;
  return poster[posterSize];
};

class Card extends React.Component<CardProps> {
  render() {
    const { manga } = this.props;
    return (
      <div className="card">
        <div>
          <div className="poster">
            <img className="card-image" src={getPoster(manga.attributes.posterImage)} />
          </div>
          <h4>{getTitle(manga.attributes.titles)}</h4>
        </div>
        <div className="card-content"></div>
      </div>
    );
  }
}

export default Card;
