import { authApi } from "@/axios/Auth";
import { useAuthStore } from "@/store/auth.store";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function RootLayout() {
  const navigate = useNavigate();
  const { loginStatus, email, clearAuth } = useAuthStore();
  const handleLogout = async () => {
    try {
      await authApi.post("/api/auth/logout");
    } catch (error) {
      console.error("로그아웃 요청실패 : ", error);
    } finally {
      clearAuth();
      navigate("/");
    }
  };
  return (
    <>
      <header>
        <nav className="flex justify-between p-4">
          <h1>logo</h1>
          <ul className="flex gap-4">
            <li>
              <Link to="/">home</Link>
            </li>
            {/* <li>
              <Link to="/login">login</Link>
            </li> */}
            {loginStatus ? (
              <>
                <li>{email}</li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">login</Link>
              </li>
            )}
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
