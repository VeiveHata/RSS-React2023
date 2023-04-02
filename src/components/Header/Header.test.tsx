import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Header } from '.';
import { PagesData } from 'types/route';
import { MemoryRouter } from 'react-router-dom';

const mockRoutes: PagesData = {
  library: {
    name: 'library',
    path: '/',
    title: 'Library',
    testId: 'homePage',
  },
  about: {
    name: 'about',
    path: '/about',
    title: 'about',
    testId: 'aboutPage',
  },
  forms: {
    name: 'forms',
    path: '/forms',
    title: 'about',
    testId: 'formsPage',
  },
  unknown: {
    name: 'unknown',
    path: '*',
    title: '404',
    testId: 'unknownPage',
  },
};

describe('Header', () => {
  it('should display page title', () => {
    const { queryByTestId } = render(
      <MemoryRouter>
        <Header
          name={mockRoutes.library.name}
          links={[mockRoutes.about, mockRoutes.forms, mockRoutes.library]}
        />
      </MemoryRouter>
    );
    const headerWithText = queryByTestId('headerTitle');
    expect(headerWithText).toHaveTextContent(mockRoutes.library.title);
  });
});
