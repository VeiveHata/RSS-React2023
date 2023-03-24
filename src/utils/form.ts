import { emptyFormErrors } from 'consts/form';
import { FormElements, FormField, FormObject } from 'types/form';

export const getBase64 = async (file: File | undefined) => {
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

export const getRadioButtonsValue = (formRadioValues: HTMLInputElement[]) => {
  return Array.from(formRadioValues).find((input) => input.checked)?.id;
};

export const getFormValuesAsObject = (formElements: FormElements): FormObject => {
  const checkSelectedRadio = (fieldName: FormField) => formElements[fieldName]?.value === 'on';
  const checkSelectedFlag = (fieldName: FormField) => formElements[fieldName]?.checked;
  const getFormValue = (fieldName: FormField) => formElements[fieldName]?.value || '';

  return {
    [FormField.canonicalTitle]: checkSelectedFlag(FormField.canonicalTitle),
    [FormField.description]: getFormValue(FormField.description),
    [FormField.poster]: formElements[FormField.poster]?.files?.[0],
    [FormField.startDate]: getFormValue(FormField.startDate),
    [FormField.status]: checkSelectedRadio(FormField.status)
      ? getRadioButtonsValue(formElements[FormField.status] as unknown as HTMLInputElement[]) || ''
      : '',
    [FormField.title]: getFormValue(FormField.title),
    [FormField.titleLang]: getFormValue(FormField.titleLang),
  };
};

const getEmptyValueError = (inputValue: string | boolean) =>
  !inputValue ? 'This field is requiered' : '';

const getRequiredMedia = (inputValue: File | undefined) =>
  !inputValue ? 'Please upload a file' : '';

const checkRequiredInput = (key: FormField) => {
  return (formValues: FormObject) => {
    const value = formValues[key];
    const isStringOrBoolean = typeof value === 'string' || typeof value === 'boolean';
    return isStringOrBoolean ? getEmptyValueError(value) : getRequiredMedia(value);
  };
};

const MIN_DESCRIPTION_LENGTH = 50;
const checkDescriptionMinSymbols = (formValues: FormObject) => {
  const value = formValues[FormField.description];
  return value.trim().length < MIN_DESCRIPTION_LENGTH
    ? `The prescription is too short. Should be more than ${MIN_DESCRIPTION_LENGTH} symbols`
    : '';
};

const MIN_TITLE_LENGTH = 5;
const checkTitleMinSymbols = (formValues: FormObject) => {
  const value = formValues[FormField.title];
  return value.trim().length < MIN_TITLE_LENGTH
    ? `The title is too short. Should be more than ${MIN_TITLE_LENGTH} symbols`
    : '';
};

const MOST_RECENT_MANGA_DAYS = 30;
const checkStatusWithSelectedDate = (formValues: FormObject) => {
  const selectedDate = formValues[FormField.startDate];
  const selectedStatus = formValues[FormField.status];

  if (selectedStatus === 'tba' && !!selectedDate) {
    return 'With selected date the status cannot be set';
  }

  if (selectedStatus === 'current' && new Date(selectedDate).getTime() > new Date().getTime()) {
    return 'The date cannot be less then today for Ongoing manga';
  }

  const mostRecentDate = new Date();
  mostRecentDate.setDate(mostRecentDate.getDate() - MOST_RECENT_MANGA_DAYS);
  const isSelectedDateOlder = new Date(selectedDate).getTime() < mostRecentDate.getTime();
  if (selectedStatus === 'finished' && !!selectedDate && !isSelectedDateOlder) {
    return 'Manga cannot be finished less than for 30 days. Please check the date and status';
  }

  return '';
};

const checkDateRequired = (formValues: FormObject) => {
  const selectedDate = formValues[FormField.startDate];
  const selectedStatus = formValues[FormField.status];

  if (selectedStatus !== 'tba' && !selectedDate) {
    return 'Date should be specified';
  }
  return '';
};

const formValidationSchema: Record<FormField, ((formValues: FormObject) => string)[]> = {
  [FormField.canonicalTitle]: [],
  [FormField.description]: [checkRequiredInput(FormField.description), checkDescriptionMinSymbols],
  [FormField.poster]: [checkRequiredInput(FormField.poster)],
  [FormField.startDate]: [checkDateRequired, checkStatusWithSelectedDate],
  [FormField.status]: [checkRequiredInput(FormField.status), checkStatusWithSelectedDate],
  [FormField.title]: [checkRequiredInput(FormField.title), checkTitleMinSymbols],
  [FormField.titleLang]: [checkRequiredInput(FormField.titleLang)],
};

export const validateForm = (formValues: FormObject) => {
  const errors = { ...emptyFormErrors };
  let withErrors = false;

  (Object.keys(formValues) as FormField[]).forEach((key) => {
    const fieldErrors = formValidationSchema[key]
      .map((validationAction) => validationAction(formValues))
      .filter(Boolean);
    const fieldHasError = !!fieldErrors.length;
    errors[key] = fieldHasError ? fieldErrors : null;
    withErrors = withErrors || fieldHasError;
  });

  return { errors, hasErrors: withErrors };
};
