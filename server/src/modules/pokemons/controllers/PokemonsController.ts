import { Request, Response } from 'express';

import ListPokemonsService from '../services/ListPokemonsService';
import CreatePokemonService from '../services/CreatePokemonService';

class PokemonsController {
  async index(request: Request, response: Response): Promise<Response> {
    const listPokemons = new ListPokemonsService();
    const pokemons = await listPokemons.execute();

    return response.json(pokemons);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, weight, height, mainTypeId, types } = request.body;

    const createPokemon = new CreatePokemonService();
    const pokemon = await createPokemon.execute({
      name,
      weight,
      height,
      mainTypeId,
      types,
    });

    return response.json(pokemon);
  }
}

export default PokemonsController;
