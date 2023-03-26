export const setValueToLS = (key: string, value: string | object | []) => {
  return localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
};

export const getValueFromLS = (key: string) => {
  const value = localStorage.getItem(key);
  if (!value) return '';
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};
