import React from 'react';
import { Link, Links } from 'react-router-dom';

function MenuComp() {
  return (
    <>
      <nav style={{ display: 'flex' }}>
        <h1>com</h1>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>board</li>
        </ul>
        <ul>
          <li>
            <Link to="/login">로그인</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MenuComp;
