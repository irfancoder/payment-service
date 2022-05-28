import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { Order } from './types/order.types'

@Injectable()
export class PaymentService {
    constructor(
        @Inject('GATEWAY') private readonly gatewayClient: ClientProxy
    ) {}

    async create(order: Order) {
        const random = Math.floor(Math.random() * 2 + 1)

        const PaymentStatus = {
            1: 'CONFIRMED',
            2: 'CANCELLED'
        }
        order.status = PaymentStatus[random]
        this.gatewayClient.emit<Order>('order:updated', order)

        if (order.status === 'CONFIRMED') this.deliver(order)
    }

    deliver(order: Order) {
        setTimeout(() => {
            order.status = 'DELIVERED'
            this.gatewayClient.emit<Order>('order:updated', order)
        }, 5000)
    }
}
