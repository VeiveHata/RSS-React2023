import React, { PropsWithChildren } from 'react';
import './styles.css';

export class TitleH2 extends React.Component<PropsWithChildren> {
  render() {
    return <h2 className="h2">{this.props.children}</h2>;
  }
}
