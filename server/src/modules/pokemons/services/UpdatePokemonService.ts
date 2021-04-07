import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';
import Pokemon from '../models/Pokemon';

interface Request {
  id: string;
  name: string;
  weight: string;
  height: string;
  types: string[];
  weakness: string[];
}

class UpdatePokemonService {
  public async execute({
    id,
    name,
    weight,
    height,
    types,
    weakness,
  }: Request): Promise<Pokemon> {
    const pokemonsRepository = getRepository(Pokemon);

    const pokemon = await pokemonsRepository.findOne({
      id,
    });

    if (!pokemon) {
      throw new AppError('Pokemon not found', 404);
    }

    const mainType = types[0];
    const typesString = types.join(',');
    const weaknessString = weakness.join(',');

    pokemon.name = name;
    pokemon.weight = weight;
    pokemon.height = height;
    pokemon.main_type = mainType;
    pokemon.types = typesString;
    pokemon.weakness = weaknessString;

    await pokemonsRepository.save(pokemon);

    return pokemon;
  }
}

export default UpdatePokemonService;
