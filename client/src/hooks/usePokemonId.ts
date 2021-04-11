import { useQuery, UseQueryResult } from 'react-query';
import { api } from 'services/api';
import { IPokemon } from 'interfaces/Pokemon';

interface IFetchPokemonProps {
  id: string;
}

interface IUsePokemonIdProps {
  initialData: IPokemon;
  id: string;
}

export async function fetchPokemon({
  id,
}: IFetchPokemonProps): Promise<IPokemon> {
  const { data } = await api.get(`/pokemons/${id}`);

  return data;
}

export function usePokemonsFeatured({
  initialData,
  id,
}: IUsePokemonIdProps): UseQueryResult<IPokemon, unknown> {
  return useQuery(['pokemon'], () => fetchPokemon({ id }), {
    staleTime: 1000 * 60 * 5, // 5 minutes
    initialData,
  });
}
