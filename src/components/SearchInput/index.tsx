import { Button } from 'components/Button';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { getValueFromLS, setValueToLS } from 'utils/localStorage';
import './styles.css';

type SearchInputProps = {
  defaultValue?: string;
  onSearch: (value: string) => void;
  name?: string;
  withSave?: boolean;
};

export const SearchInput: React.FC<SearchInputProps> = ({
  defaultValue,
  onSearch,
  name,
  withSave,
}) => {
  const [value, setValue] = useState<string>(defaultValue || '');

  useEffect(() => {
    if (withSave) {
      const savedValue = getValueFromLS(name || 'input');
      setValue(savedValue);
    }

    return () => {
      if (withSave) {
        setValueToLS(name || 'input', value);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onSearchClick = () => {
    onSearch(value);
  };

  return (
    <div className="input-wrapper">
      <input
        type="search"
        name={name}
        value={value}
        onChange={onSearchInputChange}
        className="input"
        data-testid="searchInput"
      />
      <Button id="serachButton" onClick={onSearchClick}>
        Search
      </Button>
    </div>
  );
};
