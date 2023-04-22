import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { setupStore } from 'store';

const initialState = {};
const store = setupStore(initialState);

export function render(url: string) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    </React.StrictMode>
  );
  return { html, preloadedState: store.getState() };
}
