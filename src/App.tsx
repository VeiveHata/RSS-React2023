import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from 'pages/NotFound';
import { routesPath } from 'consts/router';
import Forms from 'pages/Forms';
import About from 'pages/About';
import Cards from 'pages/Cards';
import { Root } from 'components/Root';

const App: React.FC = () => {
  return (
    <Suspense fallback={'...Loading'}>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Cards />} />
          <Route path={routesPath.library} element={<Cards />} />
          <Route path={routesPath.about} element={<About />} />
          <Route path={routesPath.forms} element={<Forms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
