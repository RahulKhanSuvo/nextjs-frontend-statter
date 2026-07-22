import { ApiResponse } from '@/types/api.type';
import axios from 'axios';
import { cookies } from 'next/headers';
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
if (!API_URL) throw new Error('NEXT_PUBLIC_API_BASE_URL is not defined');

const axiosInstance = async () => {
  // const cookiesStore = await cookies();
  // const cookiesString = cookiesStore.toString();
  return axios.create({
    baseURL: API_URL,
    timeout: 50000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export interface ApiRequestOptions {
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}
const httpGet = async <TData>(
  url: string,
  option?: ApiRequestOptions,
): Promise<ApiResponse<TData>> => {
  try {
    const instance = await axiosInstance();
    const response = await instance.get<ApiResponse<TData>>(url, option);
    return response.data;
  } catch (error) {
    console.error(`Get request endpoint ${url} failed:`, error);
    throw error;
  }
};
const httpPost = async <TData>(
  url: string,
  data: unknown,
  option?: ApiRequestOptions,
): Promise<ApiResponse<TData>> => {
  try {
    const instance = await axiosInstance();
    const res = await instance.post<ApiResponse<TData>>(url, data, option);
    return res.data;
  } catch (error) {
    console.error(`Post request endpoint ${url} failed:`, error);
    throw error;
  }
};

const httpPut = async <TData>(
  url: string,
  data: unknown,
  option?: ApiRequestOptions,
): Promise<ApiResponse<TData>> => {
  try {
    const instance = await axiosInstance();
    const res = await instance.put<ApiResponse<TData>>(url, data, option);
    return res.data;
  } catch (error) {
    console.error(`Put request endpoint ${url} failed:`, error);
    throw error;
  }
};

const httpPatch = async <TData>(
  url: string,
  data: unknown,
  option?: ApiRequestOptions,
): Promise<ApiResponse<TData>> => {
  try {
    const instance = await axiosInstance();
    const res = await instance.patch<ApiResponse<TData>>(url, data, option);
    return res.data;
  } catch (error) {
    console.error(`Patch request endpoint ${url} failed:`, error);
    throw error;
  }
};

const httpDelete = async <TData>(
  url: string,
  option?: ApiRequestOptions,
): Promise<ApiResponse<TData>> => {
  try {
    const instance = await axiosInstance();
    const res = await instance.delete<ApiResponse<TData>>(url, option);
    return res.data;
  } catch (error) {
    console.error(`Delete request endpoint ${url} failed:`, error);
    throw error;
  }
};

export const httpClient = {
  get: httpGet,
  post: httpPost,
  put: httpPut,
  patch: httpPatch,
  delete: httpDelete,
};
