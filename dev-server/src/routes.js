import { Router } from "express";
import HelloController from "./controllers/HelloController.js";
import UserController from "./controllers/UserController.js";
import auth from "./middlewares/auth.js";
import SessionController from "./controllers/SessionController.js";




const routes = new Router();

routes.post('/sessions',SessionController.create)
routes.get('/hello', HelloController.index);

// routes.use(auth)

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.create);
routes.post('/usersValidate', UserController.login);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);



export default routes;