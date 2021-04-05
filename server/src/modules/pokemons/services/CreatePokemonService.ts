import { getRepository } from 'typeorm';
import Pokemon from '../models/Pokemon';

interface Request {
  name: string;
  mainType: string;
}

class CreatePokemonService {
  public async execute({ name, mainType }: Request): Promise<Pokemon> {
    const pokemonsRepository = getRepository(Pokemon);

    const pokemon = await pokemonsRepository.create({
      name,
      main_type: mainType,
    });

    await pokemonsRepository.save(pokemon);

    return pokemon;
  }
}

export default CreatePokemonService;
