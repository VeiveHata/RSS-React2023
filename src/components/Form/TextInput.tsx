import React from 'react';
import { InputProps } from 'types/form';
import { InputWithLabel } from './InputWithLabel';
import './styles.css';
import { formValidationSchema } from 'utils/form';

type TextInputProps = InputProps & {
  title: string;
};

export const TextInput: React.FC<TextInputProps> = ({ title, name, errors, register }) => {
  return (
    <InputWithLabel title={title} errors={errors}>
      <input
        className="form-input"
        type="text"
        data-testid={name}
        {...register(name, {
          validate: formValidationSchema[name],
        })}
      />
    </InputWithLabel>
  );
};

export const TextAreaInput: React.FC<TextInputProps> = ({ title, name, errors, register }) => {
  return (
    <InputWithLabel title={title} errors={errors}>
      <textarea
        rows={10}
        className="form-input textarea"
        data-testid={name}
        {...register(name, {
          validate: formValidationSchema[name],
        })}
      />
    </InputWithLabel>
  );
};
