export const setValueToLS = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};

export const getValueFromLS = (key: string) => {
  return localStorage.getItem(key) || '';
};
