import Button from 'components/Button';
import React, { ChangeEvent } from 'react';
import './styles.css';

type InputProps = {
  defaultValue?: string;
  onSearch: (value: string) => void;
};

type InputStateProps = {
  value: string;
};

class Input extends React.Component<InputProps, InputStateProps> {
  state = {
    value: this.props.defaultValue || '',
  };

  onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
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
          name="search"
          value={this.state.value}
          onChange={this.onInputChange}
          className="input"
        />
        <Button onClick={this.onSearchClick}>Search</Button>
      </div>
    );
  }
}

export default Input;
