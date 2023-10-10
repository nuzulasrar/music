
import { NextResponse } from "next/server"
import prisma from "../../../lib/prisma"

export const revalidate = 0

// export async function GET(request, { params }) {
//     // const team = params.team // '1'
//     return new NextResponse(JSON.stringify(params.industryID))
// }

export async function GET(request) {
    try {
        const create = await prisma.project.create({
            data: {
                name: "Plaza Toll",
                age: 10
            }
        })

        if (create) {
            return new NextResponse("Success");
        } else {
            return new NextResponse("Fail");
        }

    } catch (error) {
        return new NextResponse(error.message);
    }
}