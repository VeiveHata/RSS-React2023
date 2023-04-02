import React, { PropsWithChildren } from 'react';
import './styles.css';

export const TitleH2: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h2 data-testid="titleH2" className="h2">
      {children}
    </h2>
  );
};
