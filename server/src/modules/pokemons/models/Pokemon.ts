import { v4 as uuid } from 'uuid';

class Pokemon {
  id?: string;

  name: string;

  mainType: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Pokemon;
