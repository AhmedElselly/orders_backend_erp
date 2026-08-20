import { Injectable } from '@nestjs/common';
import { Order, OrderStatus } from '../types/order.type';
import type { OrderRepository } from './order.repository';

@Injectable()
export class InMemoryOrderRepository implements OrderRepository {
  private orders: Order[] = [
    {
      id: '1',
      customer: 'Ahmed111',
      total: 500,
      status: OrderStatus.PENDING,
    },
    {
      id: '2',
      customer: 'John',
      total: 750,
      status: OrderStatus.COMPLETED,
    },
  ];

  async findById(id: string): Promise<Order | null> {
    return this.orders.find((order) => order.id === id) || null;
  }

  async findAll(): Promise<Order[] | null> {
    console.log({ orders: this.orders });
    return this.orders || null;
  }

  async create(order: Order): Promise<void> {
    const newOrder: Order = {
      id: Date.now().toString(),
      customer: order.customer,
      total: order.total,
      status: order.status,
    };
    this.orders.push(newOrder);
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
