import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Header } from '.';
import { RouterData } from 'types/route';
import { MemoryRouter } from 'react-router';
import { routes } from 'consts/router';

const mockRoutes: RouterData = {
  home: {
    name: 'home',
    path: '/',
    title: 'Home',
  },
  about: {
    name: 'about',
    path: '/about',
    title: 'about',
  },
  forms: {
    name: 'forms',
    path: '/forms',
    title: 'about',
  },
  unknown: {
    name: 'unknown',
    path: '*',
    title: '404',
  },
};

describe('Header', () => {
  it('should display page title', () => {
    const { queryByTestId } = render(
      <MemoryRouter>
        <Header name={mockRoutes.home.name} routes={mockRoutes} />
      </MemoryRouter>
    );
    const headerWithText = queryByTestId('headerTitle');
    expect(headerWithText).toHaveTextContent(routes.home.title);
  });
});
