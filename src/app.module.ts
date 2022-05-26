import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PaymentModule } from './payment/payment.module'

@Module({
    imports: [
        PaymentModule,
        ClientsModule.register([
            {
                name: 'GATEWAY',
                transport: Transport.TCP,
                options: {
                    port: 3000
                }
            }
        ])
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
