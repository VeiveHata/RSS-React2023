import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Header } from '.';

describe('Header', () => {
  it('should display name', () => {
    const { getByText } = render(<Header name="header" />);
    const headerWithText = getByText('header');
    expect(headerWithText).toBeInTheDocument();
  });
});
