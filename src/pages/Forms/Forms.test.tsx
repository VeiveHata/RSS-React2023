import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Forms from './index';
import { pagesData } from 'consts/router';

describe('Forms page', () => {
  it('renders Forms page', () => {
    const { getByTestId } = render(<Forms />);
    const pageComponent = getByTestId(pagesData.forms.testId);
    const form = getByTestId('mangaForm');
    const cardsListComponent = getByTestId('formsCardsList');

    expect(pageComponent).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(cardsListComponent).toBeInTheDocument();
  });
});
