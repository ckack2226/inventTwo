import connection, { findOne } from "@/app/libs/sql";
import { messages } from "@/app/utils/message";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { User, UserModel } from "@/app/models/User";
import jwt from "jsonwebtoken"
import 'dotenv/config'


export async function POST(request: NextRequest) {
   try {
    await connection;

   const body = await request.json()
   const { NombreUsuario, password, confirmPassword } = body;


   // Validar campos
   if(!NombreUsuario || !password || !confirmPassword) {
      return NextResponse.json({
         message: messages.error.needProps,
      },{ status: 400,}
      );
   }

   // validar contraseñas ingulares
   if(password !== confirmPassword){
      return NextResponse.json({
         messages: messages.error.passwordsNotMatch,
      },{ status: 400, }
      );
   }   
   
   const userFind = await findOne('SELECT * FROM usuarios WHERE NombreUsuario = ?', [NombreUsuario]);

   if (userFind) {
     return NextResponse.json({
       message: messages.error.userExist,
     }, {
       status: 200,
     });
   }

   const hashedPassword = await bcrypt.hash(password, 10)

   const newUser: User = new UserModel(
      NombreUsuario,
      hashedPassword,
   )

   const { password: userPass, ...rest} = newUser;

   await connection.query('INSERT INTO usuarios (NombreUsuario, password) VALUES (?, ?)', [NombreUsuario, hashedPassword]);

   const JWT_SECRET = process.env.JWT_SECRET;

   const token = jwt.sign({ data: rest }, JWT_SECRET ?? '', { expiresIn: 86400 });
   
   const response  = NextResponse.json({
      newUser: rest,
      message: messages.success.userCreated
   },
   {status: 200,})


   response.cookies.set('auth_cookie', token, {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 86400,
      path: "/"
   });

   return response;

   } catch (err){
      return NextResponse.json({
         message: messages.error.default, err }, { status: 500 })
   }
}

