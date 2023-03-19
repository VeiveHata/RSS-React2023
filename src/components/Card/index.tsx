import { ConditionalRender } from 'components/ConditionalRender';
import React from 'react';
import { Manga } from 'types/manga';
import { getPoster } from 'utils/card';
import { StatusInfo } from './StatusInfo';
import './styles.css';
import { Title } from './Title';
import { VolumeInfo } from './VolumeInfo';

type CardProps = {
  item: Manga;
};

export class Card extends React.Component<CardProps> {
  render() {
    const {
      item: {
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
          <section className="card-footer">
            <ConditionalRender condition={Boolean(serialization)}>
              <h5 data-testid="serialization" className="serialization">
                {serialization}
              </h5>
            </ConditionalRender>
            <VolumeInfo chapterCount={chapterCount} volumeCount={volumeCount} />
          </section>
        </div>
      </div>
    );
  }
}
