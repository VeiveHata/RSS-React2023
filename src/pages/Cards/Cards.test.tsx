import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Cards from './index';

describe('Cards page', () => {
  it('renders Cards page', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Cards />
      </MemoryRouter>
    );
    const pageComponent = getByTestId('cardsPage');
    expect(pageComponent).toBeInTheDocument();
    expect(pageComponent).toHaveClass('cards');
  });
});
