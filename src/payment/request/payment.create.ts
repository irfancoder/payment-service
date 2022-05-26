import { Type } from 'class-transformer'
import { Order } from '../types/order.types'

export class CreatePaymentRequest {
    @Type(() => Order)
    order: Order
}
