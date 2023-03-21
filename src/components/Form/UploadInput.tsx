import React from 'react';
import { InputWithLabel } from './InputWithLabel';
import './styles.css';

type UploadInputProps = {
  title: string;
  name: string;
};

export class UploadInput extends React.Component<UploadInputProps> {
  render() {
    const { title, name } = this.props;
    return (
      <InputWithLabel title={title}>
        <input
          type="file"
          accept="image/png, image/gif, image/jpeg"
          name={name}
          className="custom-file-input"
        />
      </InputWithLabel>
    );
  }
}
