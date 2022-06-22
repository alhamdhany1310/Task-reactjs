import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Styling from './Styling/index';
import Hook from './Hook/Index';
import Portalnews from './Hook/Page/Berita';
import Form from './Validation/index';
import Redux from './Redux/Index';
const Routs = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Styling />} />
        <Route path="/hook" element={<Hook />} />
        <Route path="/portalnews" element={<Portalnews />} />
        <Route path="/form" element={<Form />} />
        <Route path="/redux" element={<Redux />} />
      </Routes>
    </div>
  );
};

export default Routs;
