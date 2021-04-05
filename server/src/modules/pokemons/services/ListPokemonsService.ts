import { getRepository } from 'typeorm';

import Pokemon from '../models/Pokemon';

class ListPokemonsService {
  public async execute(): Promise<Pokemon[]> {
    const pokemonsRepository = getRepository(Pokemon);

    const pokemons = await pokemonsRepository.find();

    return pokemons;
  }
}

export default ListPokemonsService;
