type PaymentStatus = 'CREATED' | 'CONFIRMED' | 'CANCELLED' | 'DELIVERED'

export const PaymentStatus = {
    CONFIRMED: 'CONFIRMED',
    CANCELLED: 'CANCELLED'
}

export class Order {
    id: number
    userId: number
    status: PaymentStatus
    createdAt: Date
    updatedAt: Date
    products: Array<any>
}
