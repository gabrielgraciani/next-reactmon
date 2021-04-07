import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';

import Type from '../../types/models/Type';
import Pokemon from '../../pokemons/models/Pokemon';
import PokemonType from '../models/PokemonType';

interface Request {
  pokemon_id: string;
  type_id: string;
}

class CreatePokemonTypeService {
  public async execute({ pokemon_id, type_id }: Request): Promise<PokemonType> {
    const pokemonsTypesRepository = getRepository(PokemonType);
    const pokemonsRepository = getRepository(Pokemon);
    const typesRepository = getRepository(Type);

    const existsType = await typesRepository.findOne(type_id);

    if (!existsType) {
      throw new AppError('Type was not found.', 404);
    }

    const existsPokemon = await pokemonsRepository.findOne(pokemon_id);

    if (!existsPokemon) {
      throw new AppError('Pokemon was not found.', 404);
    }

    const pokemonType = await pokemonsTypesRepository.create({
      pokemon_id,
      type_id,
    });

    await pokemonsTypesRepository.save(pokemonType);

    return pokemonType;
  }
}

export default CreatePokemonTypeService;
