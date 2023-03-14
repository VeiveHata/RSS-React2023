import Header from 'components/Header';
import React from 'react';

type PageProps = {
  name: string;
  className: string;
};

class Page extends React.Component<PageProps> {
  render() {
    return (
      <div className={this.props.className}>
        <Header name={this.props.name} />
      </div>
    );
  }
}

export default Page;
