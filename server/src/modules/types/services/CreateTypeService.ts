import { getCustomRepository } from 'typeorm';

import TypesRepository from '../repositories/TypesRepository';
import Type from '../models/Type';
import AppError from '../../../errors/AppError';

interface Request {
  name: string;
}

class CreateTypeService {
  public async execute({ name }: Request): Promise<Type> {
    const typesRepository = getCustomRepository(TypesRepository);

    const checkTypeExists = await typesRepository.findByName(name);

    if (checkTypeExists) {
      throw new AppError('This type is already inserted');
    }

    const type = await typesRepository.create({
      name,
    });

    await typesRepository.save(type);

    return type;
  }
}

export default CreateTypeService;
