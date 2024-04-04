export interface Producto {
  ProductoID: number;
  Nombre: string;
  Descripcion: string;
  Precio: string;
  UnidadMedida: string;
  ProveedorID: number;
  LicenciaCertificadoID: number;
}

export class ProductoModel implements Producto {
  ProductoID: number;
  Nombre: string;
  Descripcion: string;
  Precio: string;
  UnidadMedida: string;
  ProveedorID: number;
  LicenciaCertificadoID: number;

  constructor(  ProductoID: number,Nombre: string, Descripcion: string, Precio: string,UnidadMedida: string,ProveedorID: number,LicenciaCertificadoID: number) {
    this.ProductoID = ProductoID;
    this.Nombre = Nombre;
    this.Precio = Precio;
    this.Descripcion = Descripcion;
    this.UnidadMedida = UnidadMedida;
    this.ProveedorID = ProveedorID;
    this.LicenciaCertificadoID = LicenciaCertificadoID;
  }
}