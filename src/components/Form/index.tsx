import { languageOptions, statusOptions } from 'consts/form';
import React, { useRef, BaseSyntheticEvent } from 'react';
import { Checkbox } from './Checkbox';
import { RadioButtons } from './RadioButtons';
import { SelectInput } from './Select';
import './styles.css';
import { TextAreaInput, TextInput } from './TextInput';
import { UploadInput } from './UploadInput';
import { Button } from 'components/Button';
import { FormField, FormValues, FormSubmitValues } from 'types/form';
import { DateInput } from './DateInput';
import { getBase64 } from 'utils/form';
import { useForm, FieldValues } from 'react-hook-form';

type FormProps = {
  onSubmit: (formValues: FormSubmitValues, callback?: () => void) => void;
};

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const submit = async (
    formData: FieldValues,
    e?: BaseSyntheticEvent<object, unknown, HTMLFormElement>
  ) => {
    const poster = await getBase64(formData.poster[0]);
    onSubmit(
      {
        posterImage: {
          medium: poster as string,
          meta: {
            dimensions: {},
          },
        },
        titles: {
          [formData.titleLang]: formData.title,
        },
        canonicalTitle: formData.canonicalTitle ? formData.title : '',
        startDate: formData.startDate,
        status: formData.status,
        description: formData.description,
      },
      () => e?.target.reset()
    );
  };

  return (
    <form className="form" data-testid="mangaForm" onSubmit={handleSubmit(submit)} ref={formRef}>
      <UploadInput
        name={FormField.poster}
        title="Add a poster"
        errors={errors[FormField.poster]}
        register={register}
      />
      <fieldset className="fieldset">
        <SelectInput
          title="Choose language of title"
          name={FormField.titleLang}
          options={languageOptions}
          errors={errors[FormField.titleLang]}
          register={register}
        />
        <TextInput
          title="Title"
          register={register}
          name={FormField.title}
          errors={errors[FormField.title]}
        />
        <Checkbox
          name={FormField.canonicalTitle}
          title="Set title as canonical"
          errors={errors[FormField.canonicalTitle]}
          register={register}
        />
        <TextAreaInput
          title="Description"
          name={FormField.description}
          errors={errors[FormField.description]}
          register={register}
        />
      </fieldset>
      <DateInput
        name={FormField.startDate}
        errors={errors[FormField.startDate]}
        register={register}
      />
      <fieldset className="fieldset">
        <legend className="legend">Choose actual manga status:</legend>
        <RadioButtons
          options={statusOptions}
          name={FormField.status}
          errors={errors[FormField.status]}
          register={register}
        />
      </fieldset>
      <Button type="submit" id="formSubmitButton">
        Add to the library
      </Button>
    </form>
  );
};
