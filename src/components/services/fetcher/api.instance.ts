import axios, { AxiosError, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from "axios";
import { services } from "..";

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}

export const fetcher = axios.create({
  baseURL: services.API_BASE_URL,
});

fetcher.interceptors.request.use(
  (config): AdaptAxiosRequestConfig => {
    return config;
  },
  (error): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

fetcher.interceptors.response.use(
  async (response): Promise<AxiosResponse> => {
    return response.data;
  },
  async (error): Promise<AxiosError> => {
    return Promise.reject(error.response);
  }
);