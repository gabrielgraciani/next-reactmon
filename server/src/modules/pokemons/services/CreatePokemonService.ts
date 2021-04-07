import { getRepository } from 'typeorm';

import Pokemon from '../models/Pokemon';

interface Request {
  name: string;
  weight: string;
  height: string;
  types: string[];
  weakness: string[];
}

class CreatePokemonService {
  public async execute({
    name,
    weight,
    height,
    types,
    weakness,
  }: Request): Promise<Pokemon> {
    const pokemonsRepository = getRepository(Pokemon);

    const mainType = types[0];
    const typesString = types.join(',');
    const weaknessString = weakness.join(',');

    const pokemon = await pokemonsRepository.create({
      name,
      weight,
      height,
      main_type: mainType,
      types: typesString,
      weakness: weaknessString,
    });

    await pokemonsRepository.save(pokemon);

    return pokemon;
  }
}

export default CreatePokemonService;
