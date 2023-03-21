import { languageOptions, statusOptions } from 'consts/form';
import React from 'react';
import { Checkbox } from './Checkbox';
import { InputWithLabel } from './InputWithLabel';
import { RadioButtons } from './RadioButtons';
import { SelectInput } from './Select';
import './styles.css';
import { TextInput } from './TextInput';
import { UploadInput } from './UploadInput';

export class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <UploadInput name="poster" title="Add a poster" />
        <fieldset className="fieldset">
          <SelectInput
            title="Choose language of title"
            name="titleLang"
            options={languageOptions}
          />
          <TextInput title="Title" name="name" />
          <Checkbox name="canonicalTitle" title="Set title as canonical" />
        </fieldset>
        <InputWithLabel title="Date of the first publishing">
          <input className="form-input" type="date" name="startDate" />
        </InputWithLabel>
        <fieldset className="fieldset">
          <legend className="legend">Choose actual manga status:</legend>
          <RadioButtons options={statusOptions} name="status" />
        </fieldset>
      </form>
    );
  }
}
