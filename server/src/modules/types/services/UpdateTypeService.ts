import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';
import Type from '../models/Type';

interface Request {
  id: string;
  name: string;
}

class UpdateTypeService {
  public async execute({ id, name }: Request): Promise<Type> {
    const typesRepository = getRepository(Type);

    const type = await typesRepository.findOne({
      id,
    });

    if (!type) {
      throw new AppError('Type not found', 404);
    }

    type.name = name;

    await typesRepository.save(type);

    return type;
  }
}

export default UpdateTypeService;
