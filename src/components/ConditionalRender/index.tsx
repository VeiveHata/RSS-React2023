import React, { PropsWithChildren } from 'react';

type ConditionalRenderProps = PropsWithChildren<{ condition: boolean }>;

export class ConditionalRender extends React.Component<ConditionalRenderProps> {
  render() {
    const { condition, children } = this.props;
    return <>{condition ? children : null}</>;
  }
}
