import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class Leads1655170646530 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'leads',
        columns: [
          { name: 'id', type: 'varchar', isPrimary: true, isNullable: false },
          { name: 'name', type: 'varchar' },
          { name: 'email', type: 'varchar', isNullable: false },
          { name: 'active', type: 'boolean', default: true },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
          { name: 'updated_at', type: 'timestamp', default: 'now()', onUpdate: 'now()' },
          { name: 'deleted_at', type: 'timestamp', default: null, isNullable: true }
        ]
      }),
      true
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('leads')
  }
}
