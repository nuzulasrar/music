
import { NextResponse } from "next/server"

import prisma from "../../lib/prisma"
import { PrismaClient } from "@prisma/client"


export async function GET(request: any, { params }: any) {
    // console.log(params);

    // return new NextResponse(JSON.stringify("hahaha"))
    try {
        const prisma2 = new PrismaClient()
    } catch (error: any) {
        alert(error.message)
    }





}