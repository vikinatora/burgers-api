import { Response } from 'express';
import { sendBadResponse } from '../helpers/helpers';
import { HttpStatues } from '../helpers/httpStatuses';
import BurgerController from '../controllers/burgersController';

class Routes {
  private burgerController = new BurgerController();

  public routes(app): void {
    app.route('/burgers/random')
      .get(this.burgerController.getRandomBurger);

    app.route('/burgers/:id')
      .get(this.burgerController.getBurgerById);
      
    app.route('/burgers')
      .get(this.burgerController.getBurgers)
      .post(this.burgerController.addBurger);

    app.route('*')
      .get((req: Request, res: Response) => {
        sendBadResponse(res, HttpStatues.NotFound.Code, HttpStatues.NotFound.Name, `No endpoint found that matches '${req.url}'`)
      });
  }
}

export default Routes;
