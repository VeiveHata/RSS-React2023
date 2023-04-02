import React from 'react';
import { PropsWithChildren } from 'react';
import './styles.css';

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
