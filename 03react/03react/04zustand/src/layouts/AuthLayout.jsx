import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div>
      <Link to="/">홈으로</Link>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
