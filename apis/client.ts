import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { refreshAuth } from './refreshAuth';

export const client = axios.create({
  baseURL: 'http://localhost/5000/api',
});

export const setHeaderToken = (token: string) => {
  client.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeHeaderToken = () => {
  // client.defaults.headers.common.Authorization = null;
  delete client.defaults.headers.common.Authorization;
};

createAuthRefreshInterceptor(client, refreshAuth, {
  statusCodes: [401],
  pauseInstanceWhileRefreshing: true,
});
