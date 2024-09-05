import axios from 'axios';
import { isLoggedIn } from '../auth/authUtils';


const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    const loggedIn = await isLoggedIn(); 
    if (loggedIn) {
      const token = localStorage.getItem('jwt');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
