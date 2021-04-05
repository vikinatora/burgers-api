import * as mongoose from 'mongoose';
import * as express from 'express';
import Routes from './routes/routes';
import limitRate from './middlewares/rateLimiter';
import useCors from "./middlewares/cors";
import { MONGO_DB_SERVER } from "./helpers/constants";

class App {
  public app: express.Application;

  public routes: Routes = new Routes();

  public mongoUrl: string = MONGO_DB_SERVER;

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
    
  }

  private config(): void {
    this.app.use(limitRate);
    this.routes.routes(this.app);
    this.app.use(useCors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({
      extended: true,
    }));
  }

  private async mongoSetup (): Promise<void> {
    try {
      const result = await mongoose.connect(this.mongoUrl,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });  
      console.log("mongodb connected");
    } catch(err) {
      console.error(`mongo error in connection: `, err);
    }
  }
}

export default new App().app;
