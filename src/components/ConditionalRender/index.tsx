import React, { PropsWithChildren } from 'react';

type ConditionalRenderProps = PropsWithChildren<{ condition: boolean }>;

export const ConditionalRender: React.FC<ConditionalRenderProps> = ({ condition, children }) => {
  return <>{condition ? children : null}</>;
};
