import { ConditionalRender } from 'components/ConditionalRender';
import React, { PropsWithChildren } from 'react';
import './styles.css';
import { FormErrorsTypes, InputProps } from 'types/form';
import { getErrorMessage } from 'utils/form';

type InputWithLabelProps = PropsWithChildren<
  Omit<InputProps, 'register' | 'name'> & {
    title: string;
  }
>;

export const InputWithLabel: React.FC<InputWithLabelProps> = ({ title, children, errors }) => {
  return (
    <label className="formInput">
      <p className="label">{title}:</p>
      {children}
      <ConditionalRender condition={!!errors}>
        <p className="input-error">{getErrorMessage(errors?.type as FormErrorsTypes)}</p>
      </ConditionalRender>
    </label>
  );
};
