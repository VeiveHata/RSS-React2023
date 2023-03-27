import { ConditionalRender } from 'components/ConditionalRender';
import React from 'react';
import { InputProps } from 'types/form';
import './styles.css';

type CheckboxProps = InputProps & {
  title: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({ title, name, errors }) => {
  return (
    <>
      <span>
        <input type="checkbox" id={name} name={name} data-testid={name} />
        <label htmlFor={name}>{title}</label>
      </span>
      <ConditionalRender condition={!!errors?.length}>
        <p className="input-error">{errors?.[0]}</p>
      </ConditionalRender>
    </>
  );
};
