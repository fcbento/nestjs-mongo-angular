import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://fecb:fl123456@ds349857.mlab.com:49857/crud', { useNewUrlParser: true }), CustomerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
