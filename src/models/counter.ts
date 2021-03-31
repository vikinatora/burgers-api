import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface CounterDoc extends mongoose.Document {
  seq: number;
  id: string;
};

export const CounterSchema = new Schema<CounterDoc>({
  seq: {
    type: Number,
  },
  id: {
    type: String
  }
});