import PokemonsRepository from '../repositories/PokemonsRepository';
import Pokemon from '../models/Pokemon';

interface Request {
  name: string;
  mainType: string;
}

class CreatePokemonService {
  constructor(private pokemonsRepository: PokemonsRepository) {}

  public execute({ name, mainType }: Request): Pokemon {
    const pokemon = this.pokemonsRepository.create({ name, mainType });

    return pokemon;
  }
}

export default CreatePokemonService;
