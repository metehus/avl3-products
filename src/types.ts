import { Product } from './product-api/types';

export interface RoutePayload {
  email: string;
  password: string;
  products: Omit<Product, 'id'>[];
}
