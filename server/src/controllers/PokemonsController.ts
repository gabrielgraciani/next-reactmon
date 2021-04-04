import { Request, Response } from 'express';

class PokemonsController {
  async index(request: Request, response: Response): Promise<any> {
    return response.json({ hello: 'world' });
  }
}

export default PokemonsController;
