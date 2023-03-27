import { ConditionalRender } from 'components/ConditionalRender';
import { BookIcon, PageIcon } from 'components/Icons';
import React from 'react';
import { Nullable } from 'types/utils';

type VolumeInfoProps = {
  chapterCount: Nullable<number>;
  volumeCount: Nullable<number>;
};

export const VolumeInfo: React.FC<VolumeInfoProps> = ({ volumeCount, chapterCount }) => {
  return (
    <div className="volume-info">
      <ConditionalRender condition={Boolean(volumeCount)}>
        <section className="count">
          <BookIcon />
          {volumeCount}
        </section>
      </ConditionalRender>
      <ConditionalRender condition={Boolean(chapterCount)}>
        <section className="count">
          <PageIcon />
          {chapterCount}
        </section>
      </ConditionalRender>
    </div>
  );
};
