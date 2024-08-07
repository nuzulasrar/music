import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

export const revalidate = 0;

// const replaceTypeOfDamageWith1 = async (obj) => {
//     if (obj.structure && obj.structure.component && obj.structure.component.material) {
//         obj.structure.component.material.forEach(material => {
//             if (material.type_of_damage) {
//                 material.type_of_damage = material.type_of_damage.map(() => 1);
//             }
//         });
//     }
// }

export async function GET(request, { params }) {
  try {
    const bridgelist = await prisma.toll_list.findMany({
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
      JSON.stringify({ bridgelist: bridgelist, thisdamage: thisdamage })
    );
    // return new NextResponse(JSON.stringify({ bridgelist: bridgelist }));
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }));
  }
}
