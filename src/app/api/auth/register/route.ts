import connection from "@/app/libs/sql";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
   try {
    await connection;
   } catch (err){}
}

