import { useAuthStore } from "@/store/auth.store";
import axios from "axios";

export const authApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, //refreshToken cookie
});

authApi.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

const refreshApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, //refreshToken cookie
});

//App.jsx에서 새로고침사용
export const refreshAccessToken = async () => {
  const { setAccessToken, setLoginStatus, setEmail, clearAuth } =
    useAuthStore.getState();

  try {
    const accessToken = useAuthStore.getState().accessToken;
    const res = await refreshApi.post("/api/auth/refresh", null, {
      headers: accessToken ? { Authorization: "Bearer ${accessToken}" } : {},
    });
    const data = res.data;
    console.log(data);
    console.log("refresh 자료전송완료");
    setAccessToken(data.accessToken);
    setLoginStatus(true);
    setEmail(data.email);
  } catch (error) {
    console.error("토큰 갱신 실패 :", error);
    clearAuth();
    return null;
  }
};

// authApi.post("/api/user/info")
