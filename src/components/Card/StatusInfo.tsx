import { ConditionalRender } from 'components/ConditionalRender';
import { StarIcon } from 'components/Icons';
import React from 'react';
import { Nullable } from 'types/utils';

type StatusInfoProps = {
  status: string;
  rating: Nullable<string>;
};

export const StatusInfo: React.FC<StatusInfoProps> = ({ status, rating }) => {
  return (
    <div className="info">
      <h5 className="status">{status}</h5>
      <ConditionalRender condition={Boolean(rating)}>
        <h5 className="rating" data-testid="rating">
          <StarIcon fill="white" />
          {rating}
        </h5>
      </ConditionalRender>
    </div>
  );
};
