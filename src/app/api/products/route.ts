import connection from "@/app/libs/sql";
import { Producto } from "@/app/models/Product";
import { NextApiRequest, NextApiResponse } from 'next';

export const getProducts = async (): Promise<Producto[]> => {
    const query = "SELECT * FROM Productos";
    const [rows] = await new Promise<[Producto[], any]>((resolve, reject) => {
      connection.query(query, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  
    return rows as Producto[];
  };
  
  export const getProductById = async (ProductoID: number): Promise<Producto | null> => {
    const query = "SELECT * FROM Productos WHERE ProductoID = ?";
    const [row] = await new Promise<[Producto[], any]>((resolve, reject) => {
      connection.query(query, [ProductoID], (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  
    return row.length > 0 ? row[0] as Producto : null;
  };
  
  export const createProduct = async (product: Producto): Promise<Producto> => {
    const query = 
      "INSERT INTO Productos (Nombre, Descripcion, Precio, UnidadMedida, ProveedorID, LicenciaCertificacionID) VALUES (?, ?, ?, ?, ?, ?)";
  
    const [row] = await new Promise<[any, any]>((resolve, reject) => {
      connection.query(query, [
        product.Nombre,
        product.Descripcion,
        product.Precio,
        product.UnidadMedida,
        product.ProveedorID,
        product.LicenciaCertificadoID,
      ], (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  
    return product;
};
  
  export const updateProduct = async (ProductoID: number, product: Producto): Promise<Producto | null> => {
    const query = 
      "UPDATE Productos SET Nombre = ?, Descripcion = ?, Precio = ?, UnidadMedida = ?, ProveedorID = ?, LicenciaCertificacionID = ? WHERE ProductoID = ?";
  
    const [row] = await new Promise<[any, any]>((resolve, reject) => {
      connection.query(query, [
        product.Nombre,
        product.Descripcion,
        product.Precio,
        product.UnidadMedida,
        product.ProveedorID,
        product.LicenciaCertificadoID,
        ProductoID,
      ], (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  
    if (row.affectedRows > 0) {
      return {
        ...product,
        ProductoID,
      };
    }
  
    return null;
  };
  
  export const deleteProduct = async (ProductoID: number): Promise<boolean> => {
    const query = 
      "DELETE FROM Productos WHERE ProductoID = ?";
  
    const [row] = await new Promise<[any, any]>((resolve, reject) => {
      connection.query(query, [ProductoID], (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  
    return row.affectedRows > 0;
  };


export async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        if (req.query.id) {
          const product = await getProductById(Number(req.query.id));
          return res.status(200).json(product);
        } else {
          const products = await getProducts();
          return res.status(200).json(products);
        }
      case 'POST':
        const newProduct = await createProduct(req.body);
        return res.status(201).json(newProduct);
      case 'PUT':
        const updatedProduct = await updateProduct(Number(req.query.id), req.body);
        return res.status(200).json(updatedProduct);
      case 'DELETE':
        const deleted = await deleteProduct(Number(req.query.id));
        return res.status(200).json({ deleted });
      default:
        return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}