import { Controller, Body } from '@nestjs/common'
import { EventPattern, Transport } from '@nestjs/microservices'
import { PaymentService } from './payment.service'
import { Order } from './types/order.types'

@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {}

    @EventPattern('payment:create', Transport.TCP)
    create(@Body() order: Order) {
        return this.paymentService.create(order)
    }
}
