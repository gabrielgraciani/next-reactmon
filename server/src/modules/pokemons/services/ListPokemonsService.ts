import { getRepository } from 'typeorm';

import Pokemon from '../models/Pokemon';

class ListPokemonsService {
  public async execute(): Promise<Pokemon[]> {
    const pokemonsRepository = getRepository(Pokemon);

    const pokemons = await pokemonsRepository.find({
      relations: ['main_type'],
    });

    // const pokemons = await pokemonsRepository
    //   .createQueryBuilder('pokemons')
    //   .leftJoinAndSelect('pokemons.main_type', 'types')
    //   .getMany();

    return pokemons;
  }
}

export default ListPokemonsService;
