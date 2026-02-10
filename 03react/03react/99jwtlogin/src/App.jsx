import React from 'react';
import { cn } from './lib/utils';
import { Route, Routes } from 'react-router-dom';
import HomeComp from './pages/HomeComp';
import RootLayout from './layouts/RootLayout';
import AuthLayout from './layouts/AuthLayout';
import LoginComp from './pages/member/LoginComp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomeComp />}></Route>
      </Route>
      <Route path="/login" element={<AuthLayout />}>
        <Route index element={<LoginComp />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
