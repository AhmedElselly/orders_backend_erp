// export type OrderStatus = 'PENDING' | 'COMPLETED' | 'CANCELLED';

export enum OrderStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export interface Order {
  id: string;
  customer: string;
  total: number;
  status: OrderStatus;
}
