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

        routes.get('/hello', (req, res) => {
            res.json({ hello: 'apenas teste'})
        })

        this.app.use(routes)
    }
}

export default new App();