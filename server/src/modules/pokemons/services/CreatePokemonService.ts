import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';

import Type from '../../types/models/Type';
import PokemonType from '../../pokemonsTypes/models/PokemonType';
import Pokemon from '../models/Pokemon';

interface Request {
  name: string;
  weight: string;
  height: string;
  mainTypeId: string;
  types: string[];
}

class CreatePokemonService {
  public async execute({
    name,
    weight,
    height,
    mainTypeId,
    types,
  }: Request): Promise<Pokemon | undefined> {
    const pokemonsRepository = getRepository(Pokemon);
    const typesRepository = getRepository(Type);
    const pokemonsTypesRepository = getRepository(PokemonType);

    const existsType = await typesRepository.findOne(mainTypeId);

    if (!existsType) {
      throw new AppError('Type was not found.', 404);
    }

    const pokemon = await pokemonsRepository.create({
      name,
      weight,
      height,
      main_type_id: mainTypeId,
    });

    await pokemonsRepository.save(pokemon);

    types.forEach(type => {
      const pokemonType = pokemonsTypesRepository.create({
        pokemon_id: pokemon.id,
        type_id: type,
      });

      pokemonsTypesRepository.save(pokemonType);
    });

    return pokemon;
  }
}

export default CreatePokemonService;
