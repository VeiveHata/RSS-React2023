import React from 'react';
import './styles.css';

type ButtonProps = React.PropsWithChildren<
  React.HTMLProps<HTMLButtonElement> & {
    onClick?: () => void;
    id?: string;
  }
>;

export const Button: React.FC<ButtonProps> = ({ id, onClick, children }) => {
  return (
    <button data-testid={id || 'button'} onClick={onClick} className="button">
      {children}
    </button>
  );
};
