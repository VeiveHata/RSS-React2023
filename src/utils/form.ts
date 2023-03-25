import {
  emptyFormErrors,
  errorMessages,
  MIN_DESCRIPTION_LENGTH,
  MIN_TITLE_LENGTH,
  MOST_RECENT_MANGA_DAYS,
} from 'consts/form';
import { FormElements, FormField, FormObject } from 'types/form';

export const getBase64 = async (file: File | undefined) => {
  if (!file) return '';
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.onerror = (error) => reject(error);
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

export const getEmptyValueError = (inputValue: string | boolean) =>
  !inputValue ? errorMessages.requiredField : '';

export const getRequiredMedia = (inputValue: File | undefined) =>
  !inputValue ? errorMessages.requiredFile : '';

export const checkRequiredInput = (key: FormField) => {
  return (formValues: FormObject) => {
    const value = formValues[key];
    const isStringOrBoolean = typeof value === 'string' || typeof value === 'boolean';
    return isStringOrBoolean ? getEmptyValueError(value) : getRequiredMedia(value);
  };
};

export const checkMinLengthValues = (key: FormField, min: number, error: string) => {
  return (formValues: FormObject) => {
    const value = formValues[key];
    if (typeof value === 'string') {
      return value.trim().length <= min ? error : '';
    }
    return '';
  };
};

export const checkStatusWithSelectedDate = (formValues: FormObject) => {
  const selectedDate = formValues[FormField.startDate];
  const selectedStatus = formValues[FormField.status];

  if (selectedStatus === 'tba' && !!selectedDate) {
    return errorMessages.tbaWithDate;
  }

  const todayDate = new Date().toDateString();
  if (
    selectedStatus === 'current' &&
    new Date(selectedDate).getTime() >= new Date(todayDate).getTime()
  ) {
    return errorMessages.currentWithTodayDate;
  }

  const mostRecentDate = new Date();
  mostRecentDate.setDate(mostRecentDate.getDate() - MOST_RECENT_MANGA_DAYS);
  const isSelectedDateOlder = new Date(selectedDate).getTime() < mostRecentDate.getTime();
  if (selectedStatus === 'finished' && !!selectedDate && !isSelectedDateOlder) {
    return errorMessages.finishedWithEarlyDate;
  }

  return '';
};

export const checkRequiredDate = (formValues: FormObject) => {
  const selectedDate = formValues[FormField.startDate];
  const selectedStatus = formValues[FormField.status];

  if (selectedStatus !== 'tba' && !selectedDate) {
    return errorMessages.requiredDate;
  }
  return '';
};

const formValidationSchema: Record<FormField, ((formValues: FormObject) => string)[]> = {
  [FormField.canonicalTitle]: [],
  [FormField.description]: [
    checkRequiredInput(FormField.description),
    checkMinLengthValues(
      FormField.description,
      MIN_DESCRIPTION_LENGTH,
      errorMessages.minDescriptionLength
    ),
  ],
  [FormField.poster]: [checkRequiredInput(FormField.poster)],
  [FormField.startDate]: [checkRequiredDate, checkStatusWithSelectedDate],
  [FormField.status]: [checkRequiredInput(FormField.status), checkStatusWithSelectedDate],
  [FormField.title]: [
    checkRequiredInput(FormField.title),
    checkMinLengthValues(FormField.description, MIN_TITLE_LENGTH, errorMessages.minTtitleLength),
  ],
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
