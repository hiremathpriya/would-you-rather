
// Update with your config settings.

const DB_URL = 'postgres://uwpfaiydowndrn:7756c6d653b1d4487f450b1044066d13733c23f9603c27a1a759b43b547e5588@ec2-107-21-126-193.compute-1.amazonaws.com:5432/d6eotg573vain?ssl=true';

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true
  },
  
  production: {
    client: 'pg',
    /*
    connection: {
      host : 'ec2-107-21-126-193.compute-1.amazonaws.com',
      database: 'd6eotg573vain',
      user:     'uwpfaiydowndrn',
      password: '7756c6d653b1d4487f450b1044066d13733c23f9603c27a1a759b43b547e5588'

    },*/
    connection: DB_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    debug: true,
    ssl: true
  }


};
