import { ConditionalRender } from 'components/ConditionalRender';
import React from 'react';
import { InputProps, SelectOption } from 'types/form';
import { MangaStatus } from 'types/manga';
import './styles.css';

type CheckboxProps = InputProps & {
  options: SelectOption<MangaStatus>[];
};

export class RadioButtons extends React.Component<CheckboxProps> {
  render() {
    const { options, name, errors } = this.props;
    return (
      <>
        {options.map((option) => (
          <span key={option.value} className="radio-input">
            <input
              type="radio"
              id={option.value}
              name={name}
              data-testid={`${name}-${option.value}`}
            />
            <label htmlFor={option.value} className="radio-label">
              {option.text}
            </label>
          </span>
        ))}
        <ConditionalRender condition={!!errors?.length}>
          <p className="input-error">{errors?.[0]}</p>
        </ConditionalRender>
      </>
    );
  }
}
