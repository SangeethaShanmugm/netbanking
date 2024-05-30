import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.120.6.128:9090/api', // Base URL for your API
  timeout: 10000, // Request timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
