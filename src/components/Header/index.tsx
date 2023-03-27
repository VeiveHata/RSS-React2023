import React from 'react';
import { Link } from 'react-router-dom';
import { Pages, RouterData } from 'types/route';
import './styles.css';

type HeaderProps = {
  name: Pages;
  routes: RouterData;
};

export const Header: React.FC<HeaderProps> = ({ routes, name }) => {
  return (
    <div className="header" data-testid="header">
      <h2 data-testid="headerTitle">{routes[name].title}</h2>
      <div className="links">
        <Link
          to={routes.home.path}
          className={`link ${name === routes.home.name ? 'ative-link' : ''}`}
        >
          {routes.home.title}
        </Link>
        <Link
          to={routes.about.path}
          className={`link ${name === routes.about.name ? 'ative-link' : ''}`}
        >
          {routes.about.title}
        </Link>
        <Link
          to={routes.forms.path}
          className={`link ${name === routes.forms.name ? 'ative-link' : ''}`}
        >
          {routes.forms.title}
        </Link>
      </div>
    </div>
  );
};
