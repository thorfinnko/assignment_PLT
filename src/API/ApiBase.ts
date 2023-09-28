import { AxiosRequestConfig } from 'axios';
import axios from './Handler';

export default class APIBase {
  controllerName = '';

  axiosInstance: any;

  constructor(controllerName: string) {
    this.controllerName = controllerName;
    this.axiosInstance = axios;
  }

  async get(path: string, options?: AxiosRequestConfig) {
    const response = options
      ? await this.axiosInstance.get(path, options)
      : await this.axiosInstance.get(path);

    return response;
  }
}
