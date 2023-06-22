import app, { Router } from 'express';
import cors from 'cors';

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }
    routes() {
        const routes = new Router();
        this.app.use(routes)
    }
}