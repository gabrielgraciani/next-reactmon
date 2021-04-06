import { Router } from 'express';

import ensureAuthenticated from '../../../middlewares/ensureAuthenticated';

import TypesController from '../controllers/TypesController';

const typesRouter = Router();
const typesController = new TypesController();

typesRouter.get('/', typesController.index);
typesRouter.post('/', ensureAuthenticated, typesController.create);
typesRouter.put('/:id', ensureAuthenticated, typesController.update);
typesRouter.delete('/:id', ensureAuthenticated, typesController.delete);

export default typesRouter;
