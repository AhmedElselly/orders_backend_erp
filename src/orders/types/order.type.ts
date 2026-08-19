export type OrderStatus = 'PENDING' | 'COMPLETED' | 'CANCELLED';

export interface Order {
  id: string;
  customer: string;
  total: number;
  status: OrderStatus;
}
