import { Pokemon } from 'interfaces/Pokemon';

export interface CardProps {
  pokemon: Pokemon;
}

export interface CardStyledProps {
  type: string;
}

export interface CardSpecificationItemProps {
  title: string;
  value: string;
}
