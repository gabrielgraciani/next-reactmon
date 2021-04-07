import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import Type from '../../types/models/Type';

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

  @OneToOne(() => Type)
  @JoinColumn({ name: 'main_type_id' })
  main_type: Type;

  @CreateDateColumn()
  created_at: Date;
}

export default Pokemon;
