import { emptyFormErrors, languageOptions, statusOptions } from 'consts/form';
import React, { RefObject } from 'react';
import { Checkbox } from './Checkbox';
import { RadioButtons } from './RadioButtons';
import { SelectInput } from './Select';
import './styles.css';
import { TextAreaInput, TextInput } from './TextInput';
import { UploadInput } from './UploadInput';
import { Button } from 'components/Button';
import { FormElements, FormErrors, FormField, FormSubmitValues } from 'types/form';
import { DateInput } from './DateInput';
import { getBase64, getFormValuesAsObject, validateForm } from 'utils/form';

type FormProps = {
  onSubmit: (formValues: FormSubmitValues, callback?: () => void) => void;
};

type FormState = {
  errors: FormErrors;
};
export class Form extends React.Component<FormProps, FormState> {
  state: FormState = {
    errors: { ...emptyFormErrors },
  };
  formRef: RefObject<HTMLFormElement> = React.createRef();

  clearForm = () => {
    this.formRef.current?.reset();
    this.setState({ errors: { ...emptyFormErrors } });
  };

  handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = this.formRef.current;
    if (!formElement) return;

    const formElements = formElement.elements as unknown as FormElements;

    const formObject = getFormValuesAsObject(formElements);

    const poster = await getBase64(formObject.poster);

    const { hasErrors, errors } = validateForm(formObject);

    if (hasErrors) {
      this.setState({ errors });
    } else {
      this.props.onSubmit(
        {
          posterImage: {
            medium: poster as string,
            meta: {
              dimensions: {},
            },
          },
          titles: {
            [formObject.titleLang]: formObject.title,
          },
          canonicalTitle: formObject.canonicalTitle ? formObject.title : '',
          startDate: formObject.startDate,
          status: formObject.status,
          description: formObject.description,
        },
        this.clearForm
      );
    }
  };

  render() {
    return (
      <form
        className="form"
        data-testid="mangaForm"
        onSubmit={this.handleSubmit}
        ref={this.formRef}
      >
        <UploadInput
          name={FormField.poster}
          title="Add a poster"
          errors={this.state.errors.poster}
        />
        <fieldset className="fieldset">
          <SelectInput
            title="Choose language of title"
            name={FormField.titleLang}
            options={languageOptions}
            errors={this.state.errors.titleLang}
          />
          <TextInput title="Title" name={FormField.title} errors={this.state.errors.title} />
          <Checkbox
            name={FormField.canonicalTitle}
            title="Set title as canonical"
            errors={this.state.errors.canonicalTitle}
          />
          <TextAreaInput
            title="Description"
            name={FormField.description}
            errors={this.state.errors.description}
          />
        </fieldset>
        <DateInput name={FormField.startDate} errors={this.state.errors.startDate} />
        <fieldset className="fieldset">
          <legend className="legend">Choose actual manga status:</legend>
          <RadioButtons
            options={statusOptions}
            name={FormField.status}
            errors={this.state.errors.status}
          />
        </fieldset>
        <Button type="submit" id="formSubmitButton">
          Add to the library
        </Button>
      </form>
    );
  }
}
