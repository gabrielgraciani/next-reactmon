import { Request, Response } from 'express';

import ListPokemonsService from '../services/ListPokemonsService';
import CreatePokemonService from '../services/CreatePokemonService';
import UpdatePokemonService from '../services/UpdatePokemonService';
import DeletePokemonService from '../services/DeletePokemonService';

class PokemonsController {
  async index(request: Request, response: Response): Promise<Response> {
    const listPokemons = new ListPokemonsService();
    const pokemons = await listPokemons.execute();

    return response.json(pokemons);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, weight, height, types, weakness } = request.body;

    const filename = request.file !== undefined ? request.file.filename : null;

    const createPokemon = new CreatePokemonService();
    const pokemon = await createPokemon.execute({
      name,
      weight,
      height,
      types,
      weakness,
      imageFilename: filename,
    });

    return response.json(pokemon);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, weight, height, types, weakness } = request.body;

    const filename = request.file !== undefined ? request.file.filename : null;

    const updatePokemon = new UpdatePokemonService();

    const pokemon = await updatePokemon.execute({
      id,
      name,
      weight,
      height,
      types,
      weakness,
      imageFilename: filename,
    });

    return response.json(pokemon);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deletePokemon = new DeletePokemonService();
    await deletePokemon.execute({
      id,
    });

    return response.send();
  }
}

export default PokemonsController;
