import React from "react";
import HomeComp from "./pages/HomeComp";
import AboutComp from "./pages/AboutComp";
import BoardComp from "./pages/BoardComp";
import MemberComp from "./pages/MemberComp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuComp from "./component/MenuComp";

function App() {
  return (
    <BrowserRouter>
      <MenuComp />
      <Routes>
        <Route path="/" element={<HomeComp />}></Route>
        <Route path="/about/*" element={<AboutComp />}></Route>
        <Route path="/board/*" element={<BoardComp />}></Route>
        <Route path="/member/" element={<MemberComp />}></Route>
      </Routes>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
        repudiandae.
      </div>
    </BrowserRouter>
  );
}

export default App;
