import { Request, Response } from 'express';

import ListItemsService from '../services/ListItemsService';
import CreateItemService from '../services/CreateItemService';
import UpdateItemService from '../services/UpdateItemService';
import DeleteItemService from '../services/DeleteItemService';

class CitiesController {
  async index(request: Request, response: Response): Promise<Response> {
    const listCities = new ListItemsService();
    const cities = await listCities.execute();

    return response.json(cities);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, description, function: itemFunction } = request.body;

    const filename = request.file !== undefined ? request.file.filename : null;

    const createItem = new CreateItemService();
    const item = await createItem.execute({
      name,
      description,
      itemFunction,
      imageFilename: filename,
    });

    return response.json(item);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description, function: itemFunction } = request.body;

    const filename = request.file !== undefined ? request.file.filename : null;

    const updateItem = new UpdateItemService();

    const item = await updateItem.execute({
      id,
      name,
      description,
      itemFunction,
      imageFilename: filename,
    });

    return response.json(item);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteItem = new DeleteItemService();
    await deleteItem.execute({
      id,
    });

    return response.send();
  }
}

export default CitiesController;
