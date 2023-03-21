import React from 'react';
import './styles.css';

type CheckboxProps = {
  title: string;
  name: string;
};

export class Checkbox extends React.Component<CheckboxProps> {
  render() {
    const { title, name } = this.props;
    return (
      <span>
        <input type="checkbox" id={name} name={name} />
        <label htmlFor={name}>{title}</label>
      </span>
    );
  }
}
