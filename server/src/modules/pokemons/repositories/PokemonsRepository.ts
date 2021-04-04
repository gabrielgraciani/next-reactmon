import Pokemon from '../models/Pokemon';

interface CreatePokemonProps {
  name: string;
  mainType: string;
}

class PokemonsRepository {
  private pokemons: Pokemon[];

  constructor() {
    this.pokemons = [];
  }

  list(): Pokemon[] {
    return this.pokemons;
  }

  create({ name, mainType }: CreatePokemonProps): Pokemon {
    const pokemon = new Pokemon();
    Object.assign(pokemon, {
      name,
      mainType,
    });

    this.pokemons.push(pokemon);

    return pokemon;
  }
}

export default PokemonsRepository;
