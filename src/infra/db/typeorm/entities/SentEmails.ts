import { Column, BaseEntity, Entity, PrimaryColumn, Generated, OneToMany } from 'typeorm'
import { Leads } from './Leads'
import { Campaigns } from './Campaigns'

@Entity('sent_emails')
export class SentEmails extends BaseEntity {
  @PrimaryColumn()
  @Generated('uuid')
  id: string

  @Column('uuid')
  lead_id: string

  @Column('uuid')
  campaign_id: string

  @Column('varchar')
  filename: string

  @Column('timestamp', { default: 'now()' })
  created_at: Date

  @Column('timestamp', { default: 'now()', onUpdate: 'now()' })
  updated_at: Date

  @Column('timestamp', { nullable: true })
  deleted_at: Date

  @OneToMany(() => Leads, (lead) => lead.email)
  leads: Leads[]

  @OneToMany(() => Campaigns, (campaign) => campaign.name)
  campaigns: Campaigns[]
}
