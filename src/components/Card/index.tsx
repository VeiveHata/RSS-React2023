import { ConditionalRender } from 'components/ConditionalRender';
import React from 'react';
import { Poster, Titles } from 'types/manga';
import { Nullable } from 'types/utils';
import { getPoster } from 'utils/card';
import { StatusInfo } from './StatusInfo';
import './styles.css';
import { Title } from './Title';
import { VolumeInfo } from '../VolumeInfo';
import { MediaImage } from 'components/Media';

type CardProps = {
  averageRating?: Nullable<string>;
  status?: string;
  posterImage: Poster;
  canonicalTitle?: string;
  titles: Titles;
  description?: string;
  synopsis?: string;
  serialization?: Nullable<string>;
  chapterCount?: Nullable<number>;
  volumeCount?: Nullable<number>;
  onClick?: () => void;
  id: string;
};

export const Card: React.FC<CardProps> = ({
  averageRating = '',
  status = '',
  posterImage,
  canonicalTitle = '',
  titles,
  description,
  synopsis,
  serialization,
  chapterCount = null,
  volumeCount = null,
  onClick,
  id,
}) => {
  return (
    <div className="card" onClick={onClick} data-testid={`card-${id}`}>
      <div className="poster">
        <StatusInfo status={status} rating={averageRating} />
        <div className="card-image">
          <MediaImage src={getPoster(posterImage)} />
        </div>
      </div>
      <div className="card-content">
        <Title titles={titles} canonicalTitle={canonicalTitle} />
        <ConditionalRender condition={Boolean(synopsis || description)}>
          <section className="description">{synopsis || description}</section>
        </ConditionalRender>
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
};
