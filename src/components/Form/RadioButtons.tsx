import React from 'react';
import { SelectOption } from 'types/form';
import { MangaStatus } from 'types/manga';
import './styles.css';

type CheckboxProps = {
  name: string;
  options: SelectOption<MangaStatus>[];
};

export class RadioButtons extends React.Component<CheckboxProps> {
  render() {
    const { options, name } = this.props;
    return (
      <>
        {options.map((option) => (
          <span key={option.value} className="radio-input">
            <input type="radio" id={option.value} name={name} />
            <label htmlFor={option.value} className="radio-label">
              {option.text}
            </label>
          </span>
        ))}
      </>
    );
  }
}
