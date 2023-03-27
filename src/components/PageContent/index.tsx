import React from 'react';
import { PropsWithChildren } from 'react';

export const PageContent: React.FC<PropsWithChildren<{ testId?: string }>> = ({
  children,
  testId = 'home',
}) => {
  return (
    <div className="content" data-testid={testId}>
      {children}
    </div>
  );
};
