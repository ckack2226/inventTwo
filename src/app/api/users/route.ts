import { findAllUsers } from "@/app/libs/findUsers";
import connection from "@/app/libs/sql";
import { messages } from "@/app/utils/message";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    try{
        await connection;
        const users = await findAllUsers();

        return NextResponse.json({ users }, { status: 200 });

    }catch(error){
        return NextResponse.json(
            {message: messages.error.default, error}, { status: 500 }
        );
    }
} 