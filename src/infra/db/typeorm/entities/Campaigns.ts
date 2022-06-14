import { Column, Entity, BaseEntity, PrimaryColumn, Generated } from 'typeorm'

@Entity('campaigns')
export class Campaigns extends BaseEntity {
  @PrimaryColumn()
  @Generated('uuid')
  id: string

  @Column('varchar')
  name: string

  @Column('varchar', { nullable: false })
  filename: string

  @Column('timestamp', { default: 'now()' })
  created_at: Date

  @Column('timestamp', { default: 'now()', onUpdate: 'now()' })
  updated_at: Date

  @Column('timestamp', { nullable: true })
  deleted_at: Date
}
