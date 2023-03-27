import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from 'pages/About';
import Cards from 'pages/Cards';
import NotFound from 'pages/NotFound';
import Forms from 'pages/Forms';
import { routes } from 'consts/router';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.home.path} element={<Cards />} />
      <Route path={routes.about.path} element={<About />} />
      <Route path={routes.forms.path} element={<Forms />} />
      <Route path={routes.unknown.path} element={<NotFound />} />
    </Routes>
  );
};

export default App;
