import { Router } from 'express';

import pokemonsRouter from '../modules/pokemons/routes/pokemons.routes';

const routes = Router();

routes.use('/pokemons', pokemonsRouter);

export default routes;
