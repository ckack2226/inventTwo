import connection from "@/app/libs/sql";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
   try {
    await connection;

   return NextResponse.json({
      message: "Melo caramelo"
   })

   } catch (err){}
}

