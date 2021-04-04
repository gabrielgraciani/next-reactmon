import { Request, Response } from 'express';

import CreatePokemonService from '../services/CreatePokemonService';
import PokemonsRepository from '../repositories/PokemonsRepository';

const pokemonsRepository = new PokemonsRepository();

class PokemonsController {
  async index(request: Request, response: Response): Promise<Response> {
    const pokemons = pokemonsRepository.list();
    return response.json(pokemons);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, mainType } = request.body;

    const createPokemon = new CreatePokemonService(pokemonsRepository);

    createPokemon.execute({ name, mainType });

    return response.status(201).send();
  }
}

export default PokemonsController;
