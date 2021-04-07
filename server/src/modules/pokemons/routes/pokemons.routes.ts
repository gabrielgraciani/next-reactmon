import { Router } from 'express';

import ensureAuthenticated from '../../../middlewares/ensureAuthenticated';

import PokemonsController from '../controllers/PokemonsController';

const pokemonsRouter = Router();
const pokemonsController = new PokemonsController();

pokemonsRouter.get('/', pokemonsController.index);
pokemonsRouter.post('/', ensureAuthenticated, pokemonsController.create);
pokemonsRouter.put('/:id', ensureAuthenticated, pokemonsController.update);
pokemonsRouter.delete('/:id', ensureAuthenticated, pokemonsController.delete);

export default pokemonsRouter;
