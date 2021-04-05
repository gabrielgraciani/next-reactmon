import { EntityRepository, Repository } from 'typeorm';

import Pokemon from '../models/Pokemon';

@EntityRepository(Pokemon)
class PokemonsRepository extends Repository<Pokemon> {
  public async findByEmail(email: string): Promise<Pokemon | null> {
    const findUser = await this.findOne({
      where: { email },
    });

    return findUser || null;
  }
}

export default PokemonsRepository;
