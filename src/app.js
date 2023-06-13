import express from 'express';
import cors from 'cors';

class App {
    constructor() {
        this.server = express();
        this.server = cors();
    }

    middlawares(){
        
    }
}

export default new App().server