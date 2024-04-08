export interface Producto {
  ProductoID: number;
  Nombre: string;
  Descripcion: string;
  Precio: string;
  UnidadMedida: string;
  ProveedorID: number;
  LicenciaCertificacionID: number;
}

export class ProductoModel implements Producto {
  ProductoID: number;
  Nombre: string;
  Descripcion: string;
  Precio: string;
  UnidadMedida: string;
  ProveedorID: number;
  LicenciaCertificacionID: number;

  constructor(  ProductoID: number,Nombre: string, Descripcion: string, Precio: string,UnidadMedida: string,ProveedorID: number,LicenciaCertificacionID: number) {
    this.ProductoID = ProductoID;
    this.Nombre = Nombre;
    this.Precio = Precio;
    this.Descripcion = Descripcion;
    this.UnidadMedida = UnidadMedida;
    this.ProveedorID = ProveedorID;
    this.LicenciaCertificacionID = LicenciaCertificacionID;
  }
}