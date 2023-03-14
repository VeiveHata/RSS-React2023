import React from 'react';
import './styles.css';

type HeaderProps = {
  name: string;
};

class Header extends React.Component<HeaderProps> {
  render() {
    return <div className="header">{this.props.name}</div>;
  }
}

export default Header;
