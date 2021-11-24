import { Router } from 'express';
import HomeController from './controllers/homeController';
import UserController from './controllers/userController';

const routes = Router();

routes.get('/', HomeController.home);
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

export default routes;
