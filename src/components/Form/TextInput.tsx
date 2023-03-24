import React from 'react';
import { InputProps } from 'types/form';
import { InputWithLabel } from './InputWithLabel';
import './styles.css';

type TextInputProps = InputProps & {
  title: string;
};

export class TextInput extends React.Component<TextInputProps> {
  render() {
    const { title, name, errors } = this.props;
    return (
      <InputWithLabel title={title} errors={errors}>
        <input className="form-input" type="text" name={name} />
      </InputWithLabel>
    );
  }
}

export class TextAreaInput extends React.Component<TextInputProps> {
  render() {
    const { title, name, errors } = this.props;
    return (
      <InputWithLabel title={title} errors={errors}>
        <textarea rows={10} className="form-input textarea" name={name} />
      </InputWithLabel>
    );
  }
}
