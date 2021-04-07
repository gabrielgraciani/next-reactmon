import { Router } from 'express';

import pokemonsRouter from '../modules/pokemons/routes/pokemons.routes';
import usersRouter from '../modules/users/routes/users.routes';
import sessionsRouter from '../modules/users/routes/sessions.routes';
import typesRouter from '../modules/types/routes/types.routes';
import pokemonsTypesRouter from '../modules/pokemonsTypes/routes/pokemonsTypes.routes';

const routes = Router();

routes.use('/pokemons', pokemonsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/types', typesRouter);
routes.use('/pokemons-types', pokemonsTypesRouter);

export default routes;
