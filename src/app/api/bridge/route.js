
import { NextResponse } from "next/server"
import prisma from "../../lib/prisma"

// export async function GET(request, { params }) {
//     // const team = params.team // '1'
//     return new NextResponse(JSON.stringify(params.industryID))
// }

export const revalidate = 0

export async function GET(request) {

    try {

        const bridges = await prisma.bridge_list.findMany()

        if (bridges) {
            return new NextResponse(JSON.stringify(bridges));
        } else {
            return new NextResponse("Fail");
        }

    } catch (error) {
        return new NextResponse(error.message);
    }
}