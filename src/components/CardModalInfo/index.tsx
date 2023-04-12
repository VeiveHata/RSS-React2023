import React from 'react';
import './styles.css';
import { ConditionalRender } from 'components/ConditionalRender';
import { getPoster } from 'utils/card';
import { Title } from 'components/Card/Title';
import { MediaImage } from 'components/Media';
import { InfoSection } from './InfoSection';
import { VolumeInfo } from 'components/VolumeInfo';
import { getStatusTitle } from 'utils/common';
import { Loading } from 'components/Loading';
import {
  useGetMangaCategoriesQuery,
  useGetMangaGenresQuery,
  useGetMangaItemQuery,
} from 'api/manga';

type CardModalInfoProps = {
  id: string;
};

export const CardModalInfo: React.FC<CardModalInfoProps> = ({ id }) => {
  const { data, isLoading } = useGetMangaItemQuery(id);
  const { isLoading: genresLoading, data: genres } = useGetMangaGenresQuery(id, { skip: !id });
  const { isLoading: categoriesLoading, data: categories } = useGetMangaCategoriesQuery(id, {
    skip: !id,
  });

  return (
    <>
      <ConditionalRender condition={isLoading}>
        <Loading />
      </ConditionalRender>
      <ConditionalRender condition={!isLoading}>
        {data && (
          <div className="card-modal-content">
            <div className="card-modal-cover-image">
              <MediaImage
                src={getPoster(data.attributes.coverImage || data.attributes.posterImage)}
              />
            </div>
            <div className="card-modal-info">
              <Title
                titles={data.attributes.titles}
                canonicalTitle={data.attributes.canonicalTitle}
              />
              <VolumeInfo
                chapterCount={data.attributes.chapterCount}
                volumeCount={data.attributes.volumeCount}
                withDescrition
              />
              <InfoSection name="Status" info={[getStatusTitle(data.attributes.status)]} />
              <InfoSection name="Abbreviated Titles" info={data.attributes.abbreviatedTitles} />
              <InfoSection
                name="Genre"
                info={(genres?.data || []).map((g) => g.attributes.name)}
                loading={genresLoading}
              />
              <InfoSection
                name="Categories"
                info={(categories?.data || []).map((c) => c.attributes.title)}
                loading={categoriesLoading}
              />
              <InfoSection
                name="Serialization"
                info={data.attributes.serialization ? [data.attributes.serialization] : []}
              />
              <div className="card-modal-description">
                {data.attributes.description || data.attributes.synopsis}
              </div>
            </div>
          </div>
        )}
      </ConditionalRender>
    </>
  );
};
