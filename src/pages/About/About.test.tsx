import React from 'react';
import { render } from '@testing-library/react';
import About from './index';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

describe('About page', () => {
  it('renders About page', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    const pageComponent = getByTestId('aboutPage');
    expect(pageComponent).toBeInTheDocument();
    expect(pageComponent).toHaveClass('about');
  });
});
