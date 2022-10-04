import axios, { AxiosResponse } from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const responseBody = (response: AxiosResponse) => response.data;
