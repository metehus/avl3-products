import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { Product } from './types';

@Injectable()
export class ProductApiClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3005',
    });
  }

  async authenticate(email: string, password: string) {
    const { data } = await this.instance.get('/auth/login', {
      params: {
        email,
        password,
      },
    });
    return data.token;
  }

  async getProducts(token: string) {
    return this.instance
      .get<Product[]>('/products', {
        headers: {
          Authorization: token,
        },
      })
      .then((r) => r.data);
  }

  async createProduct(token: string, product: Omit<Product, 'id'>) {
    return this.instance
      .post<Product>('/products', product, {
        headers: {
          Authorization: token,
        },
      })
      .then((r) => r.data);
  }
}
