import React from 'react';
import { render } from '@testing-library/react';
import About from './index';
import { describe, it, expect } from 'vitest';
import { pagesData } from 'consts/router';

describe('About page', () => {
  it('renders About page', () => {
    const { getByTestId } = render(<About />);
    const pageComponent = getByTestId(pagesData.about.testId);
    expect(pageComponent).toBeInTheDocument();
  });
});
