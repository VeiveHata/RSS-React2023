import React from 'react';
import { SelectOption } from 'types/form';
import { InputWithLabel } from './InputWithLabel';
import './styles.css';

type SelectInputProps = {
  title: string;
  name: string;
  options: SelectOption<string>[];
};

export class SelectInput extends React.Component<SelectInputProps> {
  render() {
    const { title, name, options } = this.props;
    return (
      <InputWithLabel title={title}>
        <select name={name} className="form-input">
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
