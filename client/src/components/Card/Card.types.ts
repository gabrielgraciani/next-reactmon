import { Pokemon } from 'interfaces/Pokemon';

export interface ICardProps {
  pokemon: Pokemon;
}

export interface ICardStyledProps {
  type: string;
}

export interface ICardSpecificationItemProps {
  title: string;
  value: string;
}
