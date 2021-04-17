import { useQuery, UseQueryResult } from 'react-query';
import { api } from 'services/api';
import { ICity } from 'interfaces/City';

interface IFetchCityProps {
  id: string | string[];
}

interface IUseCityIdProps {
  id: string | string[];
}

export async function fetchCity({ id }: IFetchCityProps): Promise<ICity> {
  const { data } = await api.get(`/cities/${id}`);

  return data;
}

export function useCityId({
  id,
}: IUseCityIdProps): UseQueryResult<ICity, unknown> {
  return useQuery(['city', id], () => fetchCity({ id }), {
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
