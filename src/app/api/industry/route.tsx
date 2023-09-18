
import { NextResponse } from "next/server"

export async function GET(request: any, { params }) {
    return new NextResponse(JSON.stringify("hahaha"))
}