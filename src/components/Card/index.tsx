import React from 'react';
import { Manga, Poster, PosterSize, TitleLanguage, Titles } from 'types/manga';
import './styles.css';
import Title from './Title';

type CardProps = {
  manga: Manga;
};

const posterSizes: PosterSize[] = [
  PosterSize.medium,
  PosterSize.original,
  PosterSize.small,
  PosterSize.small_webp,
];
const getPoster = (poster: Poster) => {
  const posterSize = posterSizes.find((size) => poster[size]) || PosterSize.large;
  return poster[posterSize];
};

class Card extends React.Component<CardProps> {
  render() {
    const {
      manga: {
        attributes: { posterImage, canonicalTitle, titles, description, synopsis, serialization },
      },
    } = this.props;
    return (
      <div className="card">
        <div className="poster">
          <img className="card-image" src={getPoster(posterImage)} />
        </div>
        <div className="card-content">
          <Title titles={titles} canonicalTitle={canonicalTitle} />
          <section className="description">{synopsis || description}</section>
          <h5 className="serialization">{serialization}</h5>
        </div>
      </div>
    );
  }
}

export default Card;
