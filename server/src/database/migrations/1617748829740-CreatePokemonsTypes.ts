import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreatePokemonsTypes1617748829740
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pokemons_types',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'pokemon_id',
            type: 'uuid',
          },
          {
            name: 'type_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'PokemonTypesPokemon',
            referencedTableName: 'pokemons',
            referencedColumnNames: ['id'],
            columnNames: ['pokemon_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'PokemonTypesType',
            referencedTableName: 'types',
            referencedColumnNames: ['id'],
            columnNames: ['type_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pokemons_types');
  }
}
