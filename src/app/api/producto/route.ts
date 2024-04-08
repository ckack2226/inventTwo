import { NextRequest, NextResponse } from "next/server";
import connection from "@/app/libs/sql"; 
import { findAllProductos } from "@/app/libs/findProduct"; 
import { messages } from "@/app/utils/message";

export async function GET(request: NextRequest) {
    try {
        await connection; 

        const productos = await findAllProductos();

        if (productos.length === 0) {
            return NextResponse.json(
                { message: "No se encontraron productos." },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { productos },
            { status: 200 } 
        );

    } catch (error) {
        console.error("Error al recuperar los productos:", error);
        return NextResponse.json(
            { message: "Error al procesar la solicitud.", error },
            { status: 500 } 
        );
    }
}


export async function POST(request: NextRequest) {
    try {
      await connection;

      const body = await request.json()
      const {nombre, descripcion, precio, unidadmedida, proveedorid, licenciacertificacionid} = body;

      if(!nombre || !descripcion || !precio || !unidadmedida || !proveedorid || !licenciacertificacionid){
        return NextResponse.json({
            message: messages.error.needProps,
        }, {status: 400,})
      }

    await connection.query('INSERT INTO productos (nombre, descripcion, precio, unidadmedida, proveedorid, licenciacertificacionid) VALUES (?, ?, ? ,? ,?, ?)', [nombre, descripcion, precio, unidadmedida, proveedorid, licenciacertificacionid]);

    const response = NextResponse.json({
        message: messages.success.productCreated
    })
    return response;
    } catch (err){
        return NextResponse.json({
            message: messages.error.default, err
        })
    }
  }