import axios, {type AxiosInstance, type AxiosRequestConfig} from "axios";

const createInstance = (options?: AxiosRequestConfig): AxiosInstance => {
  return axios.create({
    headers: {
    },
    withCredentials: false,
    ...options,
  });
};

// Cached instance (created on first use)
let cachedInstance: AxiosInstance | null = null;

const getInstance = () => {
  if (!cachedInstance) {
    cachedInstance = createInstance();
  }
  return cachedInstance;
};

// Export API with lazy interceptor setup
export const apiInstance = {
  get: (url: string) => {
    const instance = getInstance();
    return instance.get(url);
  },
  post: (
      url: string,
      requestBody?: object,
  ) => {
    const instance = getInstance();
    return instance.post(url, requestBody);
  },
  patch: (
      url: string,
      requestBody?: object,
  ) => {
    const instance = getInstance();
    return instance.patch(url, requestBody);
  },
  put: (
      url: string,
      requestBody?: object,
  ) => {
    const instance = getInstance();
    return instance.put(url, requestBody);
  },
  delete: (url: string) => {
    const instance = getInstance();
    return instance.delete(url);
  },
  get instance() {
    return getInstance();
  },
  static: axios,
};