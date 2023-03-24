import React from 'react';
import { DialogMessageType } from 'types/messages';
import './styles.css';

type DialogMessageProps = {
  message?: string;
  messageType?: DialogMessageType;
  isVisisble?: boolean;
  onClose?: () => void;
};

export class DialogMessage extends React.Component<DialogMessageProps> {
  render() {
    const { message, messageType = 'info', isVisisble = false, onClose = () => {} } = this.props;
    return (
      <div
        className={`dialog-message ${messageType}-message ${isVisisble ? 'visible-message' : ''}`}
      >
        {message}
        <button className="close-message" onClick={onClose}>
          X
        </button>
      </div>
    );
  }
}
