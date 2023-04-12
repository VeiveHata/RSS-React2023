import React from 'react';
import { describe, it, expect } from 'vitest';
import Forms from './index';
import { pagesData } from 'consts/router';
import { renderWithProviders } from '../../../tests/utils';

describe('Forms page', () => {
  it('renders Forms page', () => {
    const { getByTestId } = renderWithProviders(<Forms />);
    const pageComponent = getByTestId(pagesData.forms.testId);
    const form = getByTestId('mangaForm');
    const cardsListComponent = getByTestId('formsCardsList');

    expect(pageComponent).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(cardsListComponent).toBeInTheDocument();
  });
});
