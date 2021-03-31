import * as mongoose from 'mongoose';
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

export interface BurgerDoc extends mongoose.Document {
    seq: number;
};

export const BurgerSchema = new Schema<BurgerDoc>({
    burgerName: {
        type: String,
        required: 'Burger name is required'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

BurgerSchema.plugin(AutoIncrement, { inc_field: 'id' });