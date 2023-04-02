import React from 'react';
import { Link } from 'react-router-dom';
import { PageInfo, Pages } from 'types/route';
import './styles.css';

type HeaderProps = {
  name: Pages;
  links: PageInfo[];
};

export const Header: React.FC<HeaderProps> = ({ links, name }) => {
  const currentPage = links.find((link) => link.name === name) || links[0];
  return (
    <div className="header" data-testid="header">
      <h2 data-testid="headerTitle">{currentPage.title}</h2>
      <div className="links">
        {links.map((link) => (
          <Link
            to={link.path}
            className={`link ${currentPage.name === link.name ? 'ative-link' : ''}`}
            key={link.name}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
