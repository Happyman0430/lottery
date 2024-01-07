import axios from "axios";
import { destroySession, getSession } from "@helpers/localStorage";

const API = axios.create({
  baseURL: "http://127.0.0.1:3333",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
  const sessionObject = getSession();
  if (sessionObject) {
    config.headers = {
      Authorization: `${sessionObject.type} ${sessionObject.token}`,
    };
  }

  return config;
});

API.interceptors.response.use(
  (value) => {
    return Promise.resolve(value);
  },
  (error) => {
    const { isAxiosError = false, response = null } = error;
    if (isAxiosError && response && response.status === 403) {
      destroySession();
      return Promise.reject(error);
    }
    return response;
  }
);
export { API };
