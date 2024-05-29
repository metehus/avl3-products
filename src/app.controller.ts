import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RoutePayload } from './types';
import { Product } from './product-api/types';

@Controller('/create-products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getHello(@Body() payload: RoutePayload): Promise<Product[]> {
    if (!payload.email || !payload.password || !payload.products) {
      throw new BadRequestException('Missing parameters');
    }
    return this.appService.createProducts(payload);
  }
}
