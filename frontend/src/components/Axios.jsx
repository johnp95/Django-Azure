import axios from 'axios';

const isDevelopment = import.meta.env.MODE === 'development';
const baseURL = isDevelopment ? import.meta.env.VITE_API_BASE_URL_LOCAL : import.meta.env.VITE_API_BASE_URL_PROD;

const AxiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

console.log('Axios baseURL:', baseURL);

export default AxiosInstance;
