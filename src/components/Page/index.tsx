import Header from 'components/Header';
import React from 'react';
import './styles.css';

type PageProps = React.PropsWithChildren<{
  name: string;
  className: string;
}>;

class Page extends React.Component<PageProps> {
  render() {
    const { className = '', name = 'page', children } = this.props;
    return (
      <div className={`${className} page`}>
        <Header name={name} />
        <div className="content">{children}</div>
      </div>
    );
  }
}

export default Page;
