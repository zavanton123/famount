import {Sequelize} from 'sequelize'

const dbName = (process.env.DBNAME as string);
const dbUser = (process.env.DBUSER as string);
const dbPassword = (process.env.DBPASSWORD as string);
const dbHost = (process.env.DBHOST as string);
const dbPort = parseInt(process.env.DBPORT as string);

export const db = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: 'postgres',
  host: dbHost,
  port: dbPort
});
