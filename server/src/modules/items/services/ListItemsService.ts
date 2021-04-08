import { getRepository } from 'typeorm';

import Item from '../models/Item';

class ListItemsService {
  public async execute(): Promise<Item[]> {
    const itemsRepository = getRepository(Item);

    const items = await itemsRepository.find();

    return items;
  }
}

export default ListItemsService;
