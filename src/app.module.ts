import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductApiClient } from './product-api/product-api-client';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ProductApiClient],
})
export class AppModule {}
