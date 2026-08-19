import { Injectable } from '@nestjs/common';
import { Order } from '../types/order.type';
import { OrderRepository } from './order.repository';

@Injectable()
export class InMemoryOrderRepository extends OrderRepository {
  private orders: Order[] = [
    {
      id: '1',
      customer: 'Ahmed',
      total: 500,
      status: 'PENDING',
    },
    {
      id: '2',
      customer: 'John',
      total: 750,
      status: 'COMPLETED',
    },
  ];

  async findById(id: string): Promise<Order | null> {
    return this.orders.find((order) => order.id === id) || null;
  }

  async create(order: Order): Promise<void> {
    this.orders.push(order);
  }

  async update(order: Order): Promise<void> {
    const index = this.orders.findIndex((o) => o.id === order.id);
    if (index !== -1) {
      this.orders[index] = order;
    }
  }

  async delete(id: string): Promise<void> {
    this.orders = this.orders.filter((order) => order.id !== id);
  }
}
