import { getRepository } from 'typeorm';

import Pokemon from '../models/Pokemon';

class ListPokemonsService {
  public async execute(): Promise<Pokemon[]> {
    const pokemonsRepository = getRepository(Pokemon);

    const pokemons = await pokemonsRepository.find();

    const pokemonsFormatted = pokemons.map(pokemon => {
      const parsedTypes: string = JSON.parse(pokemon.types);
      const parsedWeakness: string = JSON.parse(pokemon.weakness);

      return {
        ...pokemon,
        types: parsedTypes,
        weakness: parsedWeakness,
      };
    });

    return pokemonsFormatted;
  }
}

export default ListPokemonsService;
