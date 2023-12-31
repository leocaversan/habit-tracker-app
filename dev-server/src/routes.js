import { Router } from "express";
import HelloController from "./controllers/HelloController.js";
import UserController from "./controllers/UserController.js";
import auth from "./middlewares/auth.js";
import SessionController from "./controllers/SessionController.js";

import HabitController from "./controllers/HabitController.js";






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


// routes habits

routes.post('/createHabit', HabitController.createHabit);
routes.post('/getHabits', HabitController.getHabitsByUser);
routes.get('/getAllHabits', HabitController.getAllHabits);
routes.post('/deleteHabit', HabitController.deleteHabit);



export default routes;