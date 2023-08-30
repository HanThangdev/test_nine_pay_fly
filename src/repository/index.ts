import { notification } from 'antd';
import axios, {
  AxiosError,
  type AxiosInstance,
  CreateAxiosDefaults,
  HttpStatusCode,
} from 'axios';
import Cookies from 'universal-cookie';

const configs: CreateAxiosDefaults = {
  baseURL: new URL(import.meta.env.VITE_API_URL).toString(),
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
};

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      ...configs,
    });
    this.instance.interceptors.request.use(
      (config) => {
        const cookies = new Cookies();
        const token = cookies.get('access_token');

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );
    this.instance.interceptors.response.use(
      (response) => {
        if (response.status === HttpStatusCode.Unauthorized) {
          const cookies = new Cookies();
          cookies.remove('access_token', { path: '/auth/signin' });
        } else {
          const { url } = response.config;
          if (url === `/token`) {
            const data = response.data.data;
            const cookies = new Cookies();
            cookies.set('access_token', data.access_token, { path: '/' });
          }
        }

        return response;
      },
      (error: AxiosError) => {
        if (error.response?.status === HttpStatusCode.Unauthorized) {
          const cookies = new Cookies();
          cookies.remove('access_token', { path: '/auth/signin' });
          notification.warning({
            message: 'Your Token Expired, Please Login',
            duration: 2
        }); 
        }

        return Promise.reject(error);
      },
    );
  }
}

const http = new Http().instance;

export default http;
