import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './index';
import { describe, it, expect, vi } from 'vitest';

describe('Button', () => {
  it('should call onClick function when it`s clicked', () => {
    const onClick = vi.fn();
    const { getByRole } = render(<Button onClick={onClick}>Click me!</Button>);
    fireEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
});
