import express, { response } from 'express';

const app = express();

app.get('/pokemons', (request, response) => {
  return response.json({message: 'hello'})
})

app.listen(3333, () => console.log('Server is running!'));

