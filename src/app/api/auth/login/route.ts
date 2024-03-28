import connection from "@/app/libs/sql";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
   try {
    await connection;

    const body: IUser = await request.json();
    const {user,password} = body;

    if(!user || password){
        return NextResponse.json(
            {message : messages.error.needProps},
            {status:400}
        );
    }

    const userFind = await User.findOne({email});

    if(!userFind){
        return NextResponse.json(
            {message:message.error.userNotFound},
            {status:400}
        );
    }
    const isCorrect: boolean = await bcrypt.compare(
        password,
        userFind.password
    );

    if(!isCorrect){
       return NextResponse.json(
        {message:message.error.incorrectPassword},
        {status:400}
       );
    }
    
    const {password: userPass, ...rest}=userFind._doc;

    const token = jwt.sign({data: rest}, "secreto",{
        expiresIn: 86400,
    });

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
        {message:message.error.default,error},
        {status:500}
     );
   }
}

