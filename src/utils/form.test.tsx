import { describe } from 'vitest';
import {
  checkMinLengthValues,
  checkRequiredDate,
  currentStatusDate,
  finishedStatusDate,
  getBase64,
  requiredFieldValidation,
  requiredMediaValidation,
  tbaStatusDate,
} from './form';
import { emptyForm, validFormValues } from '../mock/formMock';

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
    expect(result).toBeTruthy;
  });

  it('returns the base64-encoded string when a file is provided', async () => {
    const expected = await readFileAsBase64(file);
    const result = await getBase64(file);
    expect(result).toBe(expected);
  });
});

describe('requiredFieldValidation', () => {
  it('invalid for empty field', () => {
    const isValid = requiredFieldValidation('');
    expect(isValid).toBeFalsy;
  });

  it('valid for setted field', () => {
    const isValid = requiredFieldValidation('input value');
    expect(isValid).toBeTruthy;
  });
});

describe('requiredMediaValidation', () => {
  it('invalid for empty field', () => {
    const isValid = requiredMediaValidation(undefined);
    expect(isValid).toBeFalsy;
  });

  it('valid for setted field', () => {
    const blob = file;
    const isValid = requiredMediaValidation(blob);
    expect(isValid).toBeTruthy;
  });
});

describe('checkMinLengthValues', () => {
  it('return error message for value less then 50 symbols', () => {
    const isValid = checkMinLengthValues(50)(emptyForm.description);
    expect(isValid).toBeFalsy;
  });

  it('return empty string for value more or equal then 50 symbols', () => {
    const isValid = checkMinLengthValues(50)(validFormValues.description);
    expect(isValid).toBeTruthy;
  });
});

describe('checkRequiredDate', () => {
  it('return error message for not tba status and without selected date', () => {
    const isValid = checkRequiredDate('', { ...emptyForm, status: 'current', startDate: '' });
    expect(isValid).toBeFalsy;
  });
  it('return empty string for tba status without date', () => {
    const isValid = checkRequiredDate('', { ...emptyForm, status: 'tba', startDate: '' });
    expect(isValid).toBeTruthy;
  });
  it('return empty string for current status with date', () => {
    const isValid = checkRequiredDate('', {
      ...emptyForm,
      status: 'current',
      startDate: new Date().toString(),
    });
    expect(isValid).toBeTruthy;
  });
});

describe('tbaStatusDate', () => {
  it('return error message for tba status with selected date', () => {
    const isValid = tbaStatusDate('', {
      ...emptyForm,
      startDate: todayDate,
      status: 'tba',
    });
    expect(isValid).toBeFalsy;
  });
  it('return empty message tba status without selected date', () => {
    const isValid = tbaStatusDate('', {
      ...emptyForm,
      startDate: '',
      status: 'tba',
    });
    expect(isValid).toBeTruthy;
  });
});

describe('currentStatusDate', () => {
  it('return error message for current status and date selected later then or today', () => {
    const isValid = currentStatusDate('', {
      ...emptyForm,
      startDate: todayDate,
      status: 'current',
    });
    expect(isValid).toBeFalsy;
  });
});

describe('finishedStatusDate', () => {
  it('return error message for finished status, selected date and selected date is less than 30 days ago', () => {
    const isValid = finishedStatusDate('', {
      ...emptyForm,
      startDate: todayDate,
      status: 'finished',
    });
    expect(isValid).toBeFalsy;
  });
});
