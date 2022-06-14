import { BaseEntity, Column, Entity, Generated, PrimaryColumn } from 'typeorm'

@Entity('leads')
export class Leads extends BaseEntity {
  @PrimaryColumn()
  @Generated('uuid')
  id: string

  @Column('varchar')
  name: string

  @Column('varchar', { nullable: false })
  email: string

  @Column('boolean', { default: true })
  active: boolean

  @Column('timestamp', { default: 'now()' })
  created_at: Date

  @Column('timestamp', { default: 'now()', onUpdate: 'now()' })
  updated_at: Date

  @Column('timestamp')
  deleted_at: Date
}
