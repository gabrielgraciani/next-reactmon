import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';

import Type from '../../types/models/Type';
import Pokemon from '../models/Pokemon';

interface Request {
  name: string;
  weight: string;
  height: string;
  mainTypeId: string;
}

class CreatePokemonService {
  public async execute({
    name,
    weight,
    height,
    mainTypeId,
  }: Request): Promise<Pokemon | undefined> {
    const pokemonsRepository = getRepository(Pokemon);
    const typesRepository = getRepository(Type);

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

    return pokemon;
  }
}

export default CreatePokemonService;
