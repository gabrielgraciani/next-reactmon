import { getRepository } from 'typeorm';

import City from '../models/City';

class ListCitiesService {
  public async execute(): Promise<City[]> {
    const citiesRepository = getRepository(City);

    const cities = await citiesRepository.find();

    return cities;
  }
}

export default ListCitiesService;
