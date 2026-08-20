import { IsEnum, IsNumber, IsPositive, IsString } from 'class-validator';
import { OrderStatus } from '../types/order.type';

export class CreateOrderDto {
  @IsString()
  customer!: string;

  @IsNumber()
  @IsPositive()
  total!: number;

  @IsEnum(OrderStatus)
  status!: OrderStatus;
}
