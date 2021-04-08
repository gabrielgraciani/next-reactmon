import { Request, Response } from 'express';

import ListItemsService from '../services/ListItemsService';
import CreateItemService from '../services/CreateItemService';
import UpdateItemService from '../services/UpdateItemService';
import DeleteItemService from '../services/DeleteItemService';

interface ItemsListRequest extends Request {
  query: {
    page: string;
  };
}

class CitiesController {
  async index(
    request: ItemsListRequest,
    response: Response,
  ): Promise<Response> {
    const { page = '1' } = request.query;
    const limit = 12;

    const pageInt = parseInt(page, 10);

    const startOffset = (pageInt - 1) * limit;
    const endOffset = pageInt * limit;

    const listItems = new ListItemsService();

    const items = await listItems.execute({
      offset: startOffset,
      limit,
    });

    const hasNextPage = items.total_records > endOffset;

    return response.json({
      data: items.data,
      meta: {
        total_records: items.total_records,
        has_next_page: hasNextPage,
      },
    });
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
