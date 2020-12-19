import axios, { AxiosResponse } from 'axios';
import UrlService from './UrlService';

export class ApiService {
  private readonly endpointName: string;

  constructor(entityName: string) {
    this.endpointName = entityName;
  }

  private static getEntityEndpoint(entityName: string): string {
    return UrlService.getNormalizedUrl(`api/${entityName}`);
  }

  private static async axiosWrapper<T>(
    request: () => Promise<AxiosResponse<{ data: T }>>,
  ): Promise<T> {
    const { data } = await request();
    return data.data;
  }

  async create<T, K>(entity: T): Promise<K> {
    return ApiService.axiosWrapper(() => axios.post(this.endpointName, entity));
  }

  async getAll<T>(): Promise<T> {
    return ApiService.axiosWrapper<T>(() => axios.get(this.endpointName));
  }

  async getOne<T>(id: number): Promise<T> {
    return ApiService.axiosWrapper<T>(() => axios.get(`${this.endpointName}/${id}`));
  }
}
