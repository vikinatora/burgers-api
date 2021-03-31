import { Request, Response } from 'express';
import { ErrorMessages, MAX_RESULTS_COUNT, RETRIES_COUNT } from '../helpers/constants';
import { sendBadResponse } from '../helpers/helpers';
import { HttpStatues } from '../helpers/httpStatuses';
import CounterService from '../services/counterService';
import BurgerService from '../services/burgerServices';

export default class BurgerController {
  private counterService: CounterService;
  private burgerService: BurgerService;

  constructor() {
    this.counterService = new CounterService();
    this.burgerService = new BurgerService();
  }

  public addBurger = async (req: Request, res: Response): Promise<void> => {
    try {
      const savedBurger = await this.burgerService.createBurger(req.body);
      this.counterService.lastId = savedBurger.id;
      res.json(savedBurger);
    } catch (err) {
      sendBadResponse(res, HttpStatues.InternalServerError.Code, HttpStatues.InternalServerError.Name, ErrorMessages.UNEXPECTED_ERROR);
    }
  };

  public getBurgers = async (req: Request, res: Response): Promise<void> => {
    try {
      let badRequestData = [];

      let { burger_name, page, per_page } = req.query;
      if (page && (isNaN(+page) || !Number.isInteger(+page) || +page <= 0)) {
        badRequestData.push({
          location: 'query',
          param: 'page',
          msg: 'Must be an integer and greater than 0',
          value: page,
        });
      }

      if (per_page && (isNaN(+per_page) || !Number.isInteger(+per_page) || +per_page <= 0 || +per_page > MAX_RESULTS_COUNT)) {
        badRequestData.push({
          location: 'query',
          param: 'per_page',
          msg: `Must be an integer greater than 0 and less than ${MAX_RESULTS_COUNT}`,
          value: per_page,
        });
      }
      if (badRequestData.length) {
        sendBadResponse(res, HttpStatues.BadRequest.Code, HttpStatues.BadRequest.Name, ErrorMessages.INVALID_QUERY_PARAMS, badRequestData);
      } else {
        let burgers = await this.burgerService.getBurgers(burger_name, +page, +per_page);
        res.send(burgers);
      }
    } catch (err) {
      sendBadResponse(res, HttpStatues.InternalServerError.Code, HttpStatues.InternalServerError.Name, ErrorMessages.UNEXPECTED_ERROR);
    }
  };

  public getBurgerById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = +req.params.id;
      if (isNaN(id) || !Number.isInteger(id) || id <= 0) {
        const badRequestData = [{
          location: 'params',
          param: 'burgerId',
          msg: `burgerId must be an integer and greater than 0`,
          value: id,
        }]

        sendBadResponse(res, HttpStatues.BadRequest.Code, HttpStatues.BadRequest.Name, "Invalid id route parameter", badRequestData)
      }
      const burger = await this.burgerService.getBurgerById(id);
      if (!burger) {
        sendBadResponse(res, HttpStatues.NotFound.Code, HttpStatues.NotFound.Name, `No burger found that matches the ID ${id}`);
      } else {
        res.send(burger);
      }
    } catch (err) {
      sendBadResponse(res, HttpStatues.InternalServerError.Code, HttpStatues.InternalServerError.Name, ErrorMessages.UNEXPECTED_ERROR);
    }
  };

  public getRandomBurger = async (req: Request, res: Response): Promise<void> => {
    try {
      const burger = await this.burgerService.getRandomBurger(this.counterService.lastId);
      if (!burger) {
        sendBadResponse(res, HttpStatues.NotFound.Code, HttpStatues.NotFound.Name, `Couldn't get random burger after ${RETRIES_COUNT} retries. Please try again`);
      } else {
        res.send(burger);
      }
    } catch (err) {
      sendBadResponse(res, HttpStatues.InternalServerError.Code, HttpStatues.InternalServerError.Name, ErrorMessages.UNEXPECTED_ERROR);
    }
  };

}

