import { Document } from 'mongoose';

export interface Customer extends Document {
    readonly name: string;
    readonly last_name: string;
    readonly email: string;
    readonly phone: string;
    readonly document: string;
    readonly description: string;
    readonly created_at: Date;
}