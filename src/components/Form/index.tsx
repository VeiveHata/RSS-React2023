import { formFields, languageOptions, statusOptions } from 'consts/form';
import React, { RefObject } from 'react';
import { Checkbox } from './Checkbox';
import { InputWithLabel } from './InputWithLabel';
import { RadioButtons } from './RadioButtons';
import { SelectInput } from './Select';
import './styles.css';
import { TextInput } from './TextInput';
import { UploadInput } from './UploadInput';
import { Button } from 'components/Button';
import { FormField, FormSubmitValues } from 'types/form';

type FormProps = {
  onSubmit: (formValues: FormSubmitValues) => void;
};
export class Form extends React.Component<FormProps> {
  formRef: RefObject<HTMLFormElement> = React.createRef();

  getBase64 = async (file: File | undefined) => {
    if (!file) return '';
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file as Blob);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = this.formRef.current;
    if (!formElement) return;

    const formElements = formElement.elements as unknown as Record<FormField, HTMLInputElement>;
    const isStatusSelected = formElements[formFields.status]?.value === 'on';

    const getRadioButtonsValue = (formRadioValues: HTMLInputElement[]) => {
      return Array.from(formRadioValues).find((input) => input.checked)?.id;
    };

    const responseBody = {
      poster: '',
      title: formElements[formFields.title]?.value,
      description: formElements[formFields.description]?.value,
      language: formElements[formFields.titleLang]?.value,
      isCanonical: formElements[formFields.canonicalTitle]?.value === 'on',
      startDate: formElements[formFields.startDate]?.value,
      status: isStatusSelected
        ? getRadioButtonsValue(formElements.status as unknown as HTMLInputElement[])
        : null,
    };
    const poster = await this.getBase64(formElements[formFields.poster]?.files?.[0]);

    this.props.onSubmit({
      posterImage: {
        medium: poster as string,
        meta: {
          dimensions: {},
        },
      },
      titles: {
        [responseBody.language]: responseBody.title,
      },
      canonicalTitle: responseBody.isCanonical ? responseBody.title : '',
      startDate: responseBody.startDate,
      status: responseBody.status || '',
      description: responseBody.description,
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit} ref={this.formRef}>
        <UploadInput name={formFields.poster} title="Add a poster" />
        <fieldset className="fieldset">
          <SelectInput
            title="Choose language of title"
            name={formFields.titleLang}
            options={languageOptions}
          />
          <TextInput title="Title" name={formFields.title} />
          <Checkbox name={formFields.canonicalTitle} title="Set title as canonical" />
          <TextInput title="Description" name={formFields.description} />
        </fieldset>
        <InputWithLabel title="Date of the first publishing">
          <input className="form-input" type="date" name={formFields.startDate} />
        </InputWithLabel>
        <fieldset className="fieldset">
          <legend className="legend">Choose actual manga status:</legend>
          <RadioButtons options={statusOptions} name={formFields.status} />
        </fieldset>
        <Button type="submit">Add to the library</Button>
      </form>
    );
  }
}
