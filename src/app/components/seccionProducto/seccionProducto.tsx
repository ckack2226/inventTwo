import Card from "../productCard/card";
import "./seccionProducto.scss";

export default function SeccionProducto (props: {lista:any[]}){
return(
<div className="seccion-producto-container">
  {props.lista.map(producto=>( 
    <Card {...producto}/>
  ))}
</div>
);
}