import { getRepository } from 'typeorm';

import Pokemon from '../models/Pokemon';

interface PokemonFormatted {
  id: string;
  name: string;
  weight: string;
  height: string;
  main_type: string;
  types: string[];
  weakness: string[];
  created_at: Date;
}

class ListPokemonsService {
  public async execute(): Promise<PokemonFormatted[]> {
    const pokemonsRepository = getRepository(Pokemon);

    const pokemons = await pokemonsRepository.find();

    const pokemonsFormatted = pokemons.map(pokemon => {
      return {
        ...pokemon,
        types: pokemon.types.split(','),
        weakness: pokemon.weakness.split(','),
      };
    });

    return pokemonsFormatted;
  }
}

export default ListPokemonsService;
