import React from "react";
import { Link, NavLink } from "react-router-dom";

function MenuComp() {
  return (
    <div className="container d-flex justify-content-center">
      <h1>
        <Link to="/" className="nav-link">
          LOGO
        </Link>
      </h1>
      <ul className="d-flex">
        <li>
          <NavLink>HOME</NavLink>
        </li>
        <li>ABOUT</li>
        <li>BOARD</li>
        <li>MEMBER</li>
        <li>LOG-IN</li>
      </ul>
    </div>
  );
}

export default MenuComp;
