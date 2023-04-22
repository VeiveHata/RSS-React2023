import { Header } from 'components/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import './styles.css';

export const Root: React.FC = () => {
  return (
    <Suspense fallback={'Loading'}>
      <div className="page">
        <Header />
        <Outlet />
      </div>
    </Suspense>
  );
};
