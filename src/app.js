import app from 'express';
import cors from 'cors';

class App {
    constructor(){
        this.app = express();
        this.middlaware();
        this.router();
    }
    middlaware(){
        this.app.use(express.json());
        this.app.use(cors);
    }
    router(){

    }
}

export default new App();