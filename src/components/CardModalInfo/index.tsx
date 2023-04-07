import React, { useEffect } from 'react';
import './styles.css';
import { useFetch, useGetMangaItem } from 'hooks/useFetch';
import { Manga, Genre, Category } from 'types/manga';
import { ConditionalRender } from 'components/ConditionalRender';
import { getPoster } from 'utils/card';
import { Title } from 'components/Card/Title';
import { MediaImage } from 'components/Media';
import { InfoSection } from './InfoSection';
import { VolumeInfo } from 'components/VolumeInfo';
import { getStatusTitle } from 'utils/common';

type CardModalInfoProps = {
  id: string;
};

export const CardModalInfo: React.FC<CardModalInfoProps> = ({ id }) => {
  const { data, loading } = useGetMangaItem<Manga>({ id });
  const { fetchData: fetchGenres, loading: genresLoading, response: genres } = useFetch<Genre[]>();
  const {
    fetchData: fetchCategories,
    loading: categoriesLoading,
    response: categories,
  } = useFetch<Category[]>();

  useEffect(() => {
    if (data && !genres && !genresLoading) {
      fetchGenres(data.relationships.genres.links.related);
    }
  }, [data, fetchGenres, genres, genresLoading]);

  useEffect(() => {
    if (data && !categories && !categoriesLoading) {
      fetchCategories(data.relationships.categories.links.related);
    }
  }, [data, fetchCategories, categories, categoriesLoading]);

  return (
    <>
      <ConditionalRender condition={loading}>
        <div>Loading...</div>
      </ConditionalRender>
      <ConditionalRender condition={!loading}>
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
              <InfoSection name="Serialization" info={[data.attributes.serialization || '']} />
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
