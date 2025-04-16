// src/lib/apiClient.js (continued)
import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

// State to prevent multiple concurrent refresh attempts
let isRefreshing = false;
let failedQueue: { resolve: (value?: any) => void; reject: (reason?: any) => void; config: any }[] = []; // Queue of requests waiting for a new token

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      // Assuming the new token is now automatically handled via cookie
      // If the token needed to be added manually to headers:
      // prom.config.headers['Authorization'] = 'Bearer ' + token;
      prom.resolve(apiClient(prom.config)); // Retry the request
    }
  });
  failedQueue = [];
};

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    // If the request succeeds, just return the response
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if it's a 401 error and not a retry request
    if (error.response?.status === 401 && !originalRequest._retry) {

      if (isRefreshing) {
        // If currently refreshing, queue the original request
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject, config: originalRequest });
        }).catch(err => {
            return Promise.reject(err); // Propagate rejection if refresh fails
        });
      }

      originalRequest._retry = true; // Mark as retry
      isRefreshing = true;

      try {
        console.log('Access token expired. Attempting refresh...');
        // Make the refresh token request
        // The HttpOnly refresh token cookie is sent automatically due to withCredentials: true
        const refreshResponse = await apiClient.post('/auth/refresh'); // Your refresh endpoint

        // If refresh is successful, the server should have set a new HttpOnly access token cookie.
        // The refreshResponse data might be minimal (e.g., { success: true })
        console.log('Token refreshed successfully.');

        // Process the queue with the indication of success (no specific token needed if cookie-based)
        processQueue(null);

        // Retry the original request - browser will use the new access token cookie
        return apiClient(originalRequest);

      } catch (refreshError) {
        console.error('Unable to refresh token:', refreshError);

        // Process the queue with the error
        processQueue(refreshError);

        const refreshResponse = await apiClient.post('/auth/logout'); // Your refresh endpoint

        isRefreshing = false;
        return Promise.reject(refreshError); // Reject the original request's promise

      } finally {
         // Ensure isRefreshing is reset even if something unexpected happened
         // Although it should be covered by success/catch blocks above
         // isRefreshing = false; // Potentially move reset inside success/catch is cleaner
      }
    }

    // For errors other than 401 or for retry attempts that fail, reject the promise
    return Promise.reject(error);
  }
);

export default apiClient;
