import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Cards from './index';
import { pagesData } from 'consts/router';
import { mangaList } from 'mock/cardsMock';

describe('Cards page', () => {
  it('renders Cards page', () => {
    const { getByTestId } = render(<Cards />);
    const pageComponent = getByTestId(pagesData.library.testId);
    expect(pageComponent).toBeInTheDocument();
  });
  it('fetches and display cards on the page', async () => {
    const { getByTestId } = render(<Cards />);
    const loadingComponent = getByTestId('loading');
    expect(loadingComponent).toBeInTheDocument();

    await waitFor(() => {
      const firstCard = getByTestId(`card-${mangaList[0].id}`);
      expect(firstCard).toBeInTheDocument();
    });
  });
});
