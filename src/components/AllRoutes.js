import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Customers from '../pages/Customers';

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard/>} />
      <Route path='/customers' element={<Customers/>} />
      <Route exact path="/*" element={<Dashboard/>} />
    </Routes>
  );
}

export default AllRoutes;
