import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <header>
        <nav className="flex justify-between p-4">
          <h1>logo</h1>
          <ul className="flex gap-4">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
