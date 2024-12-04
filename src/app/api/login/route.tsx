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

    const createAccount = await prisma.user.findFirst({
      where: { email: email, password: hashedPassword },
    })

    let newToken = ''

    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length

    for (let i = 0; i < 64; i++) {
      newToken += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      )
    }

    if (createAccount) {
      const createNewToken = await prisma.user.update({
        where: {
          email: email,
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
