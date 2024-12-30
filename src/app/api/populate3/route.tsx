import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";
import CryptoJS from 'crypto-js'
var jwt = require('jsonwebtoken');

export const revalidate = 0

const SECRET_KEY = process.env.JWT_SECRET

export async function GET(request: any) {
  try {

    var hashedPassword = CryptoJS.MD5('abc123').toString()

    //START create a new session token
    const token = jwt.sign({ username: 'nuzulasrar@gmail.com' }, SECRET_KEY, { expiresIn: '1h' });
    //ENDcreate a new session token

    // const createUser = await prisma.user.create({
    //   data: {
    //     email: 'nuzulasrar@gmail.com',
    //     name: 'Admin Nuzul',
    //     password: hashedPassword,
    //     sessionToken: token,
    //     role: 'Admin'
    //   }
    // });
    const createUser = await prisma.user.create({
      data: {
        email: 'nuzulasrar2@gmail.com',
        name: 'Ahmad',
        password: hashedPassword,
        sessionToken: token,
        role: 'Normal'
      }
    });

    // if (create && create2 && create3) {
    if (createUser) {
      return NextResponse.json({msg: 'success', user: createUser});
    } else {
      return new NextResponse("Fail");
    }
  } catch (error: any) {
    return new NextResponse(error.message);
  }
}
