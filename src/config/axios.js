import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.VUE_API_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});
