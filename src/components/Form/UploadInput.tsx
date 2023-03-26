import React from 'react';
import { InputProps } from 'types/form';
import { InputWithLabel } from './InputWithLabel';
import './styles.css';

type UploadInputProps = InputProps & {
  title: string;
};

export class UploadInput extends React.Component<UploadInputProps> {
  render() {
    const { title, name, errors } = this.props;
    return (
      <InputWithLabel title={title} errors={errors}>
        <input
          type="file"
          accept="image/png, image/gif, image/jpeg"
          name={name}
          className="custom-file-input"
          data-testid={name}
        />
      </InputWithLabel>
    );
  }
}
