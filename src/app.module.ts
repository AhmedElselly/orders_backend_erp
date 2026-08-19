import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [CatModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
