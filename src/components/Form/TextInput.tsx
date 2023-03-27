import React from 'react';
import { InputProps } from 'types/form';
import { InputWithLabel } from './InputWithLabel';
import './styles.css';

type TextInputProps = InputProps & {
  title: string;
};

export const TextInput: React.FC<TextInputProps> = ({ title, name, errors }) => {
  return (
    <InputWithLabel title={title} errors={errors}>
      <input className="form-input" type="text" data-testid={name} name={name} />
    </InputWithLabel>
  );
};

export const TextAreaInput: React.FC<TextInputProps> = ({ title, name, errors }) => {
  return (
    <InputWithLabel title={title} errors={errors}>
      <textarea rows={10} className="form-input textarea" name={name} data-testid={name} />
    </InputWithLabel>
  );
};
