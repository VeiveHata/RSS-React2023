import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './index';
import { describe, it, expect, vi } from 'vitest';

describe('something truthy and falsy', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<Button>Click me!</Button>);
    expect(getByRole('button')).toBeInTheDocument();
  });
  it('calls onClick function when clicked', () => {
    const onClick = vi.fn();
    const { getByRole } = render(<Button onClick={onClick}>Click me!</Button>);
    fireEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
});
