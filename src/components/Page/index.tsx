import { Header } from 'components/Header';
import { routes } from 'consts/router';
import React from 'react';
import { Pages, RouterData } from 'types/route';
import './styles.css';

type PageProps = React.PropsWithChildren<{
  name: Pages;
  className?: string;
  router?: RouterData;
  testId?: string;
}>;

export class Page extends React.Component<PageProps> {
  render() {
    const {
      className = '',
      name = 'home',
      children,
      router = routes,
      testId = 'pageContainer',
    } = this.props;
    return (
      <div data-testid={testId} className={`${className} page`}>
        <Header routes={router} name={name} />
        <div className="content">{children}</div>
      </div>
    );
  }
}
