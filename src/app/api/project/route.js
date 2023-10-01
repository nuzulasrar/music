
import { NextResponse } from "next/server"
import prisma from "../../lib/prisma"

// export async function GET(request, { params }) {
//     // const team = params.team // '1'
//     return new NextResponse(JSON.stringify(params.industryID))
// }

export async function GET(request) {

    try {

        const projects = await prisma.project.findMany()

        if (projects) {
            return new NextResponse(JSON.stringify(projects));
        } else {
            return new NextResponse("Fail");
        }

    } catch (error) {
        return new NextResponse(error.message);
    }
}