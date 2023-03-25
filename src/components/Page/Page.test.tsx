import React from 'react';
import { test, assert } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Page } from './index';
import { RouterData } from 'types/route';
import { Header } from 'components/Header';
import { MemoryRouter } from 'react-router-dom';

const router: RouterData = {
  home: { name: 'home', path: '/', title: 'Home' },
  about: { name: 'about', path: '/about', title: 'About' },
  forms: { name: 'forms', path: '/forms', title: 'Forms' },
  unknown: { name: 'unknown', path: '*', title: '404' },
};

describe('Page', () => {
  it('renders the page header and content', () => {
    render(
      <MemoryRouter>
        <Page name="home" router={router}>
          <h1>Page Content</h1>
        </Page>
      </MemoryRouter>
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByText('Page Content')).toBeInTheDocument();
  });

  it('applies the provided class name to the page', () => {
    render(
      <MemoryRouter>
        <Page name="home" className="my-page-class">
          <h1>Page Content</h1>
        </Page>
      </MemoryRouter>
    );
    expect(screen.getByTestId('pageContainer')).toHaveClass('my-page-class');
  });
});
