import { NextRequest, NextResponse } from "next/server";
import connection from "@/app/libs/sql"; 
import { findAllProductos } from "@/app/libs/findProduct"; 

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
