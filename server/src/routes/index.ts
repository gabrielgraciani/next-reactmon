import { Router } from 'express';

import pokemonsRouter from '../modules/pokemons/routes/pokemons.routes';
import usersRouter from '../modules/users/routes/users.routes';
import sessionsRouter from '../modules/users/routes/sessions.routes';
import typesRouter from '../modules/types/routes/types.routes';
import citiesRouter from '../modules/cities/routes/cities.routes';
import itemsRouter from '../modules/items/routes/items.routes';

const routes = Router();

routes.use('/pokemons', pokemonsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/types', typesRouter);
routes.use('/cities', citiesRouter);
routes.use('/items', itemsRouter);

export default routes;
