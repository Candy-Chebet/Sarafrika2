import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Navbar, About } from './components';

import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <div className="gradient__bg">
                <Header />
              </div>
              <WhatGPT3 />
              <Features />
              <Possibility />
              <CTA />
              <Blog />
            </>
          )}
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
