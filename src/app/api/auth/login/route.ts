import connection from "@/app/libs/sql";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { messages } from "@/app/utils/message";
import { User } from "@/app/models/User";
import 'dotenv/config'
import { findOne } from "@/app/libs/findUsers";


export async function POST(request: NextRequest) {
   try {
    await connection;

    const body: User = await request.json();
    const {NombreUsuario,password} = body;

    if(!NombreUsuario || !password){
        return NextResponse.json(
            {message : messages.error.needProps},
            {status:400}
        );
    }

    const userFind = await findOne('SELECT * FROM usuarios WHERE NombreUsuario = ?', [NombreUsuario]);

    if(!userFind){
        return NextResponse.json(
            {message: messages.error.userNotFound},
            {status:400}
        );
    }


    const isCorrect: boolean = await bcrypt.compare(
        password,
        userFind.password
    );

    if(!isCorrect){
       return NextResponse.json(
        {message:messages.error.incorrectPassword},
        {status:400}
       );
    }
    
    const {password: userPass, ...rest}= userFind;

    const JWT_SECRET = process.env.JWT_SECRET;

    const token = jwt.sign({ data: rest }, JWT_SECRET ?? '', { expiresIn: 86400 });

    const response = NextResponse.json(
        {userLogged: rest, message: messages.success.userLogged},
        {status:200}
    );
    response.cookies.set("auth_cookie",token,{
        secure:process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge:86400,
        path:"/",
    });

    return response;

   } catch (err){
     return NextResponse.json(
        {message:messages.error.default, err},
        {status:500}
     );
   }
}

