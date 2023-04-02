import { Header } from 'components/Header';
import { pagesData } from 'consts/router';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './styles.css';

const rootMenuLinks = [pagesData.library, pagesData.about, pagesData.forms];

export const Root: React.FC = () => {
  const { pathname } = useLocation();
  const currentPageData = Object.values(pagesData).find((pageData) => pageData.path === pathname);

  return (
    <div className="page">
      <Header links={rootMenuLinks} name={currentPageData?.name || 'library'} />
      <Outlet />
    </div>
  );
};
