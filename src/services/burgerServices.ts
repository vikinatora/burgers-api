import * as mongoose from "mongoose";
import { BurgerDoc, BurgerSchema } from "../models/burger";
import { RESULTS_PER_PAGE, RETRIES_COUNT } from "../helpers/constants";
import { getRandomInteger } from "../helpers/helpers";
const Burger = mongoose.model<BurgerDoc>('Burger', BurgerSchema);

export default class BurgerService {
    private selectFields = '-_id id burgerName';

    public getBurgers = async (burgerName, page: number, perPage: number): Promise<BurgerDoc[]> => {
        let query: any = {};
      
        if (burgerName) {
          burgerName = burgerName.toString().replace('_', ' ');
          query.burgerName = burgerName;
          query = { "burgerName": { "$regex": burgerName, "$options": "i" } };
        }
      
        const burgers = await (Burger.find(query, this.selectFields)
          .skip((page - 1) * (perPage || RESULTS_PER_PAGE))
          .limit(perPage || RESULTS_PER_PAGE)
          .sort('id')
          .exec());
        return burgers;
      }

    public createBurger = async(body): Promise<BurgerDoc> => {
        const newBurger = new Burger(body);
        const savedBurger = await newBurger.save();
        return savedBurger;
    }

    public getBurgerById = async (id: number): Promise<BurgerDoc> => {
        const burger = await (Burger.findOne({ id }, this.selectFields).sort('id').exec());
        return burger;
    }

    public getRandomBurger = async (lastId: number): Promise<BurgerDoc> => {
        for (let i = 0; i <= RETRIES_COUNT; i += 1) {
            const randomInt = getRandomInteger(1, lastId);
            const burger = await (Burger.findOne({ id: randomInt }, this.selectFields).sort('id').exec());
            if (burger) {
              return burger;
            }
          }
        return null;
    }
};