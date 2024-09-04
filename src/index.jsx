import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Survey from './pages/Survey';
import Header from './components/Header';
import Error from './components/Error';
import Results from './pages/Results';
import Freelancers from './pages/Freelancers';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   div {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
   }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path='/results' element={<Results />} />
        <Route path='/freelancers' element={<Freelancers />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
