import { NextResponse } from 'next/server'
import prisma from '../../lib/prisma'
import CryptoJS from 'crypto-js'
var jwt = require('jsonwebtoken');

export const revalidate = 0

const SECRET_KEY = process.env.JWT_SECRET

export async function POST(request: any) {
  try {
    const { email, password } = await request.json()
    var hashedPassword = CryptoJS.MD5(password).toString()

    const createAccount = await prisma.user.findFirst({
      where: { email: email, password: hashedPassword },
    })

    

    if (createAccount) {
      const newToken = jwt.sign({ email: email }, SECRET_KEY, { expiresIn: '1h' });
      
      const createNewToken = await prisma.user.update({
        where: {
          id: createAccount.id,
        },
        data: {
          sessionToken: newToken,
        },
      })

      if (createNewToken) {
        return NextResponse.json({
          success: true,
          msg: 'Successfully login',
          email,
          token: newToken,
        })
      }
    } else {
      return NextResponse.json({
        success: false,
        error: 'Fail login',
      })
    }
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    })
  }
}
