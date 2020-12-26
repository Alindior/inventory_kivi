import axios, { Method } from 'axios';

export default class AxiosService {
  static setAuthToken(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  static makeRequest<T>(url: string, method: Method, data?: T) {
    return axios({
      url,
      method,
      data,
    });
  }
}
