import { Request, Response } from 'express';

import ListTypesService from '../services/ListTypesService';
import CreateTypeService from '../services/CreateTypeService';
import UpdateTypeService from '../services/UpdateTypeService';
import DeleteTypeService from '../services/DeleteTypeService';

class TypesController {
  async index(request: Request, response: Response): Promise<Response> {
    const listTypes = new ListTypesService();
    const types = await listTypes.execute();

    return response.json(types);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createType = new CreateTypeService();
    const type = await createType.execute({ name });

    return response.json(type);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;

    const updateType = new UpdateTypeService();
    const updatedType = await updateType.execute({
      id,
      name,
    });

    return response.json(updatedType);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteType = new DeleteTypeService();
    await deleteType.execute({
      id,
    });

    return response.send();
  }
}

export default TypesController;
