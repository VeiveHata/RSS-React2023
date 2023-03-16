import { ConditionalRender } from 'components/ConditionalRender';
import { StarIcon } from 'components/Icons';
import React from 'react';
import { Nullable } from 'types/utils';

type StatusInfoProps = {
  status: string;
  rating: Nullable<string>;
};

class StatusInfo extends React.Component<StatusInfoProps> {
  render() {
    const { status, rating } = this.props;
    return (
      <div className="info">
        <h5 className="status">{status}</h5>
        <ConditionalRender condition={Boolean(rating)}>
          <h5 className="rating">
            <StarIcon fill="white" />
            {rating}
          </h5>
        </ConditionalRender>
      </div>
    );
  }
}

export default StatusInfo;
