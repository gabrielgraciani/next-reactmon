import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';
import Pokemon from '../models/Pokemon';

interface Request {
  id: string;
}

class DeletePokemonService {
  public async execute({ id }: Request): Promise<void> {
    const pokemonsRepository = getRepository(Pokemon);
    const pokemon = await pokemonsRepository.findOne({
      where: {
        id,
      },
    });

    if (!pokemon) {
      throw new AppError('Pokemon not found', 404);
    }

    await pokemonsRepository.delete({ id });
  }
}

export default DeletePokemonService;
