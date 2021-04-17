import { useQuery, UseQueryResult } from 'react-query';

import { api } from 'services/api';
import { IItem } from 'interfaces/Item';

interface IPaginatedItemsResponse {
  totalCount: number;
  items: IItem[];
}

interface IFetchItemsProps {
  page: number;
}

export async function fetchItems({
  page = 1,
}: IFetchItemsProps): Promise<IPaginatedItemsResponse> {
  const { data } = await api.get(`/items?page=${page}`);

  return { items: data.data, totalCount: data.meta.total_records };
}

export function usePaginatedItems({
  page,
}: IFetchItemsProps): UseQueryResult<IPaginatedItemsResponse, unknown> {
  return useQuery(['items_paginated', page], () => fetchItems({ page }), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}
