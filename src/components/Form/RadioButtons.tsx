import { ConditionalRender } from 'components/ConditionalRender';
import React from 'react';
import { FormErrorsTypes, InputProps, SelectOption } from 'types/form';
import { MangaStatus } from 'types/manga';
import { formValidationSchema, getErrorMessage } from 'utils/form';
import './styles.css';

type CheckboxProps = InputProps & {
  options: SelectOption<MangaStatus>[];
};

export const RadioButtons: React.FC<CheckboxProps> = ({ options, name, errors, register }) => {
  return (
    <>
      {options.map((option) => (
        <span key={option.value} className="radio-input">
          <input
            type="radio"
            id={option.value}
            data-testid={`${name}-${option.value}`}
            value={option.value}
            {...register(name, {
              validate: formValidationSchema[name],
            })}
          />
          <label htmlFor={option.value} className="radio-label">
            {option.text}
          </label>
        </span>
      ))}
      <ConditionalRender condition={!!errors}>
        <p className="input-error">{getErrorMessage(errors?.type as FormErrorsTypes)}</p>
      </ConditionalRender>
    </>
  );
};
