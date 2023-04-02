import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { pagesData } from 'consts/router';
import { describe } from 'vitest';

describe('main page', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toBeInTheDocument();
  });
});

describe('App', () => {
  const routeCheck = (route: string, testId: string) => {
    window.history.pushState({}, 'Test page', route);
    const { getByTestId } = render(<App />);

    expect(getByTestId(testId)).toBeInTheDocument();
  };

  it('render Cards Page', () => {
    routeCheck(pagesData.library.path, pagesData.library.testId);
  });
  it('render About Page', () => {
    routeCheck(pagesData.about.path, pagesData.about.testId);
  });
  it('render 404 Page', () => {
    routeCheck('/not-exist-page', pagesData.unknown.testId);
  });
  it('render Forms Page', () => {
    routeCheck(pagesData.forms.path, pagesData.forms.testId);
  });
});
