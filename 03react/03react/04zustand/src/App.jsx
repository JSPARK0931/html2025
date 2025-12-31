import React from 'react';
import HomeComp from './page/HomeComp';
import { Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import AboutComp from './page/AboutComp';
import AuthLayout from './layouts/AuthLayout';
import Login from './page/Member/Login';
import Reg from './page/Member/Reg';

function App() {
  return (
    <>
      <Routes>
        {/* 기본레이아웃 */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomeComp />}></Route>
          <Route path="/about" element={<AboutComp />}></Route>
        </Route>

        {/* 로그인레이아웃 */}
        <Route path="/login" element={<AuthLayout />}>
          <Route index element={<Login />}></Route>
          <Route path="reg" element={<Reg />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
