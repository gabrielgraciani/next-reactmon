import { Request, Response } from 'express';

import ListFeaturedPokemonsService from '../services/ListFeaturedPokemonsService';

class PokemonsFeaturedController {
  async index(request: Request, response: Response): Promise<Response> {
    const limit = 12;

    const listPokemons = new ListFeaturedPokemonsService();
    const pokemons = await listPokemons.execute({
      limit,
    });

    return response.json(pokemons);
  }
}

export default PokemonsFeaturedController;
