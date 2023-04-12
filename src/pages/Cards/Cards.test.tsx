import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Cards from './index';
import { pagesData } from 'consts/router';
import { apiTestMangaItem, mangaList } from 'mock/mangaMock';
import { renderWithProviders } from '../../../tests/utils';

describe('Cards page', () => {
  it('renders Cards page', () => {
    const { getByTestId } = renderWithProviders(<Cards />);
    const pageComponent = getByTestId(pagesData.library.testId);
    expect(pageComponent).toBeInTheDocument();
  });
  it('fetches and display loading and cards on the page', async () => {
    const { getByTestId } = renderWithProviders(<Cards />);
    const loadingComponent = getByTestId('loading');
    expect(loadingComponent).toBeInTheDocument();

    await waitFor(() => {
      const firstCard = getByTestId(`card-${mangaList[0].id}`);
      expect(firstCard).toBeInTheDocument();
    });
  });
});

describe('Card selection', () => {
  it('fetch manga item info and open the modal', async () => {
    const { getByTestId } = renderWithProviders(<Cards />);

    let testCard;
    await waitFor(() => {
      testCard = getByTestId(`card-${apiTestMangaItem.id}`);
      expect(testCard).toBeInTheDocument();
      fireEvent.click(testCard);
    });

    const modal = getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });
});
