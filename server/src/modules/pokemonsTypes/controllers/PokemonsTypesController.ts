import { Request, Response } from 'express';

import ListPokemonsTypesService from '../services/ListPokemonsTypesService';
import CreatePokemonTypeService from '../services/CreatePokemonTypeService';

class PokemonsTypesController {
  async index(request: Request, response: Response): Promise<Response> {
    const listPokemonsTypes = new ListPokemonsTypesService();
    const pokemonsTypes = await listPokemonsTypes.execute();

    return response.json(pokemonsTypes);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { pokemon_id, type_id } = request.body;

    const createPokemonType = new CreatePokemonTypeService();
    const pokemonType = await createPokemonType.execute({
      pokemon_id,
      type_id,
    });

    return response.json(pokemonType);
  }
}

export default PokemonsTypesController;
