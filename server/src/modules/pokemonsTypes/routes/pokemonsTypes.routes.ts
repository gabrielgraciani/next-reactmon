import { Router } from 'express';

import ensureAuthenticated from '../../../middlewares/ensureAuthenticated';

import PokemonsTypesController from '../controllers/PokemonsTypesController';

const pokemonsTypesRouter = Router();
const pokemonsTypesController = new PokemonsTypesController();

pokemonsTypesRouter.get('/', pokemonsTypesController.index);
pokemonsTypesRouter.post(
  '/',
  ensureAuthenticated,
  pokemonsTypesController.create,
);

export default pokemonsTypesRouter;
