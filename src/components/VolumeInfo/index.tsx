import { ConditionalRender } from 'components/ConditionalRender';
import { BookIcon, PageIcon } from 'components/Icons';
import React from 'react';
import { Nullable } from 'types/utils';
import './styles.css';

type VolumeInfoProps = {
  chapterCount: Nullable<number>;
  volumeCount: Nullable<number>;
  withDescrition?: boolean;
};

export const VolumeInfo: React.FC<VolumeInfoProps> = ({
  volumeCount,
  chapterCount,
  withDescrition = false,
}) => {
  return (
    <div className="volume-info">
      <ConditionalRender condition={Boolean(volumeCount)}>
        <section className="count">
          <BookIcon />
          {volumeCount}
          {withDescrition && ' Volumes'}
        </section>
      </ConditionalRender>
      <ConditionalRender condition={Boolean(chapterCount)}>
        <section className="count">
          <PageIcon />
          {chapterCount}
          {withDescrition && ' Chapters'}
        </section>
      </ConditionalRender>
    </div>
  );
};
