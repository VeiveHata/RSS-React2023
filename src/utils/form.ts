import {
  errorMessages,
  MIN_DESCRIPTION_LENGTH,
  MIN_TITLE_LENGTH,
  MOST_RECENT_MANGA_DAYS,
} from 'consts/form';
import { FormErrors, FormErrorsTypes, FormField, FormValues, InputValue } from 'types/form';

export const getBase64 = async (file: File | undefined) => {
  if (!file) return '';
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.onerror = (error) => reject(error);
  });
};

export const requiredFieldValidation = (inputValue: string | boolean) => !!inputValue;

export const requiredMediaValidation = (inputValue: File | undefined) => !!inputValue?.length;

export const checkRequiredInput = (value: InputValue) => {
  const isStringOrBoolean = typeof value === 'string' || typeof value === 'boolean';
  return isStringOrBoolean ? requiredFieldValidation(value) : requiredMediaValidation(value);
};

export const checkMinLengthValues = (min: number) => {
  return (value: InputValue) => typeof value === 'string' && value.trim().length >= min;
};

export const currentStatusDate = (_: InputValue, formValues: FormValues) => {
  const selectedDate = formValues[FormField.startDate];
  const selectedStatus = formValues[FormField.status];
  const todayDate = new Date().toDateString();
  if (selectedStatus !== 'current') return true;

  return Boolean(
    selectedStatus === 'current' && new Date(selectedDate).getTime() < new Date(todayDate).getTime()
  );
};

export const tbaStatusDate = (_: InputValue, formValues: FormValues) => {
  const selectedDate = formValues[FormField.startDate];
  const selectedStatus = formValues[FormField.status];

  return selectedStatus !== 'tba' || !selectedDate;
};

export const finishedStatusDate = (_: InputValue, formValues: FormValues) => {
  const selectedDate = formValues[FormField.startDate];
  const selectedStatus = formValues[FormField.status];

  if (selectedStatus !== 'finished') return true;

  const mostRecentDate = new Date();
  mostRecentDate.setDate(mostRecentDate.getDate() - MOST_RECENT_MANGA_DAYS);
  const isSelectedDateOlder = new Date(selectedDate).getTime() < mostRecentDate.getTime();
  return Boolean(!!selectedDate && isSelectedDateOlder);
};

export const checkRequiredDate = (_: InputValue, formValues: FormValues) => {
  const selectedDate = formValues[FormField.startDate];
  const selectedStatus = formValues[FormField.status];

  return selectedStatus === 'tba' || !!selectedDate;
};

export const formValidationSchema: Record<FormField, FormErrors> = {
  [FormField.canonicalTitle]: {},
  [FormField.description]: {
    requiredField: checkRequiredInput,
    minDescriptionLength: checkMinLengthValues(MIN_DESCRIPTION_LENGTH),
  },
  [FormField.poster]: { requiredFile: checkRequiredInput },
  [FormField.startDate]: {},
  [FormField.startDate]: {
    requiredDate: checkRequiredDate,
    tbaWithDate: tbaStatusDate,
    currentWithTodayDate: currentStatusDate,
    finishedWithEarlyDate: finishedStatusDate,
  },
  [FormField.status]: {
    requiredField: checkRequiredInput,
    tbaWithDate: tbaStatusDate,
    currentWithTodayDate: currentStatusDate,
    finishedWithEarlyDate: finishedStatusDate,
  },
  [FormField.title]: {
    requiredField: checkRequiredInput,
    minTtitleLength: checkMinLengthValues(MIN_TITLE_LENGTH),
  },
  [FormField.titleLang]: { requiredField: checkRequiredInput },
};

export const getErrorMessage = (type: FormErrorsTypes) => {
  return errorMessages[type];
};
