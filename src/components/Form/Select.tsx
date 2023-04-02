import React from 'react';
import { InputProps, SelectOption } from 'types/form';
import { formValidationSchema } from 'utils/form';
import { InputWithLabel } from './InputWithLabel';
import './styles.css';

type SelectInputProps = InputProps & {
  title: string;
  options: SelectOption<string>[];
};

export const SelectInput: React.FC<SelectInputProps> = ({
  title,
  name,
  options,
  errors,
  register,
}) => {
  return (
    <InputWithLabel title={title} errors={errors}>
      <select
        className="form-input"
        data-testid={name}
        {...register(name, {
          validate: formValidationSchema[name],
        })}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </InputWithLabel>
  );
};
