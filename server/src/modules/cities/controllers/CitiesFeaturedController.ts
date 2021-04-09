import { Request, Response } from 'express';

import ListFeaturedCitiesService from '../services/ListFeaturedCitiesService';

class CitiesFeaturedController {
  async index(request: Request, response: Response): Promise<Response> {
    const limit = 12;

    const listCities = new ListFeaturedCitiesService();
    const cities = await listCities.execute({
      limit,
    });

    return response.json(cities);
  }
}

export default CitiesFeaturedController;
