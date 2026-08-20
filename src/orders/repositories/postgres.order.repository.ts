import { Injectable } from '@nestjs/common';
// import type { OrderRepository } from './order.repository';
import { OrderEntity } from '../entities/order.entity';
import { Order } from '../types/order.type';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostgresOrderRepository {
  // Typeorm implementation of the OrderRepository methods would go here, using TypeORM to interact with a PostgreSQL database.
  constructor(
    @InjectRepository(OrderEntity)
    private repository: Repository<OrderEntity>,
  ) {
    console.log('PostgresOrderRepository constructed');
  }

  async findAll(): Promise<Order[] | null> {
    return this.repository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findById(id: string): Promise<Order | null> {
    return this.repository.findOne({ where: { id } });
  }

  async create(order: Omit<Order, 'id'>): Promise<void> {
    const newOrder = this.repository.create({
      //   id: order.id,
      customer: order.customer,
      total: order.total,
      status: order.status,
    });
    await this.repository.save(newOrder);
  }

  async update(order: Order): Promise<void> {
    await this.repository.save(order);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
