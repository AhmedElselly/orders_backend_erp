import { Order } from '../types/order.type';

// import { Order } from '../entities/order.entity';

export interface OrderRepository {
  findById(id: string): Promise<Order | null>;
  findAll(): Promise<Order[] | null>;
  create(order: Omit<Order, 'id'>): Promise<void>;
  update(order: Order): Promise<void>;
  delete(id: string): Promise<void>;
}
