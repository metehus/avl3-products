import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RoutePayload } from './types';
import { Product } from './product-api/types';

@Controller('/create-products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getHello(@Body() payload: RoutePayload): Promise<Product[]> {
    return this.appService.createProducts(payload);
  }
}
