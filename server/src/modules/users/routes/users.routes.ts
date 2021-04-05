import { Router } from 'express';

import ensureAuthenticated from '../../../middlewares/ensureAuthenticated';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', usersController.index);
usersRouter.post('/', usersController.create);
usersRouter.put('/:id', ensureAuthenticated, usersController.update);

export default usersRouter;
