import { ConditionalRender } from 'components/ConditionalRender';
import React from 'react';
import { FormErrorsTypes, InputProps } from 'types/form';
import { formValidationSchema, getErrorMessage } from 'utils/form';
import './styles.css';

type CheckboxProps = InputProps & {
  title: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({ title, name, errors, register }) => {
  return (
    <>
      <span>
        <input
          type="checkbox"
          id={name}
          data-testid={name}
          {...register(name, {
            validate: formValidationSchema[name],
          })}
        />
        <label htmlFor={name}>{title}</label>
      </span>
      <ConditionalRender condition={!!errors}>
        <p className="input-error">{getErrorMessage(errors?.type as FormErrorsTypes)}</p>
      </ConditionalRender>
    </>
  );
};
