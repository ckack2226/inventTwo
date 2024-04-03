import Header from "../components/header"
import SeccionProducto from "../components/seccionProducto/seccionProducto"


export default function HomePage() {
  const lista=[
    {
      ProductoID:1,
Nombre:"perro",
Descripcion:"En Los computadores PORTATILES La duración de la batería es un valor aproximado y depende del uso que se le de al equipo. (Los computadores De escritorio NO tienen batería) ",
Precio:"206",
UnidadMedida:"tablet",
ProveedorID:5,
LicenciaCertificacionID:8
    },
    {
      ProductoID:1,
Nombre:"perro",
Descripcion:"En Los computadores PORTATILES La duración de la batería es un valor aproximado y depende del uso que se le de al equipo. (Los computadores De escritorio NO tienen batería) ",
Precio:"206",
UnidadMedida:"tablet",
ProveedorID:5,
LicenciaCertificacionID:8
    },
    {
      ProductoID:1,
Nombre:"perro",
Descripcion:"En Los computadores PORTATILES La duración de la batería es un valor aproximado y depende del uso que se le de al equipo. (Los computadores De escritorio NO tienen batería) ",
Precio:"206",
UnidadMedida:"tablet",
ProveedorID:5,
LicenciaCertificacionID:8
    }
  ]
    return (
      <>
      <Header />

        <SeccionProducto lista={lista}/>
          
      </>
    )
  }