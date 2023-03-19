import { describe, it, expect } from 'vitest';
import { getValueFromLS, setValueToLS } from './localStorage';

const localStorageMock = (function () {
  let store: Record<string, string> = {};

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('setValueToLS', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('should set string value to LS', () => {
    const mockKey = 'key';
    const mockValue = 'string';
    setValueToLS(mockKey, mockValue);
    expect(localStorage.getItem(mockKey)).toEqual(mockValue);
  });

  it('should set object value to LS', () => {
    const mockKey = 'key';
    const mockValue = { data: 'data' };
    setValueToLS(mockKey, mockValue);
    expect(localStorage.getItem(mockKey)).toEqual(JSON.stringify(mockValue));
  });

  it('should create only one ID in localStorage', () => {
    const mockId = 'key';
    const mockOldData = { data: 'json data' };
    const mockNewData = { data: ' new data' };

    localStorage.setItem(mockId, JSON.stringify(mockOldData));
    setValueToLS(mockId, mockNewData);
    const allItems = localStorage.getAll();
    expect(Object.keys(allItems).length).toBe(1);
  });
});

describe('getValueFromLS', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should get string value from LS', () => {
    const mockKey = 'key';
    const mockValue = 'string';
    localStorage.setItem(mockKey, mockValue);
    expect(getValueFromLS(mockKey)).toEqual(mockValue);
  });

  it('should get object value from LS', () => {
    const mockKey = 'key';
    const mockValue = { data: 'data' };
    localStorage.setItem(mockKey, JSON.stringify(mockValue));
    expect(getValueFromLS(mockKey)).toEqual(mockValue);
  });

  it('should return empty string for not exist key', () => {
    const mockKey = '404';
    expect(getValueFromLS(mockKey)).toEqual('');
  });
});
