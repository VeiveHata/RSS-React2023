import { FormField } from 'types/form';
import { describe } from 'vitest';
import {
  checkMinLengthValues,
  checkRequiredDate,
  checkStatusWithSelectedDate,
  getBase64,
  getEmptyValueError,
  getRequiredMedia,
  validateForm,
} from './form';
import { errorMessages } from 'consts/form';
import { emptyForm, validFormValues } from 'mock/formMock';

const todayDate = new Date().toString();
const file = new File(['hello, world'], 'test.txt', { type: 'text/plain' });

async function readFileAsBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

describe('getBase64', () => {
  it('returns an empty string when no file is provided', async () => {
    const result = await getBase64(undefined);
    expect(result).toBe('');
  });

  it('returns the base64-encoded string when a file is provided', async () => {
    const expected = await readFileAsBase64(file);
    const result = await getBase64(file);
    expect(result).toBe(expected);
  });
});

describe('getEmptyValueError', () => {
  it('return error message for empty value', () => {
    const errorMessage = getEmptyValueError('');
    expect(errorMessage).toHaveLength;
  });

  it('return empty string for existing value', () => {
    const errorMessage = getEmptyValueError('input value');
    expect(errorMessage).not.toHaveLength;
  });
});

describe('getRequiredMedia', () => {
  it('return error message for empty file', () => {
    const errorMessage = getRequiredMedia(undefined);
    expect(errorMessage).toHaveLength;
  });

  it('return empty string for existing file', () => {
    const blob = file;
    const errorMessage = getRequiredMedia(blob);
    expect(errorMessage).not.toHaveLength;
  });
});

describe('checkMinLengthValues', () => {
  const error = 'description error';
  it('return error message for value less then 50 symbols', () => {
    const errorMessage = checkMinLengthValues(FormField.description, 50, error)(emptyForm);
    expect(errorMessage).toBe(error);
  });

  it('return empty string for value more or equal then 50 symbols', () => {
    const errorMessage = checkMinLengthValues(
      FormField.description,
      50,
      error
    )({
      ...emptyForm,
      description: validFormValues.description,
    });
    expect(errorMessage).toBe('');
  });
});

describe('checkRequiredDate', () => {
  it('return error message for not tba status and without selected date', () => {
    const errorMessage = checkRequiredDate({ ...emptyForm, status: 'current', startDate: '' });
    expect(errorMessage).toBe(errorMessages.requiredDate);
  });
  it('return empty string for tba status without date', () => {
    const errorMessage = checkRequiredDate({ ...emptyForm, status: 'tba', startDate: '' });
    expect(errorMessage).toBe('');
  });
  it('return empty string for current status with date', () => {
    const errorMessage = checkRequiredDate({
      ...emptyForm,
      status: 'current',
      startDate: new Date().toString(),
    });
    expect(errorMessage).toBe('');
  });
});

describe('checkStatusWithSelectedDate', () => {
  it('return error message for tba status with selected date', () => {
    const errorMessage = checkStatusWithSelectedDate({
      ...emptyForm,
      startDate: todayDate,
      status: 'tba',
    });
    expect(errorMessage).toBe(errorMessages.tbaWithDate);
  });
  it('return error message for current status and date selected later then or today', () => {
    const errorMessage = checkStatusWithSelectedDate({
      ...emptyForm,
      startDate: todayDate,
      status: 'current',
    });
    expect(errorMessage).toBe(errorMessages.currentWithTodayDate);
  });
  it('return error message for finished status, selected date and selected date is less than 30 days ago', () => {
    const errorMessage = checkStatusWithSelectedDate({
      ...emptyForm,
      startDate: todayDate,
      status: 'finished',
    });
    expect(errorMessage).toBe(errorMessages.finishedWithEarlyDate);
  });
  it('return empty message tba status without selected date', () => {
    const errorMessage = checkStatusWithSelectedDate({
      ...emptyForm,
      startDate: '',
      status: 'tba',
    });
    expect(errorMessage).toBe('');
  });
});

describe('validateForm', () => {
  it('return no errors for correct form values', () => {
    const formValues = validFormValues;
    const formErrors = {
      [FormField.canonicalTitle]: null,
      [FormField.description]: null,
      [FormField.poster]: null,
      [FormField.startDate]: null,
      [FormField.status]: null,
      [FormField.title]: null,
      [FormField.titleLang]: null,
    };
    const { errors, hasErrors } = validateForm(formValues);
    expect(errors).toStrictEqual(formErrors);
    expect(hasErrors).toBe(false);
  });
  it('return errors for invalid form', () => {
    const formValues = emptyForm;
    const formErrors = {
      [FormField.canonicalTitle]: null,
      [FormField.description]: [errorMessages.requiredField, errorMessages.minDescriptionLength],
      [FormField.poster]: [errorMessages.requiredFile],
      [FormField.startDate]: [errorMessages.requiredDate],
      [FormField.status]: [errorMessages.requiredField],
      [FormField.title]: [errorMessages.requiredField, errorMessages.minTtitleLength],
      [FormField.titleLang]: null,
    };
    const { errors, hasErrors } = validateForm(formValues);
    expect(errors).toStrictEqual(formErrors);
    expect(hasErrors).toBe(true);
  });
});
