import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreatePokemons1617747725993 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pokemons',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'weight',
            type: 'varchar',
          },
          {
            name: 'height',
            type: 'varchar',
          },
          {
            name: 'main_type',
            type: 'varchar',
          },
          {
            name: 'types',
            type: 'varchar',
          },
          {
            name: 'weakness',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pokemons');
  }
}
