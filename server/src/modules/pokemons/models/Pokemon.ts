import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('pokemons')
class Pokemon {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  main_type: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Pokemon;
