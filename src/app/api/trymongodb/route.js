
import { NextResponse } from "next/server"
import prisma from "../../lib/prisma"

export const revalidate = 0

// export async function GET(request, { params }) {
//     // const team = params.team // '1'
//     return new NextResponse(JSON.stringify(params.industryID))
// }

export async function GET(request) {

    try {
        const create = await prisma.User.createMany({
            data: [
                {
                    email: "test1@yahoo.com"
                }
            ]
        })

        if (create) {
            return new NextResponse("Successfully Populate toll_list_type_of_damage table.");
        } else {
            return new NextResponse("Fail");
        }

    } catch (error) {
        return new NextResponse(error.message);
    }
}