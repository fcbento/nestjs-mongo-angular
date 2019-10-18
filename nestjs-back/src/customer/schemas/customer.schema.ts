import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
    name: String,
    last_name: String,
    email: String,
    phone: String,
    document: String,
    description: String,
    created_at: { type: Date, default: Date.now }
})