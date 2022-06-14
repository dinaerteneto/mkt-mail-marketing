import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class SentEmails1655171151092 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sent_emails',
        columns: [
          { name: 'id', type: 'varchar', isPrimary: true, isNullable: false },
          { name: 'lead_id', type: 'varchar', isNullable: false },
          { name: 'campaign_id', type: 'varchar', isNullable: false },
          { name: 'filename', type: 'varchar', isNullable: false },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
          { name: 'updated_at', type: 'timestamp', default: 'now()', onUpdate: 'now()' },
          { name: 'deleted_at', type: 'timestamp', isNullable: true }
        ]
      }),
      true
    )

    await queryRunner.createForeignKey(
      'sent_emails',
      new TableForeignKey({
        columnNames: ['lead_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'leads',
        onDelete: 'CASCADE'
      })
    )

    await queryRunner.createForeignKey(
      'sent_emails',
      new TableForeignKey({
        columnNames: ['campaign_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'campaigns',
        onDelete: 'CASCADE'
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('sent_emails')

    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.includes('lead_id')
    )
    await queryRunner.dropForeignKey('sent_emails', foreignKey)

    const foreignKey2 = table.foreignKeys.find(
      (fk) => fk.columnNames.includes('campaign_id')
    )
    await queryRunner.dropForeignKey('sent_emails', foreignKey2)

    await queryRunner.dropTable('sent_emails')
  }
}
