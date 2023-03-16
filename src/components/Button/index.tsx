import React from 'react';
import './styles.css';

type ButtonProps = React.PropsWithChildren<{
  onClick?: () => void;
}>;

class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <button onClick={this.props.onClick} className="button">
        {this.props.children}
      </button>
    );
  }
}

export default Button;
