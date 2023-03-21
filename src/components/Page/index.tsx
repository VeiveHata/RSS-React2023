import { Header } from 'components/Header';
import { routes } from 'consts/router';
import React from 'react';
import { Pages } from 'types/route';
import './styles.css';

type PageProps = React.PropsWithChildren<{
  name: Pages;
  className?: string;
}>;

export class Page extends React.Component<PageProps> {
  render() {
    const { className = '', name = 'home', children } = this.props;
    return (
      <div className={`${className} page`}>
        <Header routes={routes} name={name} />
        <div className="content">{children}</div>
      </div>
    );
  }
}
