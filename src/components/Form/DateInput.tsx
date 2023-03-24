import React from 'react';
import { InputProps } from 'types/form';
import { InputWithLabel } from './InputWithLabel';
import './styles.css';

type DateInputProps = InputProps;

export class DateInput extends React.Component<DateInputProps> {
  render() {
    const { name, errors } = this.props;
    return (
      <InputWithLabel title="Date of the first publishing" errors={errors}>
        <input className="form-input" type="date" max={new Date().toString()} name={name} />
      </InputWithLabel>
    );
  }
}
