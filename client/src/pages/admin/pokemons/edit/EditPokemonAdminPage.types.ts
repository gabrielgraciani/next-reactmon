export interface IUpdatePokemonFormData {
  name: string;
  weight: string;
  height: string;
  types: string | string[];
  weakness: string | string[];
  image: string;
}

export interface IEditPokemonAdminPageProps {
  id: string;
}
