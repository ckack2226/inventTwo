import Card from "../productCard/card";
import "./seccionProducto.scss";
import { Producto } from "@/app/models/Product";


export default function SeccionProducto (props: {lista: Producto[]}){
  return (
    <div className="seccion-producto-container">
      {props.lista.map((producto) => (
        <Card key={producto.ProductoID} {...producto} />
      ))}
    </div>
  );
}