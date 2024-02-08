import axios from 'axios';

const baseURL = 'idkbropleasework.azurewebsites.net/';

const AxiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

export default AxiosInstance;
