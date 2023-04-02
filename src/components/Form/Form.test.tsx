import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { emptyForm, validFormValues } from 'mock/formMock';
import { FormField, FormValues } from 'types/form';
import { Form } from '.';

describe('Forms page', () => {
  const onSubmit = vi.fn();
  let titlesInput: HTMLElement,
    form: HTMLElement,
    canonicalTitleInput: HTMLElement,
    descriptionInput: HTMLElement,
    posterInput: HTMLElement,
    tbaStatusInput: HTMLElement,
    submitButton: HTMLElement;

  const setup = () => {
    const { getByTestId } = render(<Form onSubmit={onSubmit} />);
    form = getByTestId('mangaForm');
    titlesInput = getByTestId(FormField.title);
    canonicalTitleInput = getByTestId(FormField.canonicalTitle);
    posterInput = getByTestId(FormField.poster);
    descriptionInput = getByTestId(FormField.description);
    tbaStatusInput = getByTestId(`${FormField.status}-tba`);
    submitButton = getByTestId('formSubmitButton');
  };

  const setFormValues = (values: FormValues) => {
    fireEvent.change(titlesInput, { target: { value: values.title } });
    fireEvent.change(canonicalTitleInput, {
      target: { value: values.canonicalTitle },
    });
    fireEvent.change(posterInput, { target: { files: [values.poster] } });
    fireEvent.change(descriptionInput, {
      target: { value: values.description },
    });
    fireEvent.click(tbaStatusInput);
  };

  it('should set form values', () => {
    setup();
    setFormValues(validFormValues);
    expect(form).toHaveFormValues({
      canonicalTitle: validFormValues.canonicalTitle,
      description: validFormValues.description,
      poster: '',
      startDate: '',
      status: validFormValues.status,
      title: validFormValues.title,
      titleLang: validFormValues.titleLang,
    });
  });

  it('should not call onSubmit callback if form is invalid', () => {
    setup();
    setFormValues(emptyForm);
    fireEvent.click(submitButton);
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
