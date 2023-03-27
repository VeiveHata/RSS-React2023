import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Cards from './index';
import { pagesData } from 'consts/router';

describe('Cards page', () => {
  it('renders Cards page', () => {
    const { getByTestId } = render(<Cards />);
    const pageComponent = getByTestId(pagesData.library.testId);
    expect(pageComponent).toBeInTheDocument();
  });
});
