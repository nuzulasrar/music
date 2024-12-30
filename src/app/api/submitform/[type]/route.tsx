// import { NextResponse } from "next/server";
// import prisma from "../../../lib/prisma";

// export const revalidate = 0;

// export async function GET(request: any, { params }: any) {
//   try {
//     const submitted_form = await prisma.submitted_form.findMany({
//       where: {
//         project_type: params.type,
//       },
//     });

//     return new NextResponse(JSON.stringify({ submitted_form: submitted_form }));
//     // return new NextResponse(JSON.stringify({ bridgelist: bridgelist }));
//   } catch (error: any) {
//     return new NextResponse(JSON.stringify({ error: error.message }));
//   }
// }
