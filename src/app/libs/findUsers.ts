import { User, UserModel } from "../models/User";
import connection from "./sql";

interface UserWithoutUsuarioID extends Omit<User, "UsuarioID"> {
    UsuarioID?: number;
  }

export const findOne = <T extends UserWithoutUsuarioID>(query: string, data: any[]): Promise<T | null> => {
    return new Promise((resolve, reject) => {
      connection.query(query, data, (err, results, fields) => {
        if (err) return reject(err);
  
        if (results.length) {
          const user = {
            NombreUsuario: results[0].NombreUsuario,
            Password: results[0].Password,
            ...results[0]
          };
  
          resolve(user as T);
        }
  
        resolve(null);
      });
    });
  }
  
  export const findAllUsers = (): Promise<User[]> => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM usuarios', (err, results, fields) => {
        if (err) return reject(err);
  
        const users: User[] = results.map((result: any) => {
          return new UserModel(
            result.NombreUsuario,
            result.Password
          );
        });
        resolve(users);
      });
    });
  }