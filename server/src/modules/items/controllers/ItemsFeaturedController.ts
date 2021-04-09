import { Request, Response } from 'express';

import ListFeaturedItemsService from '../services/ListFeaturedItemsService';

class ItemsFeaturedController {
  async index(request: Request, response: Response): Promise<Response> {
    const limit = 12;

    const listItems = new ListFeaturedItemsService();
    const items = await listItems.execute({
      limit,
    });

    return response.json(items);
  }
}

export default ItemsFeaturedController;
