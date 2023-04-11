import React from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import './App.css';
import About from 'pages/About';
import Cards from 'pages/Cards';
import NotFound from 'pages/NotFound';
import Forms from 'pages/Forms';
import { ErrorPage } from 'components/Error';
import { Root } from 'pages/Root';
import { routesPath } from 'consts/router';

const router: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Cards />,
      },
      {
        path: routesPath.library,
        element: <Cards />,
      },
      {
        path: routesPath.about,
        element: <About />,
      },
      {
        path: routesPath.forms,
        element: <Forms />,
      },
    ],
  },
  {
    path: routesPath.unknown,
    element: <NotFound />,
  },
];

const App: React.FC = () => {
  return <RouterProvider router={createBrowserRouter(router)} />;
};

export default App;
