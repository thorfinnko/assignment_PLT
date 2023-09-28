import APIBaseClass from '../ApiBase';
import { API_STATUS_CODES } from '../../constants/statuses';

export default class General {
  private static APIBase: APIBaseClass;

  static getAPIBase() {
    if (!General.APIBase) {
      General.APIBase = new APIBaseClass('General.ts');
    }
    return General.APIBase;
  }

  static async fetch(url: string) {
    const response: any = await this.getAPIBase().get(url);
    if (response.status === API_STATUS_CODES.OK) {
      return response;
    }

    return false;
  }
}
