import { EntityRepository, Repository } from 'typeorm';

import Type from '../models/Type';

@EntityRepository(Type)
class TypesRepository extends Repository<Type> {
  public async findByName(name: string): Promise<Type | null> {
    const findType = await this.findOne({
      where: { name },
    });

    return findType || null;
  }
}

export default TypesRepository;
