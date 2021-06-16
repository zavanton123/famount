import {Sequelize} from 'sequelize'

const dbName = 'postgres';
const dbUser = 'postgres';
const dbPassword = 'postgres_password';
const dbHost = 'database';
const dbPort = 5432;

export const db = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: 'postgres',
  host: dbHost,
  port: dbPort
});
