import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';
import Type from '../models/Type';

interface Request {
  id: string;
}

class DeleteTypeService {
  public async execute({ id }: Request): Promise<void> {
    const typesRepository = getRepository(Type);
    const type = await typesRepository.findOne({
      where: {
        id,
      },
    });

    if (!type) {
      throw new AppError('Type not found', 404);
    }

    await typesRepository.delete({ id });
  }
}

export default DeleteTypeService;
