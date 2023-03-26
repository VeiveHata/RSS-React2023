import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { routes } from 'consts/router';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { describe } from 'vitest';

describe('main page', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});

describe('App', () => {
  const routeCheck = (route: string, testId: string) => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );
    expect(getByTestId(testId)).toBeInTheDocument();
  };
  it('render Cards Page', () => {
    routeCheck(routes.home.path, 'cardsPage');
  });
  it('render About Page', () => {
    routeCheck(routes.about.path, 'aboutPage');
  });
  it('render 404 Page', () => {
    routeCheck('/not-exist-page', 'notFoundPage');
  });
  it('render Forms Page', () => {
    routeCheck(routes.forms.path, 'formsPage');
  });
});
