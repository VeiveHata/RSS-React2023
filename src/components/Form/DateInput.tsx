import React from 'react';
import { InputProps } from 'types/form';
import { formValidationSchema } from 'utils/form';
import { InputWithLabel } from './InputWithLabel';
import './styles.css';

type DateInputProps = InputProps;

export const DateInput: React.FC<DateInputProps> = ({ name, errors, register }) => {
  return (
    <InputWithLabel title="Date of the first publishing" errors={errors}>
      <input
        className="form-input"
        type="date"
        data-testid={name}
        max={new Date().toString()}
        {...register(name, {
          validate: formValidationSchema[name],
        })}
      />
    </InputWithLabel>
  );
};
