import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDTO } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {

    constructor(@InjectModel('Customer') private readonly customerModel: Model<Customer>) { }

    async getAllCustomer(): Promise<Customer[]> {
        const customers = await this.customerModel.find().exec();
        return customers;
    }

    async getCustomer(customerID): Promise<Customer> {
        const customer = await this.customerModel.findById(customerID).exec();
        return customer;
    }

    async addCustomer(createCustomerDTO: CreateCustomerDTO): Promise<Customer> {
        try {
            const newCustomer = await this.customerModel(createCustomerDTO);
            const token = await newCustomer.generateAuthToken();
            return newCustomer.save();
        } catch (e) {
            return e.errmsg;
        }

    }

    async updateCustomer(customerID, createCustomerDTO: CreateCustomerDTO): Promise<Customer> {
        const updatedCustomer = await this.customerModel
            .findByIdAndUpdate(customerID, createCustomerDTO, { new: true });
        return updatedCustomer;
    }

    async deleteCustomer(customerID): Promise<any> {
        const deletedCustomer = await this.customerModel.findByIdAndRemove(customerID);
        return deletedCustomer;
    }

    async loginCustomer(createCustomerDTO: CreateCustomerDTO): Promise<Customer> {
        const customer = await this.customerModel.find({ email: createCustomerDTO.email }).exec();
        return customer;
    }
}