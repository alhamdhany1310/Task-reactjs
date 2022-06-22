import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Home/Homepage';
import Portofoliopage from './Portofolio/Portofolio';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/portofolio" element={<Portofoliopage />} />
      </Routes>
    </div>
  );
};

export default Routing;
