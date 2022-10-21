import axios from 'axios';

import store from 'src/redux/store';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use((response) => {
  const formattedResponse = {
    ...response.data,
    status: response.status,
  };
  return formattedResponse;
});

api.interceptors.request.use((config) => {
  if (!config.headers.token) {
    config.headers.token = store.getState().auth.token;
  }
  return config;
});
