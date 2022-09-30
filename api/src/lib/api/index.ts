import fetch from "cross-fetch";

const api = <T>(url: string, params?: Object): Promise<T> =>
  fetch(url).then((res) => res.json() as T);

const withAuthHeaders = (url: string, params?: Object) =>
  `${url}?api_key=${process.env.NASA_API_KEY}`;

export const get = <T>(url: string, params?: Object) => api<T>(url, params);

export const getWithAuthHeaders = <T>(url: string, params?: Object) =>
  api<T>(withAuthHeaders(url, params));
