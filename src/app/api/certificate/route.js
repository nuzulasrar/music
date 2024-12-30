// import { NextResponse } from "next/server";
// import prisma from "../../lib/prisma";

// export const revalidate = 0;

// export async function GET(request, { params }) {
//   try {
//     const certificatelist = await prisma.bridge_list.findMany({
//       orderBy: {
//         position: "asc",
//       },
//     });

//     const thisdamage = await prisma.type_of_damage.findMany({
//       select: {
//         code: true,
//         name: true,
//       },
//     });

//     return new NextResponse(
//       JSON.stringify({
//         "fingerprints":[
//            {
//               "name": "inspection-dev.prestasiperintis.com",
//               "fingerprint": "krZ6Id7ELBg3MMnnmmVMUfoNgeL/6RXORXq1H+30Jyg=",
//               "expires": 1737973193,
//               "signature": ""
//            }
//         ]
//      })
//     );
//     // return new NextResponse(JSON.stringify({ bridgelist: bridgelist }));
//   } catch (error) {
//     return new NextResponse(JSON.stringify({ error: error.message }));
//   }
// }
