import { NextResponse } from 'next/server'
import prisma from '../../lib/prisma'
import * as CryptoJS from 'crypto-js'

export const revalidate = 0

// export async function GET(request, { params }) {
//     // const team = params.team // '1'
//     return new NextResponse(JSON.stringify(params.industryID))
// }

export async function POST(request: any) {
  try {
    const { email, password } = await request.json()
    var hashedPassword = CryptoJS.MD5(password).toString()

    let newToken = ''

    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length

    for (let i = 0; i < 64; i++) {
      newToken += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      )
    }

    const createAccount = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        sessionToken: newToken,
      },
    })

    if (createAccount) {
      return NextResponse.json({
        success: true,
        msg: 'Successfully created the new account.',
      })
    } else {
      return NextResponse.json({
        success: false,
        error: 'Fail to create a new account. Please try again.',
      })
    }
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    })
  }
}
