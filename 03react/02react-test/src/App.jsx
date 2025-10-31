import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuComp from "./components/layout/MenuComp";
import HomeComp from "./components/pages/home/HomeComp";
import AboutComp from "./components/pages/about/AboutComp";
import BoardComp from "./components/pages/board/BoardComp";
import ErrorComp from "./components/pages/home/ErrorComp";

function App() {
  return (
    <BrowserRouter>
      <MenuComp />
      <div>
        <Routes>
          <Route path="/" element={<HomeComp />}></Route>
          <Route path="/about/*" element={<AboutComp />}></Route>
          <Route path="/board/*" element={<BoardComp />}></Route>
          <Route path="/list" element={<BoardComp />}></Route>
          <Route path="/write" element={<BoardComp />}></Route>

          <Route path="*" element={<ErrorComp />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
