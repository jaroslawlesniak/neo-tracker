import fetch from "cross-fetch";

const api = <T>(url: string): Promise<T> => {
console.log(url);
  return fetch(url).then((res) => res.json() as T);
}

const withAuthHeaders = (url: string) => (params?: Object) =>
  `${url}?api_key=${process.env.NASA_API_KEY}`;

export const get = <T>(url: string, params?: Object) => api<T>(url);

export const getWithAuthHeaders = <T>(url: string, params?: Object) =>
  api<T>(withAuthHeaders(url)(params));
