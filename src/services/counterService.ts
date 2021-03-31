import { BurgerDoc, BurgerSchema } from "../models/burger";
import * as mongoose from "mongoose";
import { CounterDoc, CounterSchema } from "../models/counter";

const Counter = mongoose.model<CounterDoc>('Counter', CounterSchema);
const Burger = mongoose.model<BurgerDoc>('Burger', BurgerSchema);

export default class CounterService {
  public lastId = 0;

  constructor() {
    this.getLastId();
  }

  public getLastId = async (): Promise<void> => {
    try {
      const counter = await (Counter.findOne({ id: 'id' }).exec());
      if (counter) {
        this.lastId = counter.seq;
      }
    } catch (err) {
      const burgers = await (Burger.find().exec());
      if (burgers.length) {
        this.lastId = burgers[burgers.length - 1].id;
      }
    }
  }
}