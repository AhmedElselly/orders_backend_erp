import { OrderStatus } from '../types/order.type';

export class CreateOrderDto {
  id!: string;
  customer!: string;
  total!: number;
  status!: OrderStatus;
}
