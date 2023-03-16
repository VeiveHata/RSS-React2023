import { ConditionalRender } from 'components/ConditionalRender';
import React from 'react';
import { Manga, Poster, PosterSize } from 'types/manga';
import StatusInfo from './StatusInfo';
import './styles.css';
import Title from './Title';
import VolumeInfo from './VolumeInfo';

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
        attributes: {
          averageRating,
          status,
          posterImage,
          canonicalTitle,
          titles,
          description,
          synopsis,
          serialization,
          chapterCount,
          volumeCount,
        },
      },
    } = this.props;
    return (
      <div className="card">
        <div className="poster">
          <StatusInfo status={status} rating={averageRating} />
          <img className="card-image" src={getPoster(posterImage)} />
        </div>
        <div className="card-content">
          <Title titles={titles} canonicalTitle={canonicalTitle} />
          <section className="description">{synopsis || description}</section>
          <ConditionalRender condition={Boolean(serialization)}>
            <section className="card-footer">
              <h5 className="serialization">{serialization}</h5>
              <VolumeInfo chapterCount={chapterCount} volumeCount={volumeCount} />
            </section>
          </ConditionalRender>
        </div>
      </div>
    );
  }
}

export default Card;
