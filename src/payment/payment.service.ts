import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { Order } from './types/order.types'

@Injectable()
export class PaymentService {
    constructor(
        @Inject('GATEWAY') private readonly gatewayClient: ClientProxy
    ) {}

    create(order: Order) {
        if (order.products.length > 1) {
            /** Successful payment */
            order.status = 'CONFIRMED'
            this.gatewayClient.emit('payment:created', order)
        } else {
            /** Declined payment */
            order.status = 'CANCELLED'
            this.gatewayClient.emit('payment:created', order)
        }
    }
}
