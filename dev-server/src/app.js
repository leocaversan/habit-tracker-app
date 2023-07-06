import express from 'express';
import cors from 'cors';
import routes from './routes.js';
import './dataBase/index.js';



const port = 4000;

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    };

    // Set up middlewares for the server
    middlewares() {
        this.server.use(express.json());
        this.server.use(cors());
    }
    routes() {
        this.server.use(routes);
    }
}

export default new App().server;