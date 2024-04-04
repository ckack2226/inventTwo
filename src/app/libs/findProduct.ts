import { Producto, ProductoModel } from "../models/Product";
import connection from "@/app/libs/sql";

interface ProductoWithoutProductoID extends Omit<Producto, "ProductoID"> {
  ProductoID?: number;
}

export const findOneProducto = <T extends ProductoWithoutProductoID>(query: string, data: any[]): Promise<T | null> => {
  return new Promise((resolve, reject) => {
    connection.query(query, data, (err, results) => {
      if (err) return reject(err);

      if (results.length) {
        const producto = {
          Nombre: results[0].Nombre,
          Descripcion: results[0].Descripcion, 
          Precio: results[0].Precio,
          ...results[0]
        };

        resolve(producto as T);
      }

      resolve(null);
    });
  });
}

export const findAllProductos = (): Promise<Producto[]> => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM productos', (err, results) => {
      if (err) return reject(err);

      const productos: Producto[] = results.map((result: any) => {
        return new ProductoModel(
          result.ProductoID,
          result.Nombre,
          result.Descripcion,
          result.Precio,
          result.UnidadMedida,
          result.ProveedorID,
          result.LicenciaCertificadoID
        );
      });
      resolve(productos);
    });
  });
}
