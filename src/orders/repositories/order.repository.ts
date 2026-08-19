import { Order } from '../types/order.type';

export abstract class OrderRepository {
  abstract findById(id: string): Promise<Order | null>;
  abstract create(order: Order): Promise<void>;
  abstract update(order: Order): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
