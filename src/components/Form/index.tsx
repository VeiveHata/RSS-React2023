import { emptyFormErrors, languageOptions, statusOptions } from 'consts/form';
import React, { useRef, useState } from 'react';
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

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [errors, setErrors] = useState<FormErrors>({ ...emptyFormErrors });

  const formRef = useRef<HTMLFormElement>(null);

  const clearForm = () => {
    formRef.current?.reset();
    setErrors({ ...emptyFormErrors });
  };

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = formRef.current;
    if (!formElement) return;

    const formElements = formElement.elements as unknown as FormElements;

    const formObject = getFormValuesAsObject(formElements);

    const poster = await getBase64(formObject.poster);

    const { hasErrors, errors } = validateForm(formObject);

    if (hasErrors) {
      setErrors(errors);
    } else {
      onSubmit(
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
        clearForm
      );
    }
  };

  return (
    <form className="form" data-testid="mangaForm" onSubmit={handleSubmit} ref={formRef}>
      <UploadInput name={FormField.poster} title="Add a poster" errors={errors.poster} />
      <fieldset className="fieldset">
        <SelectInput
          title="Choose language of title"
          name={FormField.titleLang}
          options={languageOptions}
          errors={errors.titleLang}
        />
        <TextInput title="Title" name={FormField.title} errors={errors.title} />
        <Checkbox
          name={FormField.canonicalTitle}
          title="Set title as canonical"
          errors={errors.canonicalTitle}
        />
        <TextAreaInput
          title="Description"
          name={FormField.description}
          errors={errors.description}
        />
      </fieldset>
      <DateInput name={FormField.startDate} errors={errors.startDate} />
      <fieldset className="fieldset">
        <legend className="legend">Choose actual manga status:</legend>
        <RadioButtons options={statusOptions} name={FormField.status} errors={errors.status} />
      </fieldset>
      <Button type="submit" id="formSubmitButton">
        Add to the library
      </Button>
    </form>
  );
};
