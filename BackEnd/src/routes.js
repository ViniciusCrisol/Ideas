import { Router } from 'express';

import ItemController from './app/controllers/ItemController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/user/create', UserController.store);

routes.post('/session/create', SessionController.store);

routes.get('/idea/show/:id', ItemController.show);
routes.get('/idea/index', ItemController.index);

routes.use(authMiddleware);

routes.get('/user/show-ideas/:id', UserController.show);

routes.put('/idea/update/:id', ItemController.update);
routes.delete('/idea/delete/:id', ItemController.delete);
routes.post('/idea/create/:id', ItemController.store);

export default routes;
