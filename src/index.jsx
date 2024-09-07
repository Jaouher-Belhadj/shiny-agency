import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Survey from './pages/Survey';
import Header from './components/Header';
import Error from './components/Error';
import Results from './pages/Results';
import Freelancers from './pages/Freelancers';
import { ThemeProvider, SurveyProvider } from './utils/context';
import GlobalStyle from './utils/style/GlobalStyle';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path='/results' element={<Results />} />
            <Route path='/freelancers' element={<Freelancers />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
