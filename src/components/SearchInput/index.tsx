import { Button } from 'components/Button';
import React, { ChangeEvent } from 'react';
import { getValueFromLS, setValueToLS } from 'utils/localStorage';
import './styles.css';

type SearchInputProps = {
  defaultValue?: string;
  onSearch: (value: string) => void;
  name?: string;
  withSave?: boolean;
};

type SearchInputStateProps = {
  value: string;
};

export class SearchInput extends React.Component<SearchInputProps, SearchInputStateProps> {
  state = {
    value: this.props.defaultValue || '',
  };

  componentDidMount() {
    if (this.props.withSave) {
      const savedValue = getValueFromLS(this.props.name || 'input');
      this.setState({ value: savedValue });
    }
  }

  componentWillUnmount() {
    if (this.props.withSave) {
      setValueToLS(this.props.name || 'input', this.state.value);
    }
  }

  onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  onSearchClick = () => {
    this.props.onSearch(this.state.value);
  };

  render() {
    return (
      <div className="input-wrapper">
        <input
          type="search"
          name={this.props.name}
          value={this.state.value}
          onChange={this.onSearchInputChange}
          className="input"
          data-testid="searchInput"
        />
        <Button id="serachButton" onClick={this.onSearchClick}>
          Search
        </Button>
      </div>
    );
  }
}
