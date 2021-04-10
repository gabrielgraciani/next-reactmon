import { useQuery, UseQueryResult } from 'react-query';
import { api } from 'services/api';
import { Pokemon } from 'interfaces/Pokemon';

export async function getPokemonsFeatured(): Promise<Pokemon[]> {
  const { data } = await api.get('/pokemons-featured');

  return data;
}

export function usePokemonsFeatured(): UseQueryResult<Pokemon[], unknown> {
  return useQuery('pokemons_featured', getPokemonsFeatured, {
    staleTime: 1000 * 60 * 1, // 1 minute
  });
}
