import React, { PropsWithChildren } from 'react';
import './styles.css';

type InputWithLabelProps = PropsWithChildren<{
  title: string;
}>;

export class InputWithLabel extends React.Component<InputWithLabelProps> {
  render() {
    const { title, children } = this.props;
    return (
      <label className="formInput">
        <p className="label">{title}:</p>
        {children}
      </label>
    );
  }
}
