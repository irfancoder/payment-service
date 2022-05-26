type PaymentStatus = 'CREATED' | 'CONFIRMED' | 'CANCELLED' | 'DELIVERED'

export class Order {
    id: number
    userId: number
    status: PaymentStatus
    createdAt: Date
    updatedAt: Date
    products: Array<any>
}
