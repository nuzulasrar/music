
import { NextResponse } from "next/server"

export const revalidate = 0

export async function GET(request, { params }) {
    // const team = params.team // '1'
    return new NextResponse(JSON.stringify(params.industryID))
}

export async function POST(request) {
    try {
        const formData = await request.formData()
        const name = formData.get('name')
        return NextResponse.json({ name })
    } catch (error) {
        return new NextResponse(JSON.stringify(error.message));
    }
}