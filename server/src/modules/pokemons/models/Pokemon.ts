import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('pokemons')
class Pokemon {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  weight: string;

  @Column()
  height: string;

  @Column()
  main_type_id: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Pokemon;
