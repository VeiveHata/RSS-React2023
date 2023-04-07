import React, { PropsWithChildren } from 'react';
import './styles.css';

export const TitleH2: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h2 data-testid="titleH2" className="h2">
      {children}
    </h2>
  );
};

export const TitleH4: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h4 data-testid="titleH4" className="h4">
      {children}
    </h4>
  );
};
