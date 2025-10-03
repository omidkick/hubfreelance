import axios from "axios";

// const BASE_URL = "http://localhost:5000/api";
const BASE_URL = import.meta.env.VITE_BASE_URL;
// console.log(BASE_URL);

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// interceptors ==> can separate all error and success request or response
//! the response's error is important to us! what kind? status === 401

app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

// EX: add project - get user, ... ==> got 401 error
app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;

    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;

      try {
        const { data } = await axios.get(`${BASE_URL}/user/refresh-token`, {
          withCredentials: true,
        });

        if (data) return app(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(err);
  }
);

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
