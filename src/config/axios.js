import axios from 'axios';

// Create an Axios instance with custom configurations
export const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});
