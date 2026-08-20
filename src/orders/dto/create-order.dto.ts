import { OrderStatus } from '../types/order.type';

export class CreateOrderDto {
  customer!: string;
  total!: number;
  status!: OrderStatus;
}
