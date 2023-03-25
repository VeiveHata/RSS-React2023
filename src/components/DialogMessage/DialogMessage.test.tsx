import React from 'react';
import { render } from '@testing-library/react';
import { DialogMessage, DialogMessageProps } from './index';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('DialogMessage', () => {
  it('renders message and close button', async () => {
    const testMessage = 'This is a test message';

    const { getByTestId } = render(<DialogMessage message={testMessage} />);
    const messageEl = getByTestId('dialogElement');
    const closeButtonEl = getByTestId('dialogCloseButton');

    expect(messageEl).toHaveClass('dialog-message');
    expect(messageEl).toHaveClass('info-message');
    expect(messageEl).not.toHaveClass('visible-message');
    expect(messageEl).toBeInTheDocument();
    expect(messageEl).toHaveTextContent(testMessage);
    expect(closeButtonEl).toBeInTheDocument();
  });

  it('sets message type class', () => {
    const props: DialogMessageProps = {
      message: 'This is a test message',
      messageType: 'info',
    };
    const { getByTestId } = render(<DialogMessage {...props} />);
    const messageEl = getByTestId('dialogElement');
    expect(messageEl).toHaveClass('info-message');
  });

  it('sets visible class', () => {
    const props: DialogMessageProps = {
      message: 'This is a test message',
      isVisisble: true,
    };
    const { getByTestId } = render(<DialogMessage {...props} />);
    const messageEl = getByTestId('dialogElement');
    expect(messageEl).toHaveClass('visible-message');
  });

  it('calls onClose when close button is clicked', async () => {
    const onClose = vi.fn();
    const props: DialogMessageProps = {
      message: 'This is a test message',
      onClose,
    };
    const { getByTestId } = render(<DialogMessage {...props} />);
    const closeButtonEl = getByTestId('dialogCloseButton');
    await userEvent.click(closeButtonEl);
    expect(onClose).toHaveBeenCalled();
  });
});
