import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Footer, Blog, Possibility, WhatGPT3, Header } from './containers';
import { CTA, Navbar, Commitment, Team, Elimika, BFF, Eneza, Nimeahidi, Shop, Events, Terms } from './components';

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
              {/* <Features /> */}
              <Possibility />
              <CTA />
              <Blog />
            </>
          )}
        />
        <Route path="/commitment" element={<Commitment />} />
        <Route path="/team" element={<Team />} />
        <Route path="/elimika" element={<Elimika />} />
        <Route path="/bff" element={<BFF />} />
        <Route path="/eneza" element={<Eneza />} />
        <Route path="/nimeahidi" element={<Nimeahidi />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/events" element={<Events />} />
        <Route path="/terms" element={<Terms />} />

      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
