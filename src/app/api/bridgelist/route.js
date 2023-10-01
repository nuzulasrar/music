
import { NextResponse } from "next/server"
import prisma from "../../lib/prisma"

const replaceTypeOfDamageWith1 = async (obj) => {
    if (obj.structure && obj.structure.component && obj.structure.component.material) {
        obj.structure.component.material.forEach(material => {
            if (material.type_of_damage) {
                material.type_of_damage = material.type_of_damage.map(() => 1);
            }
        });
    }
}

export async function GET(request, { params }) {
    // const team = params.team // '1'

    const bridgelist = await prisma.bridge_list.findMany({
        // select: {
        //     createdAt: true
        // }
    })

    var damage = []

    // bridgelist.forEach(replaceTypeOfDamageWith1);

    bridgelist.forEach(item => {
        // damage.push(item.structure.component.material[0].type_of_damage[0])
        item.structure.component.material.forEach(item2 => {

            // item2.haha = "haha"

            // damage = []

            item2.type_of_damage.forEach(async item3 => {
                const thisdamage = await prisma.type_of_damage.findFirst({
                    where: {
                        id: item3
                    },
                    select: {
                        name: true,
                        code: true
                    },
                    orderBy: {
                        code: 'asc',
                    }
                })

                // console.log(thisdamage.name);

                thisdamage ? damage.push({ code: thisdamage.code, name: thisdamage.name }) : null
            });

            item2.damagenames = damage
        });
    });

    // thisdamage = await prisma.type_of_damage.findUnique({
    //     where: {
    //         id: 1
    //     }
    // })\

    var thisdamage = await prisma.type_of_damage.findMany({
        select: {
            code: true,
            name: true
        }
    })

    // return new NextResponse(typeof bridgelist)
    // return new NextResponse(JSON.stringify(damage))
    // return new NextResponse(JSON.stringify(thisdamage))
    return new NextResponse(JSON.stringify({ bridgelist: bridgelist, thisdamage: thisdamage }))
}
