import React from 'react';
import { InputProps } from 'types/form';
import { formValidationSchema } from 'utils/form';
import { InputWithLabel } from './InputWithLabel';
import './styles.css';

type UploadInputProps = InputProps & {
  title: string;
};

export const UploadInput: React.FC<UploadInputProps> = ({ title, name, errors, register }) => {
  return (
    <InputWithLabel title={title} errors={errors}>
      <input
        type="file"
        accept="image/png, image/gif, image/jpeg"
        className="custom-file-input"
        data-testid={name}
        {...register(name, {
          validate: formValidationSchema[name],
        })}
      />
    </InputWithLabel>
  );
};
