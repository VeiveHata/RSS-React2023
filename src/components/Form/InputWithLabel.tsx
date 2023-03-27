import { ConditionalRender } from 'components/ConditionalRender';
import React, { PropsWithChildren } from 'react';
import { Nullable } from 'types/utils';
import './styles.css';

type InputWithLabelProps = PropsWithChildren<{
  title: string;
  errors?: Nullable<string[]>;
}>;

export const InputWithLabel: React.FC<InputWithLabelProps> = ({ title, children, errors }) => {
  return (
    <label className="formInput">
      <p className="label">{title}:</p>
      {children}
      <ConditionalRender condition={!!errors?.length}>
        <p className="input-error">{errors?.[0]}</p>
      </ConditionalRender>
    </label>
  );
};
