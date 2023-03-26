import React from 'react';
import './styles.css';

type ButtonProps = React.PropsWithChildren<
  React.HTMLProps<HTMLButtonElement> & {
    onClick?: () => void;
    id?: string;
  }
>;

export class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <button
        data-testid={this.props.id || 'button'}
        onClick={this.props.onClick}
        className="button"
      >
        {this.props.children}
      </button>
    );
  }
}
