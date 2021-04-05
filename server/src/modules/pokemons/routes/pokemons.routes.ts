import { Router } from 'express';

import ensureAuthenticated from '../../../middlewares/ensureAuthenticated';

import PokemonsController from '../controllers/PokemonsController';

const pokemonsRouter = Router();
const pokemonsController = new PokemonsController();

pokemonsRouter.get('/', pokemonsController.index);
pokemonsRouter.post('/', ensureAuthenticated, pokemonsController.create);

export default pokemonsRouter;
