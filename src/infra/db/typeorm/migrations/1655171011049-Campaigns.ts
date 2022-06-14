import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class Campaigns1655171011049 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'campaigns',
        columns: [
          { name: 'id', type: 'varchar', isPrimary: true, isNullable: false },
          { name: 'name', type: 'varchar', isNullable: false },
          { name: 'filename', type: 'varchar', isNullable: false },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
          { name: 'updated_at', type: 'timestamp', default: 'now()', onUpdate: 'now()' },
          { name: 'deleted_at', type: 'timestamp', isNullable: true }
        ]
      }),
      true
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('campaigns')
  }
}
