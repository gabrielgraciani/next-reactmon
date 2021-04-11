import { InfiniteQueryObserverResult, useInfiniteQuery } from 'react-query';

import { IPokemonsResponse } from 'interfaces/responses/PokemonsResponse';

import { api } from 'services/api';

interface IFetchPokemons {
  pageParam: number;
}

export async function fetchPokemons({
  pageParam = 1,
}: IFetchPokemons): Promise<IPokemonsResponse> {
  const { data } = await api.get(`/pokemons?page=${pageParam}`);

  return data;
}

export function useInfinitePokemons(): InfiniteQueryObserverResult<IPokemonsResponse> {
  return useInfiniteQuery(
    'pokemons',
    async ({ pageParam = 1 }) => {
      const response = await fetchPokemons({ pageParam });

      return response;
    },
    {
      getNextPageParam: lastPage => {
        const totalRecords = lastPage.meta.total_records;
        const currentPage = lastPage.meta.current_page;
        const limit = 12;

        const endOffset = currentPage * limit;
        const hasNextPage = totalRecords > endOffset;

        if (!hasNextPage) {
          return undefined;
        }

        return lastPage.meta.current_page + 1;
      },
    },
  );
}
