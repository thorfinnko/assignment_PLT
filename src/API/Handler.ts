import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
// import normalizeHeaderName from 'axios/lib/helpers/normalizeHeaderName';
import utils from 'axios/lib/utils';

function setContentTypeIfUnset(headers: any, value: string) {
  const apiHeaders = headers;
  if (!utils.isUndefined(apiHeaders) && utils.isUndefined(apiHeaders['Content-Type'])) {
    apiHeaders['Content-Type'] = value;
  }
}

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

        // apiData = sanitizeMaster(data);
        // normalizeHeaderName(headers, 'Content-Type');
        if (
          utils.isFormData(apiData) ||
          utils.isArrayBuffer(apiData) ||
          utils.isStream(apiData) ||
          utils.isFile(apiData) ||
          utils.isBlob(apiData)
        ) {
          return apiData;
        }
        if (utils.isArrayBufferView(apiData)) {
          return apiData.buffer;
        }
        if (utils.isURLSearchParams(apiData)) {
          setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
          return apiData.toString();
        }
        if (utils.isObject(apiData)) {
          setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
          return JSON.stringify(apiData);
        }

        return apiData;
      },
    ];
    return apiConfig;
    // this condition will never hit
    // return true;
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
