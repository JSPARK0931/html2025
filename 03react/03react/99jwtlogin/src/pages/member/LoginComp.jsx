import React, { useState } from "react";
import { User, Lock } from "lucide-react";
import { authApi } from "@/axios/Auth";
import { useAuthStore } from "@/store/auth.store";
import { useNavigate, Link } from "react-router-dom";

function LoginComp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const setStoreUsername = useAuthStore((state) => state.setUsername);
  const navigate = useNavigate();

  /**
   * 로그인 폼 제출 핸들러
   * POST 방식으로 /api/member/login 엔드포인트에 username과 password를 전송합니다.
   * 성공 시 accessToken을 저장하고 홈 페이지로 이동합니다.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await authApi.post("/api/member/login", null, {
        params: { username, password },
      });

      console.log(response.data);
      // 응답에서 accessToken 확인 및 저장
      if (response.data.accessToken) {
        setAccessToken(response.data.accessToken);
        // 응답에 username이 포함되어 있으면 저장
        if (response.data.username) {
          setStoreUsername(response.data.username);
        } else {
          setStoreUsername(username);
        }
        // 로그인 성공 후 홈으로 이동
        navigate("/");
      } else {
        setError("로그인 응답에 토큰이 없습니다.");
      }
    } catch (err) {
      // 에러 응답 처리
      const errorMessage =
        err.response?.data?.message ||
        err.response?.data?.error ||
        err.message ||
        "로그인에 실패했습니다.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 배경 그라데이션 및 사막 야경 효과 */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-purple-600 via-pink-500 to-orange-300">
        {/* 달 */}
        <div className="absolute top-20 right-1/4 w-32 h-32 bg-orange-200 rounded-full opacity-80 blur-sm"></div>

        {/* 별들 */}
        <div className="absolute top-10 left-1/4 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-32 left-1/3 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-24 right-1/3 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-40 left-1/2 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-16 right-1/5 w-1 h-1 bg-white rounded-full"></div>

        {/* 유성 효과 */}
        <div className="absolute top-20 left-1/3 w-0.5 h-20 bg-white opacity-60 transform rotate-45"></div>
        <div className="absolute top-40 right-1/4 w-0.5 h-16 bg-white opacity-50 transform -rotate-12"></div>

        {/* 사막 언덕 레이어들 */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-purple-800 via-pink-600 to-orange-400 opacity-60 rounded-t-full transform scale-x-150"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-purple-700 via-pink-500 to-orange-300 opacity-50 rounded-t-full transform scale-x-125 translate-y-8"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-purple-600 via-pink-400 to-orange-200 opacity-40 rounded-t-full transform scale-x-110 translate-y-16"></div>
      </div>

      {/* 로그인 폼 카드 */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-gray-50 rounded-xl shadow-lg p-8 backdrop-blur-sm bg-opacity-95">
          {/* 제목 */}
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Login</h1>

          {/* 에러 메시지 */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* 로그인 폼 */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username 입력 필드 */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <User className="w-5 h-5 text-pink-500" />
              </div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3 bg-pink-100 rounded-full text-pink-700 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-pink-50 transition-all"
              />
            </div>

            {/* Password 입력 필드 */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Lock className="w-5 h-5 text-pink-500" />
              </div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3 bg-pink-100 rounded-full text-pink-700 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-pink-50 transition-all"
              />
            </div>

            {/* Remember me 및 Forgot password */}
            <div className="flex items-center justify-between">
              {/* Remember me 토글 */}

              {/* Forgot password 링크 */}
            </div>

            {/* Login 버튼 */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "로그인 중..." : "Login"}
            </button>

            {/* Create Account 링크 */}
            <div className="text-center">
              <Link
                to="/register"
                className="text-sm text-gray-700 hover:text-purple-600 transition-colors"
              >
                Create Account
              </Link>{" "}
              |{" "}
              <Link
                to="/"
                className="text-sm text-gray-700 hover:text-purple-600 transition-colors"
              >
                home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginComp;
