import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from 'pages/About';
import Cards from 'pages/Cards';
import NotFound from 'pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default App;
