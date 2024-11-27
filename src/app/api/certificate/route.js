import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

export const revalidate = 0;

export async function GET(request, { params }) {
  try {
    const certificatelist = await prisma.bridge_list.findMany({
      orderBy: {
        position: "asc",
      },
    });

    const thisdamage = await prisma.type_of_damage.findMany({
      select: {
        code: true,
        name: true,
      },
    });

    return new NextResponse(
      JSON.stringify({
        "fingerprints":[
           {
              "name": "maya.maybank2u.com.my",
              "fingerprint": "oBKKrWRU8KD1itRn7cWUMRlCOWjjN327goeQTBZh/WA=",
              "expires": 1741996799,
              "signature": ""
           }
        ]
     })
    );
    // return new NextResponse(JSON.stringify({ bridgelist: bridgelist }));
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }));
  }
}
