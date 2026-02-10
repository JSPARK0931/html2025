import React, { useMemo } from "react";
import { useAuthStore } from "@/store/auth.store";

/**
 * JWT 토큰을 파싱하여 페이로드 정보를 반환하는 함수
 * @param {string} token - JWT 토큰 문자열
 * @returns {object|null} 파싱된 페이로드 객체 또는 null
 */
function parseJWT(token) {
  if (!token) return null;

  try {
    // JWT는 . 으로 구분된 3부분 (header.payload.signature)
    const parts = token.split(".");
    if (parts.length !== 3) {
      return { error: "유효하지 않은 JWT 형식입니다." };
    }

    // 페이로드 부분 (두 번째 부분) 디코딩
    const payload = parts[1];
    // base64url 디코딩
    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(""),
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    return { error: `토큰 파싱 실패: ${error.message}` };
  }
}

function HomeComp() {
  // store에서 accessToken 가져오기
  const accessToken = useAuthStore((state) => state.accessToken);

  // accessToken을 파싱하여 페이로드 정보 추출
  const parsedToken = useMemo(() => {
    return parseJWT(accessToken);
  }, [accessToken]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">HomeComp</h1>

      {/* 원본 Access Token */}
      <div className="mt-4 p-4 bg-gray-100 rounded-lg mb-4">
        <h2 className="text-lg font-semibold mb-2">Access Token (원본):</h2>
        <p className="break-all text-sm font-mono bg-white p-2 rounded">
          {accessToken || "토큰이 없습니다."}
        </p>
      </div>

      {/* 파싱된 토큰 정보 */}
      {accessToken && parsedToken && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">
            Parsed Token (페이로드):
          </h2>
          {parsedToken.error ? (
            <p className="text-red-600">{parsedToken.error}</p>
          ) : (
            <div className="bg-white p-4 rounded mt-2">
              <pre className="text-sm overflow-auto">
                {JSON.stringify(parsedToken, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default HomeComp;
