import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchInput } from './index';
import { describe, it, expect } from 'vitest';

describe('SearchInput render', () => {
  it('renders correctly', async () => {
    render(<SearchInput onSearch={() => {}} />);
    const button = await screen.findByTestId('serachButton');
    const input = await screen.findByTestId('searchInput');
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});
