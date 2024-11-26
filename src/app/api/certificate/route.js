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
              "name": "https://inspection-dev.prestasiperintis.com",
              "fingerprint": "xkXJq9Hjlk/or4QlIuYSQxh/xjr4QAclqQ+GwAGXBWM=",
              "expires": 1738001993,
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
