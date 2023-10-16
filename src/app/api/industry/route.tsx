
import { NextResponse } from "next/server"

export const revalidate = 0

export async function GET(request: any, { params }: any) {
    console.log(params);

    return new NextResponse(JSON.stringify("hahaha"))
}