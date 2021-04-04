import { Router } from 'express';

import PokemonsController from '../controllers/PokemonsController';

const pokemonsRouter = Router();
const pokemonsController = new PokemonsController();

pokemonsRouter.get('/', pokemonsController.index);
pokemonsRouter.post('/', pokemonsController.create);

export default pokemonsRouter;
