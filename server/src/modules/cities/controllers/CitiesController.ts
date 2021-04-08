import { Request, Response } from 'express';

import ListCitiesService from '../services/ListCitiesService';
import CreateCityService from '../services/CreateCityService';
import UpdateCityService from '../services/UpdateCityService';
import DeleteCityService from '../services/DeleteCityService';

class CitiesController {
  async index(request: Request, response: Response): Promise<Response> {
    const listCities = new ListCitiesService();
    const cities = await listCities.execute();

    return response.json(cities);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const filename = request.file !== undefined ? request.file.filename : null;

    const createCity = new CreateCityService();
    const city = await createCity.execute({
      name,
      description,
      imageFilename: filename,
    });

    return response.json(city);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description } = request.body;

    const filename = request.file !== undefined ? request.file.filename : null;

    const updateCity = new UpdateCityService();

    const city = await updateCity.execute({
      id,
      name,
      description,
      imageFilename: filename,
    });

    return response.json(city);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCity = new DeleteCityService();
    await deleteCity.execute({
      id,
    });

    return response.send();
  }
}

export default CitiesController;
