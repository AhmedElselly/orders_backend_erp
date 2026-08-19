import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';

@Module({
  controllers: [OrdersController],
  providers: [
    OrdersService,
    {
      provide: 'OrderRepository',
      useClass: InMemoryOrderRepository, // Use the in-memory implementation for now
    },
  ],
})
export class OrdersModule {}
