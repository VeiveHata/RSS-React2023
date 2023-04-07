import { ConditionalRender } from 'components/ConditionalRender';
import { TitleH4 } from 'components/Title';
import React from 'react';

type InfoSectionProps = {
  name: string;
  info: string[];
  loading?: boolean;
};

export const InfoSection: React.FC<InfoSectionProps> = ({ name, info, loading }) => {
  return (
    <div className="info-section">
      <TitleH4>{name}</TitleH4>
      <ConditionalRender condition={!!loading}>
        <span>Loading...</span>
      </ConditionalRender>
      <ConditionalRender condition={!loading}>
        <span className="info-section-info">{!!info.length ? info.join(', ') : 'No data'}</span>
      </ConditionalRender>
    </div>
  );
};
