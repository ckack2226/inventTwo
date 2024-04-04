import "./card.scss";

interface ICard {
    ProductoID:number,
    Nombre:string,
    Descripcion:string,
    Precio:string,
    UnidadMedida:string,
    ProveedorID:number,
    LicenciaCertificacionID?:number;
}

export default function Card(props: ICard){
    return(
        <div className="card-container">
            <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
            <path d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z' />
            </svg>
            </span>
            <div className="info">
                <h1>{props.Nombre}</h1>
                <h3>{props.Descripcion}</h3>
            </div>
            <div className="price">
                <h4>Precio: <p>${props.Precio}</p></h4>
            </div>
        </div>
    )
}