import { Router } from 'express';

import ItemController from './app/controllers/ItemController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/user', UserController.store);

routes.post('/session', SessionController.store);

routes.get('/', ItemController.index);

routes.use(authMiddleware);

routes.put('/:id', ItemController.update);
routes.delete('/:id', ItemController.delete);
routes.post('/idea/create/:id', ItemController.store);

export default routes;
