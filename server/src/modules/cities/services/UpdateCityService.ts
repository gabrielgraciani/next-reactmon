import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import AppError from '../../../errors/AppError';
import uploadConfig from '../../../config/upload';
import City from '../models/City';

interface Request {
  id: string;
  name: string;
  description: string;
  imageFilename?: string;
}

class UpdateCityService {
  public async execute({
    id,
    name,
    description,
    imageFilename,
  }: Request): Promise<City> {
    const citiesRepository = getRepository(City);

    const city = await citiesRepository.findOne({
      id,
    });

    if (!city) {
      throw new AppError('City not found', 404);
    }

    if (city.image) {
      const cityImageFilePath = path.join(uploadConfig.directory, city.image);
      const cityAvatarFileExists = await fs.promises.stat(cityImageFilePath);

      if (cityAvatarFileExists) {
        await fs.promises.unlink(cityImageFilePath);
      }
    }

    city.name = name;
    city.description = description;
    city.image = imageFilename;

    await citiesRepository.save(city);

    return city;
  }
}

export default UpdateCityService;
