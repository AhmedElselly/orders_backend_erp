import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OrderStatus } from '../types/order.type';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  customer!: string;

  @Column()
  total!: number;

  @Column({
    type: 'enum',
    enum: OrderStatus,
  })
  status!: OrderStatus;
}
