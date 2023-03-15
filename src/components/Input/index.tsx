import Button from 'components/Button';
import React, { ChangeEvent } from 'react';
import { getValueFromLS, setValueToLS } from 'utils/localStorage';
import './styles.css';

type InputProps = {
  defaultValue?: string;
  onSearch: (value: string) => void;
  name?: string;
  withSave?: boolean;
};

type InputStateProps = {
  value: string;
};

class Input extends React.Component<InputProps, InputStateProps> {
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
          name={this.props.name}
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
