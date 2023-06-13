import express from 'express';
import cors from 'cors';

class App {
    constructor() {
        this.server = express();
        this.server = cors();
    }

    middlawares(){
        this.server.use()
    }
}

export default new App().server;