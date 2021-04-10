import { useQuery, UseQueryResult } from 'react-query';
import { api } from 'services/api';
import { IItem } from 'interfaces/Item';

interface IUseItemsFeaturedProps {
  initialData: IItem[];
}

export async function getItemsFeatured(): Promise<IItem[]> {
  const { data } = await api.get('/items-featured');

  return data;
}

export function useItemsFeatured({
  initialData,
}: IUseItemsFeaturedProps): UseQueryResult<IItem[], unknown> {
  return useQuery('items_featured', getItemsFeatured, {
    staleTime: 1000 * 60 * 5, // 5 minutes
    initialData,
  });
}
