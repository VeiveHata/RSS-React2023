import { Button } from 'components/Button';
import React, { ChangeEvent, useState } from 'react';
import './styles.css';

type SearchInputProps = {
  defaultValue?: string;
  onSearch: (value: string) => void;
  name?: string;
};

export const SearchInput: React.FC<SearchInputProps> = ({ defaultValue, onSearch, name }) => {
  const [value, setValue] = useState<string>(defaultValue || '');

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
