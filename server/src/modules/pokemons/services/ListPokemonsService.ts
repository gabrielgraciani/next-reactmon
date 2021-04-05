import { getRepository } from 'typeorm';

import Pokemon from '../models/Pokemon';

class ListPokemonsService {
  public async execute(): Promise<Pokemon[]> {
    const usersRepository = getRepository(Pokemon);

    const pokemons = await usersRepository.find();

    return pokemons;
  }
}

export default ListPokemonsService;
