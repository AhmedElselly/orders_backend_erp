import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PostgresOrderRepository } from './repositories/postgres.order.repository';
import { OrderEntity } from './entities/order.entity';

import { InMemoryOrderRepository } from './repositories/in-memory-order.repository';
import { OrderRepository } from './repositories/order.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity])], // Import the Order entity for TypeORM
  controllers: [OrdersController],
  exports: [TypeOrmModule],
  providers: [
    OrdersService,
    // {
    //   provide: 'OrderRepository',
    //   useClass: InMemoryOrderRepository, // Use the in-memory implementation for now
    // },
    {
      provide: 'OrderRepository',
      useClass: PostgresOrderRepository, // Use the PostgreSQL implementation for now
    },
  ],
})
export class OrdersModule {}
