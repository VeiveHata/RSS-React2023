import React from 'react';
import { InputWithLabel } from './InputWithLabel';
import './styles.css';

type TextInputProps = {
  title: string;
  name: string;
};

export class TextInput extends React.Component<TextInputProps> {
  render() {
    const { title, name } = this.props;
    return (
      <InputWithLabel title={title}>
        <input className="form-input" type="text" name={name} />
      </InputWithLabel>
    );
  }
}
