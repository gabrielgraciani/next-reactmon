import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('pokemons_types')
class PokemonType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  pokemon_id: string;

  @Column()
  type_id: string;

  @CreateDateColumn()
  created_at: Date;
}

export default PokemonType;
