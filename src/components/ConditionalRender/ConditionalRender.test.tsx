import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConditionalRender } from './index';
import { describe, it, expect } from 'vitest';

describe('ConditionalRender', () => {
  it('renders content with true condition', () => {
    render(
      <ConditionalRender condition={true}>
        <article />
      </ConditionalRender>
    );
    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
  });

  it('not renders content with false condition', () => {
    render(
      <ConditionalRender condition={false}>
        <article />
      </ConditionalRender>
    );
    const article = screen.queryByRole('article');
    expect(article).not.toBeInTheDocument();
  });
});
