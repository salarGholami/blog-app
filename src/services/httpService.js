import { axios } from "axios";

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

const http = {
  get: app.get,
  patch: app.patch,
  post: app.post,
  put: app.put,
  delete: app.delete,
};

export default http;
