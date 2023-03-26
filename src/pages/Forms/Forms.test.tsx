import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Forms from './index';

describe('Forms page', () => {
  it('renders Forms page', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Forms />
      </MemoryRouter>
    );
    const pageComponent = getByTestId('formsPage');
    const form = getByTestId('mangaForm');
    const cardsListComponent = getByTestId('formsCardsList');

    expect(pageComponent).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(cardsListComponent).toBeInTheDocument();
  });
});
