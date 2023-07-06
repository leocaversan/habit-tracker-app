import { Router } from "express";
import HelloController from "./controllers/HelloController.js";
import UserController from "./controllers/UserController.js";



const routes = new Router();

routes.get('/hello', HelloController.index);

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.create);
routes.put('/users/:id', UserController.destroy);
routes.delete('/users/:id', UserController.destroy);



export default routes;