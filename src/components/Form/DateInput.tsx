import React from 'react';
import { InputWithLabel } from './InputWithLabel';
import './styles.css';

type DateInputProps = {
  name: string;
};

export class DateInput extends React.Component<DateInputProps> {
  render() {
    const { name } = this.props;
    return (
      <InputWithLabel title="Date of the first publishing">
        <input className="form-input" type="date" name={name} />
      </InputWithLabel>
    );
  }
}
