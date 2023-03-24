import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TitleH2 } from '.';

describe('Title', () => {
  it('should display children', () => {
    const titleText = 'title test';
    const { getByTestId } = render(<TitleH2>{titleText}</TitleH2>);
    const title = getByTestId('titleH2');
    expect(title).toHaveTextContent(titleText);
  });
});
