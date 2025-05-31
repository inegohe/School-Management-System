import axios from "axios";

const apiClient = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

let isRefreshing = false;
let failedQueue: {
  resolve: (value?: any) => void;
  reject: (reason?: any) => void;
  config: any;
}[] = [];

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(apiClient(prom.config));
    }
  });
  failedQueue = [];
};

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject, config: originalRequest });
        }).catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        console.log("Access token expired. Attempting refresh...");
        const refreshResponse = await axios.post("/api/auth/refresh");

        if ([401, 400].includes(refreshResponse.status)) {
          console.error("Unable to refresh token:", refreshResponse);
          if (typeof window !== "undefined") {
            window.location.href = "/logout";
          }
        } else {
          console.log("Token refreshed successfully.");
          processQueue(null);
          return apiClient(originalRequest);
        }
      } catch (refreshError: any) {
        console.error("Unable to refresh token:", refreshError);
        processQueue(refreshError);
        if (
          refreshError?.response?.status === 401 ||
          refreshError?.response?.status === 400
        ) {
          if (typeof window !== "undefined") {
            window.location.href = "/logout";
          }
        }

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
