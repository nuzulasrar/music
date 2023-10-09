
import { NextResponse } from "next/server"
import prisma from "../../lib/prisma"

// export async function GET(request, { params }) {
//     // const team = params.team // '1'
//     return new NextResponse(JSON.stringify(params.industryID))
// }

export async function GET(request) {

    try {

        // const create = await prisma.type_of_damage.createMany({
        //     data: [
        //         {
        //             code: 1,
        //             name: "Corrosion of Steel",
        //         },
        //         {
        //             code: 2,
        //             name: "Fracture at Steel",
        //         },
        //         {
        //             code: 3,
        //             name: "Loose Connections Primary (Steel)",
        //         },
        //         {
        //             code: 3,
        //             name: "Loose Connections Secondary",
        //         },
        //         {
        //             code: 4,
        //             name: "Permanent Deformations (Steel & Rubber)",
        //         },
        //         {
        //             code: 5,
        //             name: "Paint Deterioration (Steel)",
        //         },
        //         {
        //             code: 6,
        //             name: "Cracks (Reinforced Concrete)",
        //         },
        //         {
        //             code: 6,
        //             name: "Cracks (Prestressed Concrete)",
        //         },
        //         {
        //             code: 7,
        //             name: "Spalling (Reinforced Concrete)",
        //         },
        //         {
        //             code: 7,
        //             name: "Spalling (Prestressed Concrete)",
        //         },
        //         {
        //             code: 8,
        //             name: "Corrosion of Reinforcement (Concrete)",
        //         },
        //         {
        //             code: 9,
        //             name: "Wear/Abrasion (Concrete)",
        //         },
        //         {
        //             code: 10,
        //             name: "Material Deterioration (Concrete)",
        //         },
        //         {
        //             code: 10,
        //             name: "Material Deterioration (Masonry)",
        //         },
        //         {
        //             code: 11,
        //             name: "Surface Defect (Concrete)",
        //         },
        //         {
        //             code: 12,
        //             name: "Delamination (Concrete)",
        //         },
        //         {
        //             code: 13,
        //             name: "Abnormal Vibration / Defelection (At Beam)",
        //         },
        //         {
        //             code: 14,
        //             name: "Water Leak (At Deck/Culvert) (Concrete)",
        //         },
        //         {
        //             code: 14,
        //             name: "Water Leak (At Expansion Joint)",
        //         },
        //         {
        //             code: 15,
        //             name: "Tilt/Settlement (At Abutment/pier)",
        //         },
        //         {
        //             code: 16,
        //             name: "Abnormal Movement",
        //         },
        //         {
        //             code: 17,
        //             name: "Scouring (At Abutment/pier)",
        //         },
        //         {
        //             code: 17,
        //             name: "Scouring (At Slope Protection)",
        //         },
        //         {
        //             code: 17,
        //             name: "Scouring (At Culvert)",
        //         },
        //         {
        //             code: 18,
        //             name: "Ponding Water (At Bearing)",
        //         },
        //         {
        //             code: 19,
        //             name: "Debris/Vegetation (At Bearing)",
        //         },
        //         {
        //             code: 20,
        //             name: "Drainage Blocked (At Drainpipe)",
        //         },
        //         {
        //             code: 21,
        //             name: "No Pipe/Inadequate Pipe Length (At Drainpipe)",
        //         },
        //         {
        //             code: 22,
        //             name: "Impact Damage (At Parapet)",
        //         },
        //         {
        //             code: 23,
        //             name: "Pot Hole (At Pavement)",
        //         },
        //         {
        //             code: 24,
        //             name: "Rutting (At Pavement)",
        //         },
        //         {
        //             code: 25,
        //             name: "Loss of Bond & Delamination (At Pavement)",
        //         },
        //         {
        //             code: 26,
        //             name: "Rippling (At Pavement)",
        //         },
        //         {
        //             code: 26,
        //             name: "Rippling (At Pavement)",
        //         },
        //         {
        //             code: 27,
        //             name: "Pavement Crack",
        //         },
        //         {
        //             code: 28,
        //             name: "Crack at Expansion Joint",
        //         },
        //         {
        //             code: 29,
        //             name: "Abnormal Spacing (At Expansion Joint)",
        //         },
        //         {
        //             code: 30,
        //             name: "Difference in Level (At Expansion Joint)",
        //         },
        //         {
        //             code: 31,
        //             name: "Abnormal Noise (At Expansion Joint)",
        //         },
        //         {
        //             code: 32,
        //             name: "Rupture (At Expansion Joint)",
        //         },
        //         {
        //             code: 33,
        //             name: "Buldging (At Bearing)",
        //         },
        //         {
        //             code: 34,
        //             name: "Abnormal Displacement (Bearing)",
        //         },
        //         {
        //             code: 35,
        //             name: "Erosion (At Slope Protection)",
        //         },
        //         {
        //             code: 35,
        //             name: "Erosion (At River Bank)",
        //         },
        //         {
        //             code: 36,
        //             name: "Material Loss/Disintegration (At Slope Protection)",
        //         },
        //         {
        //             code: 37,
        //             name: "Silting (At Culvert)",
        //         },
        //         {
        //             code: 38,
        //             name: "Inadequate Size (At Culvert)",
        //         },
        //         {
        //             code: 39,
        //             name: "Damage/Missing Panel (For Roof Tiles & Ceiling)",
        //         }
        //     ]
        // })

        // const create2 = await prisma.project.createMany({
        //     data: [
        //         {
        //             project_name: "Example Toll Plaza Project",
        //             project_type: "Toll Plaza",
        //         },
        //         {
        //             project_name: "Example Bridge Project",
        //             project_type: "Bridge",
        //         },
        //     ]
        // })

        const create3 = await prisma.bridge_list2.create({
            data: {
                structure: 'elsa@prisma.io',
            },
        })



        // if (create && create2 && create3) {
        if (create3) {
            return new NextResponse("Successfully Populate bridge_list2 table.");
        } else {
            return new NextResponse("Fail");
        }

    } catch (error) {
        return new NextResponse(error.message);
    }
}