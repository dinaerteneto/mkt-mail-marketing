module.exports = {
  name: 'default',
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  dropSchema: true,
  logging: false,
  synchroize: true,
  migrationsRun: true,

  entities: ['src/infra/db/typeorm/entities/*.{js,ts}'],
  migrations: ['src/infra/db/typeorm/migrations/*.{js,ts}'],
  cli: {
    entitiesDir: 'src/infra/db/typeorm/entities',
    migrationsDir: 'src/infra/db/typeorm/migrations'
  }
}
