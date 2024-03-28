import mysql from 'mysql';
import { ConnectionConfig } from 'mysql';
import dotenv from 'dotenv';
import { User, UserModel } from '../models/User';

dotenv.config();

const config: ConnectionConfig = {
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD
};


const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('¡Conectado a la base de datos!');
});

export default connection;


export const findOne = <T>(query: string, data: any[]): Promise<T | null> => {
  return new Promise((resolve, reject) => {
    connection.query(query, data, (err, results, fields) => {
      if (err) return reject(err);

      if (results.length) {
        resolve(new UserModel( results[0].NombreUsuario, results[0].Password) as T);
      }
      resolve(null);
    });
  });
}