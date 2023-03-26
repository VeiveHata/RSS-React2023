import React from 'react';
import { InputProps, SelectOption } from 'types/form';
import { InputWithLabel } from './InputWithLabel';
import './styles.css';

type SelectInputProps = InputProps & {
  title: string;
  options: SelectOption<string>[];
};

export class SelectInput extends React.Component<SelectInputProps> {
  render() {
    const { title, name, options, errors } = this.props;
    return (
      <InputWithLabel title={title} errors={errors}>
        <select name={name} className="form-input" data-testid={name}>
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </InputWithLabel>
    );
  }
}
