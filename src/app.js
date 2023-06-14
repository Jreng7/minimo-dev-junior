import express, { Router } from 'express';
import cors from 'cors';
// import routes from './routes';

class App {
    constructor() {
        this.app = express();
        this.middlawares();
        this.routes();
    }

    middlawares(){
        this.app.use(express.json());
        this.app.use(cors());
    }
    routes(){
        const routes = new Router();
        this.app.use(routes);
    }
}

export default new App();