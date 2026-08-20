import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderRepository } from './repositories/order.repository';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('OrderRepository')
    private readonly orderRepository: OrderRepository,
  ) {}

  create(createOrderDto: CreateOrderDto) {
    return this.orderRepository.create(createOrderDto);
  }

  findAll() {
    return this.orderRepository.findAll();
  }

  findOne(id: string) {
    return this.orderRepository.findById(id);
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.update({ ...updateOrderDto, id });
  }

  remove(id: string) {
    return this.orderRepository.delete(id);
  }
}
