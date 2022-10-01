import fetch from 'cross-fetch';

const api = <T>(url: string, params?: Record<string, string | number>): Promise<T> =>
  fetch(url).then((res) => res.json() as T);

const withAuthHeaders = (url: string, params?: Record<string, string | number>) =>
  `${url}?api_key=${process.env.NASA_API_KEY}`;

export const get = <T>(url: string, params?: Record<string, string | number>) => api<T>(url, params);

export const getWithAuthHeaders = <T>(url: string, params?: Record<string, string | number>) =>
  api<T>(withAuthHeaders(url, params));
