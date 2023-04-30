import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';
import { pagesData } from 'consts/router';

const rootMenuLinks = [pagesData.library, pagesData.about, pagesData.forms];

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  const currentPageData = Object.values(pagesData).find(
    (pageData) => pageData.path === pathname.replace('/', '')
  );
  const name = currentPageData?.name || 'library';
  const currentPage = rootMenuLinks.find((link) => link.name === name) || rootMenuLinks[0];

  return (
    <div className="header" data-testid="header">
      <h2 data-testid="headerTitle">{currentPage.title}</h2>
      <div className="links">
        {rootMenuLinks.map((link) => (
          <Link
            to={link.path}
            className={`link ${currentPage.name === link.name ? 'ative-link' : ''}`}
            key={link.name}
            data-testid={link.testId}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
