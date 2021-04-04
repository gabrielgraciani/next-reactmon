import { Router } from 'express';

import PokemonsController from './controllers/PokemonsController';

const routes = Router();

const pokemonsController = new PokemonsController();

routes.get('/pokemons', pokemonsController.index);

export default routes;
