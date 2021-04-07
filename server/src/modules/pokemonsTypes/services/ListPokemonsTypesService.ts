import { getRepository } from 'typeorm';

import PokemonType from '../models/PokemonType';

class ListPokemonsTypesService {
  public async execute(): Promise<PokemonType[]> {
    const pokemonsTypesRepository = getRepository(PokemonType);

    const pokemonsTypes = await pokemonsTypesRepository.find();

    return pokemonsTypes;
  }
}

export default ListPokemonsTypesService;
