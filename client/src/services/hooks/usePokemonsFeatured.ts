import { useQuery, UseQueryResult } from 'react-query';
import { api } from 'services/api';
import { Pokemon } from 'interfaces/Pokemon';

interface UsePokemonsFeaturedProps {
  initialData: Pokemon[];
}

export async function getPokemonsFeatured(): Promise<Pokemon[]> {
  const { data } = await api.get('/pokemons-featured');

  return data;
}

export function usePokemonsFeatured({
  initialData,
}: UsePokemonsFeaturedProps): UseQueryResult<Pokemon[], unknown> {
  return useQuery('pokemons_featured', getPokemonsFeatured, {
    staleTime: 1000 * 60 * 5, // 5 minutes
    initialData,
  });
}
