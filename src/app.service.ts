import { Injectable } from '@nestjs/common';
import { RoutePayload } from './types';
import { Product } from './product-api/types';
import { ProductApiClient } from './product-api/product-api-client';

@Injectable()
export class AppService {
  constructor(private productApiClient: ProductApiClient) {}

  async createProducts(payload: RoutePayload): Promise<Product[]> {
    const token = await this.productApiClient.authenticate(
      payload.email,
      payload.password,
    );

    await Promise.all(
      payload.products.map((p) =>
        this.productApiClient.createProduct(token, p),
      ),
    );

    await this.wait(200);

    return this.productApiClient.getProducts(token);
  }

  private wait(ms: number) {
    return new Promise((res) => setTimeout(res, ms));
  }
}
