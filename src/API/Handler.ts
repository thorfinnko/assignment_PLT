import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/benirvingplt/products',
  headers: {
    common: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  },
});

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const removeTags = (html: string | unknown) => {
  if (typeof html === 'string') return html.replace(/<\/?[^>]+(>|$)/g, '');
  return html;
};

axiosInstance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const apiConfig = config;

    apiConfig.transformRequest = [
      (data, headers) => {
        const apiData = data;
        return apiData;
      },
    ];
    return apiConfig;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response: AxiosRequestConfig) => response,
  (error: AxiosError) => {
    let newError = error;
    if (!error?.response?.data) {
      newError = {
        ...error,
        response: {
          data: {
            message: 'Something went wrong, please try again.',
          },
        } as AxiosResponse,
      };
    }
    return Promise.reject(newError);
  }
);

export default axiosInstance;
