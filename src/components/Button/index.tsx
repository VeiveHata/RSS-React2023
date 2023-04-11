import React from 'react';
import './styles.css';

type ButtonProps = React.PropsWithChildren<
  React.HTMLProps<HTMLButtonElement> & {
    onClick?: () => void;
    id?: string;
    small?: boolean;
    selected?: boolean;
  }
>;

export const Button: React.FC<ButtonProps> = ({
  id,
  onClick,
  children,
  small = false,
  selected = false,
}) => {
  return (
    <button
      data-testid={id || 'button'}
      onClick={onClick}
      className={`button ${small ? 'small-button' : ''} ${selected ? 'selected-button' : ''}`}
    >
      {children}
    </button>
  );
};
