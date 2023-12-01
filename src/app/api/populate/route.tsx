import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

import { Prisma } from "@prisma/client";

import {
  damage1,
  damage2,
  damage3,
  damage4,
  damage5,
  damage6,
  damage7,
  damage8,
  damage9,
  damage10,
  damage11,
  damage12,
  damage13,
  damage14,
  damage15,
  damage16,
  damage17,
  damage18,
  damage19,
  damage20,
  damage21,
  damage22,
  damage23,
  damage24,
  damage25,
  damage26,
  damage27,
  damage28,
  damage29,
  damage30,
  damage31,
  damage32,
  damage33,
  damage34,
  damage35,
  damage36,
  damage37,
  damage38,
  damage39,
  damage40,
} from "../../../constants/components";
import {
  typeOfDamage1,
  typeOfDamage2,
  typeOfDamage3,
  typeOfDamage4,
  typeOfDamage5,
  typeOfDamage6,
  typeOfDamage7,
  typeOfDamage8,
  typeOfDamage9,
  typeOfDamage10,
  typeOfDamage11,
  typeOfDamage12,
  typeOfDamage13,
  typeOfDamage14,
  typeOfDamage15,
  typeOfDamage16,
  typeOfDamage17,
  typeOfDamage18,
  typeOfDamage19,
  typeOfDamage20,
  typeOfDamage21,
  typeOfDamage22,
  typeOfDamage23,
  typeOfDamage24,
  typeOfDamage25,
  typeOfDamage26,
  typeOfDamage27,
  typeOfDamage28,
  typeOfDamage29,
  typeOfDamage30,
  typeOfDamage31,
  typeOfDamage32,
  typeOfDamage33,
  typeOfDamage34,
  typeOfDamage35,
  typeOfDamage36,
  typeOfDamage37,
  typeOfDamage38,
  typeOfDamage39,
} from "../../../constants/typeofdamages";

export const revalidate = 0;

// export async function GET(request, { params }) {
//     // const team = params.team // '1'
//     return new NextResponse(JSON.stringify(params.industryID))
// }

export async function GET(request: any) {
  try {
    // const createTypeOfDamage = await prisma.type_of_damage.createMany({
    //   data: [
    //     {
    //       code: 1,
    //       name: "Corrosion of Steel",
    //     },
    //     {
    //       code: 2,
    //       name: "Fracture at Steel",
    //     },
    //     {
    //       code: 3,
    //       name: "Loose Connections Primary (Steel)",
    //     },
    //     {
    //       code: 3,
    //       name: "Loose Connections Secondary",
    //     },
    //     {
    //       code: 4,
    //       name: "Permanent Deformations (Steel & Rubber)",
    //     },
    //     {
    //       code: 5,
    //       name: "Paint Deterioration (Steel)",
    //     },
    //     {
    //       code: 6,
    //       name: "Cracks (Reinforced Concrete)",
    //     },
    //     {
    //       code: 6,
    //       name: "Cracks (Prestressed Concrete)",
    //     },
    //     {
    //       code: 7,
    //       name: "Spalling (Reinforced Concrete)",
    //     },
    //     {
    //       code: 7,
    //       name: "Spalling (Prestressed Concrete)",
    //     },
    //     {
    //       code: 8,
    //       name: "Corrosion of Reinforcement (Concrete)",
    //     },
    //     {
    //       code: 9,
    //       name: "Wear/Abrasion (Concrete)",
    //     },
    //     {
    //       code: 10,
    //       name: "Material Deterioration (Concrete)",
    //     },
    //     {
    //       code: 10,
    //       name: "Material Deterioration (Masonry)",
    //     },
    //     {
    //       code: 11,
    //       name: "Surface Defect (Concrete)",
    //     },
    //     {
    //       code: 12,
    //       name: "Delamination (Concrete)",
    //     },
    //     {
    //       code: 13,
    //       name: "Abnormal Vibration / Defelection (At Beam)",
    //     },
    //     {
    //       code: 14,
    //       name: "Water Leak (At Deck/Culvert) (Concrete)",
    //     },
    //     {
    //       code: 14,
    //       name: "Water Leak (At Expansion Joint)",
    //     },
    //     {
    //       code: 15,
    //       name: "Tilt/Settlement (At Abutment/pier)",
    //     },
    //     {
    //       code: 16,
    //       name: "Abnormal Movement",
    //     },
    //     {
    //       code: 17,
    //       name: "Scouring (At Abutment/pier)",
    //     },
    //     {
    //       code: 17,
    //       name: "Scouring (At Slope Protection)",
    //     },
    //     {
    //       code: 17,
    //       name: "Scouring (At Culvert)",
    //     },
    //     {
    //       code: 18,
    //       name: "Ponding Water (At Bearing)",
    //     },
    //     {
    //       code: 19,
    //       name: "Debris/Vegetation (At Bearing)",
    //     },
    //     {
    //       code: 20,
    //       name: "Drainage Blocked (At Drainpipe)",
    //     },
    //     {
    //       code: 21,
    //       name: "No Pipe/Inadequate Pipe Length (At Drainpipe)",
    //     },
    //     {
    //       code: 22,
    //       name: "Impact Damage (At Parapet)",
    //     },
    //     {
    //       code: 23,
    //       name: "Pot Hole (At Pavement)",
    //     },
    //     {
    //       code: 24,
    //       name: "Rutting (At Pavement)",
    //     },
    //     {
    //       code: 25,
    //       name: "Loss of Bond & Delamination (At Pavement)",
    //     },
    //     {
    //       code: 26,
    //       name: "Rippling (At Pavement)",
    //     },
    //     {
    //       code: 26,
    //       name: "Rippling (At Pavement)",
    //     },
    //     {
    //       code: 27,
    //       name: "Pavement Crack",
    //     },
    //     {
    //       code: 28,
    //       name: "Crack at Expansion Joint",
    //     },
    //     {
    //       code: 29,
    //       name: "Abnormal Spacing (At Expansion Joint)",
    //     },
    //     {
    //       code: 30,
    //       name: "Difference in Level (At Expansion Joint)",
    //     },
    //     {
    //       code: 31,
    //       name: "Abnormal Noise (At Expansion Joint)",
    //     },
    //     {
    //       code: 32,
    //       name: "Rupture (At Expansion Joint)",
    //     },
    //     {
    //       code: 33,
    //       name: "Buldging (At Bearing)",
    //     },
    //     {
    //       code: 34,
    //       name: "Abnormal Displacement (Bearing)",
    //     },
    //     {
    //       code: 35,
    //       name: "Erosion (At Slope Protection)",
    //     },
    //     {
    //       code: 35,
    //       name: "Erosion (At River Bank)",
    //     },
    //     {
    //       code: 36,
    //       name: "Material Loss/Disintegration (At Slope Protection)",
    //     },
    //     {
    //       code: 37,
    //       name: "Silting (At Culvert)",
    //     },
    //     {
    //       code: 38,
    //       name: "Inadequate Size (At Culvert)",
    //     },
    //     {
    //       code: 39,
    //       name: "Damage/Missing Panel (For Roof Tiles & Ceiling)",
    //     },
    //   ],
    // });

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

    const Bridge_Component_1 = JSON.stringify({
      component: {
        component_details: { name: "BEAM/GIRDER (Primary)", tick: 0 },
        material: [
          {
            rating_of_member: 0,
            material_details: [
              {
                name: "Steel",
                tick: 0,
              },
            ],
            type_of_damages: [
              {
                tick: 0,
                active_details: 0,
                name: "Corrosion of Steel",
                code: 1,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage1,
                type_of_damages_array: typeOfDamage1,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Fracture of Steel",
                code: 2,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "If detected, rating = 4",
                severity_of_damage_list: damage2,
                type_of_damages_array: typeOfDamage2,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Loose Connections",
                code: 3,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage3,
                type_of_damages_array: typeOfDamage3,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Permanent Deformations",
                code: 4,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "If detected, rating = 4",
                severity_of_damage_list: damage4,
                type_of_damages_array: typeOfDamage4,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Paint Deterioration",
                code: 5,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage5,
                type_of_damages_array: typeOfDamage5,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Abnormal Vibration/Deflection",
                code: 13,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "If detected, rating = 4",
                severity_of_damage_list: damage13,
                type_of_damages_array: typeOfDamage13,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Abnormal Noise",
                code: 31,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "If detected, rating = 4",
                severity_of_damage_list: damage31,
                type_of_damages_array: typeOfDamage31,
              },
            ],
          },
          {
            rating_of_member: 0,
            material_details: [
              {
                name: "P. Concrete",
                tick: 0,
              },
              {
                name: "R. Concrete",
                tick: 0,
              },
            ],
            type_of_damages: [
              {
                tick: 0,
                active_details: 0,
                name: "Surface Defect",
                code: 11,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage11,
                type_of_damages_array: typeOfDamage11,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Cracks at Concrete",
                code: 6,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "If detected, rating = 4",
                severity_of_damage_list: damage6,
                type_of_damages_array: typeOfDamage6,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Delamination",
                code: 12,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage12,
                type_of_damages_array: typeOfDamage12,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Spalling",
                code: 7,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage7,
                type_of_damages_array: typeOfDamage7,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Corrosion of Reinforcement",
                code: 8,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage8,
                type_of_damages_array: typeOfDamage8,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Abnormal Vibration/Deflection",
                code: 13,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "If detected, rating = 4",
                severity_of_damage_list: damage13,
                type_of_damages_array: typeOfDamage13,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Abnormal Movement",
                code: 16,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "If detected, rating = 4",
                severity_of_damage_list: damage16,
                type_of_damages_array: typeOfDamage16,
              },
            ],
          },
        ],
      },
    });

    const Bridge_Component_2 = JSON.stringify({
      component: {
        component_details: { name: "DECK SLAB (Primary)", tick: 0 },
        material: [
          {
            rating_of_member: 0,
            material_details: [
              {
                name: "Steel",
                tick: 0,
              },
            ],
            type_of_damages: [
              {
                tick: 0,
                active_details: 0,
                name: "Corrosion of Steel",
                code: 1,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage1,
                type_of_damages_array: typeOfDamage1,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Fracture of Steel",
                code: 2,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "If detected, rating = 4",
                severity_of_damage_list: damage2,
                type_of_damages_array: typeOfDamage2,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Loose Connections",
                code: 3,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage3,
                type_of_damages_array: typeOfDamage3,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Permanent Deformations",
                code: 4,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "If detected, rating = 4",
                severity_of_damage_list: damage4,
                type_of_damages_array: typeOfDamage4,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Water Leak",
                code: 14,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage14,
                type_of_damages_array: typeOfDamage14,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Abnormal Movement",
                code: 16,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "If detected, rating = 4",
                severity_of_damage_list: damage16,
                type_of_damages_array: typeOfDamage16,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Abnormal Noise",
                code: 31,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "If detected, rating = 4",
                severity_of_damage_list: damage31,
                type_of_damages_array: typeOfDamage31,
              },
            ],
          },
          {
            rating_of_member: 0,
            material_details: [
              {
                name: "Concrete",
                tick: 0,
              },
            ],
            type_of_damages: [
              {
                tick: 0,
                active_details: 0,
                name: "Surface Defect",
                code: 11,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage11,
                type_of_damages_array: typeOfDamage11,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Cracks at Concrete",
                code: 6,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage6,
                type_of_damages_array: typeOfDamage6,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Delamination",
                code: 12,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage12,
                type_of_damages_array: typeOfDamage12,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Spalling",
                code: 7,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage7,
                type_of_damages_array: typeOfDamage7,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Corrosion of Reinforcement",
                code: 8,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage8,
                type_of_damages_array: typeOfDamage8,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Water Leak/Free Lime",
                code: 14,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage14,
                type_of_damages_array: typeOfDamage14,
              },
            ],
          },
        ],
      },
    });

    const Bridge_Component_3 = JSON.stringify({
      component: {
        component_details: { name: "ABUTMENT (Primary)", tick: 0 },
        material: [
          {
            rating_of_member: 0,
            material_details: [
              {
                name: "Concrete",
                tick: 0,
              },
              {
                name: "Masonry",
                tick: 0,
              },
            ],
            type_of_damages: [
              {
                tick: 0,
                active_details: 0,
                name: "Surface Defect",
                code: 11,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage11,
                type_of_damages_array: typeOfDamage11,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Cracks at Concrete",
                code: 6,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage6,
                type_of_damages_array: typeOfDamage6,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Delamination",
                code: 12,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage12,
                type_of_damages_array: typeOfDamage12,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Spalling",
                code: 7,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage7,
                type_of_damages_array: typeOfDamage7,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Corrosion of Reinforcement",
                code: 8,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage8,
                type_of_damages_array: typeOfDamage8,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Wear/Abrasion",
                code: 9,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage9,
                type_of_damages_array: typeOfDamage9,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Material Deterioration",
                code: 10,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage10,
                type_of_damages_array: typeOfDamage10,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Tilt/Settlement",
                code: 15,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "If detected, rating = 4",
                severity_of_damage_list: damage15,
                type_of_damages_array: typeOfDamage15,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Scouring",
                code: 17,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage17,
                type_of_damages_array: typeOfDamage17,
              },
            ],
          },
        ],
      },
    });

    const Bridge_Component_4 = JSON.stringify({
      component: {
        component_details: { name: "PIER NO. (Primary)", tick: 0 },
        material: [
          {
            rating_of_member: 0,
            pier_no: "",
            material_details: [
              {
                name: "Concrete",
                tick: 0,
              },
              {
                name: "Masonry",
                tick: 0,
              },
            ],
            type_of_damages: [
              {
                tick: 0,
                active_details: 0,
                name: "Surface Defect",
                code: 11,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage11,
                type_of_damages_array: typeOfDamage11,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Cracks at Concrete",
                code: 6,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage6,
                type_of_damages_array: typeOfDamage6,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Delamination",
                code: 12,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage12,
                type_of_damages_array: typeOfDamage12,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Spalling",
                code: 7,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage7,
                type_of_damages_array: typeOfDamage7,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Corrosion of Reinforcement",
                code: 8,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage8,
                type_of_damages_array: typeOfDamage8,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Wear/Abrasion",
                code: 9,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage9,
                type_of_damages_array: typeOfDamage9,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Material Deterioration",
                code: 10,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage10,
                type_of_damages_array: typeOfDamage10,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Tilt/Settlement",
                code: 15,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "If detected, rating = 4",
                severity_of_damage_list: damage15,
                type_of_damages_array: typeOfDamage15,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Scouring",
                code: 17,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage17,
                type_of_damages_array: typeOfDamage17,
              },
            ],
          },
        ],
      },
    });

    const Bridge_Component_5 = JSON.stringify({
      component: {
        component_details: { name: "BEARING (Primary)", tick: 0 },
        material: [
          {
            rating_of_member: 0,
            material_details: [
              {
                name: "Steel",
                tick: 0,
              },
              {
                name: "Rubber",
                tick: 0,
              },
              {
                name: "Others",
                tick: 0,
              },
            ],
            type_of_damages: [
              {
                tick: 0,
                active_details: 0,
                name: "Corrosion of Steel",
                code: 1,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage1,
                type_of_damages_array: typeOfDamage1,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Loose Connections",
                code: 3,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage3,
                type_of_damages_array: typeOfDamage3,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Ponding Water",
                code: 18,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "If detected, rating = 3",
                severity_of_damage_list: damage18,
                type_of_damages_array: typeOfDamage18,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Debris/Vegetation",
                code: 19,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage19,
                type_of_damages_array: typeOfDamage19,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Abnormal Bulging",
                code: 33,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage33,
                type_of_damages_array: typeOfDamage33,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Abnormal Displacement",
                code: 34,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage34,
                type_of_damages_array: typeOfDamage34,
              },
            ],
          },
        ],
      },
    });

    const Bridge_Component_6 = JSON.stringify({
      component: {
        component_details: { name: "PARAPET (Secondary)", tick: 0 },
        material: [
          {
            rating_of_member: 0,
            material_details: [
              {
                name: "Steel",
                tick: 0,
              },
              {
                name: "Concrete",
                tick: 0,
              },
              {
                name: "Others",
                tick: 0,
              },
            ],
            type_of_damages: [
              {
                tick: 0,
                active_details: 0,
                name: "Corrosion of Steel",
                code: 1,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage1,
                type_of_damages_array: typeOfDamage1,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Cracks at Concrete",
                code: 6,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage6,
                type_of_damages_array: typeOfDamage6,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Spalling",
                code: 7,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage7,
                type_of_damages_array: typeOfDamage7,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Impact Damage",
                code: 2,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage2,
                type_of_damages_array: typeOfDamage2,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Loose Connections",
                code: 3,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage3,
                type_of_damages_array: typeOfDamage3,
              },
            ],
          },
        ],
      },
    });
    const Bridge_Component_7 = JSON.stringify({
      component: {
        component_details: { name: "SURFACING (Secondary)", tick: 0 },
        material: [
          {
            rating_of_member: 0,
            material_details: [
              {
                name: "Asphalt",
                tick: 0,
              },
              {
                name: "Concrete",
                tick: 0,
              },
            ],
            type_of_damages: [
              {
                tick: 0,
                active_details: 0,
                name: "Pot-holes",
                code: 23,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage23,
                type_of_damages_array: typeOfDamage23,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Wheel Track Rutting",
                code: 24,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage24,
                type_of_damages_array: typeOfDamage24,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Loss of Bond & Delamination",
                code: 25,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage25,
                type_of_damages_array: typeOfDamage25,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Rppling",
                code: 26,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage26,
                type_of_damages_array: typeOfDamage26,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Pavement Crack",
                code: 27,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage27,
                type_of_damages_array: typeOfDamage27,
              },
            ],
          },
        ],
      },
    });
    const Bridge_Component_8 = JSON.stringify({
      component: {
        component_details: { name: "EXPANSION JOINT (Secondary)", tick: 0 },
        material: [
          {
            rating_of_member: 0,
            material_details: [
              {
                name: "Asp. Plug",
                tick: 0,
              },
              {
                name: "Elastometric",
                tick: 0,
              },
              {
                name: "Comp. Seal",
                tick: 0,
              },
              {
                name: "Buried",
                tick: 0,
              },
              {
                name: "Others",
                tick: 0,
              },
            ],
            type_of_damages: [
              {
                tick: 0,
                active_details: 0,
                name: "Abnormal Spacing",
                code: 29,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "if detected, rating = 4",
                severity_of_damage_list: damage29,
                type_of_damages_array: typeOfDamage29,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Difference in Level",
                code: 30,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage30,
                type_of_damages_array: typeOfDamage30,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Water Leak",
                code: 14,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage14,
                type_of_damages_array: typeOfDamage14,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Cracking at Exp. Joint",
                code: 28,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage28,
                type_of_damages_array: typeOfDamage28,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Rupture",
                code: 32,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage32,
                type_of_damages_array: typeOfDamage32,
              },
            ],
          },
        ],
      },
    });
    const Bridge_Component_9 = JSON.stringify({
      component: {
        component_details: { name: "DRAINPIPES (Secondary)", tick: 0 },
        material: [
          {
            rating_of_member: 0,
            material_details: [
              {
                name: "Steel",
                tick: 0,
              },
              {
                name: "PVC",
                tick: 0,
              },
            ],
            type_of_damages: [
              {
                tick: 0,
                active_details: 0,
                name: "Corrosion of Steel",
                code: 1,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage1,
                type_of_damages_array: typeOfDamage1,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Blocked Drainage",
                code: 20,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage20,
                type_of_damages_array: typeOfDamage20,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Water Leak",
                code: 14,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage14,
                type_of_damages_array: typeOfDamage14,
              },
              {
                tick: 0,
                active_details: 0,
                name: "No/Inadequate Pipe Length",
                code: 21,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage21,
                type_of_damages_array: typeOfDamage21,
              },
            ],
          },
        ],
      },
    });
    const Bridge_Component_10 = JSON.stringify({
      component: {
        component_details: {
          name: "Slope Protection / River Bank (Secondary)",
          tick: 0,
        },
        material: [
          {
            rating_of_member: 0,
            material_details: [
              {
                name: "Rble. Pitching",
                tick: 0,
              },
              {
                name: "Gablons",
                tick: 0,
              },
              {
                name: "Others",
                tick: 0,
              },
            ],
            type_of_damages: [
              {
                tick: 0,
                active_details: 0,
                name: "Scouring",
                code: 17,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage17,
                type_of_damages_array: typeOfDamage17,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Erosion",
                code: 35,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage35,
                type_of_damages_array: typeOfDamage35,
              },
              {
                tick: 0,
                active_details: 0,
                name: "Material Loss / Disintegration",
                code: 36,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage36,
                type_of_damages_array: typeOfDamage36,
              },
            ],
          },
        ],
      },
    });
    const Bridge_Component_11 = JSON.stringify({
      component: {
        component_details: {
          name: "HYDRAULIC CAPACITY",
          tick: 0,
        },
        material: [
          {
            rating_of_member: 0,
            type_of_damages: [
              {
                tick: 0,
                active_details: 0,
                name: "Inadequate Opening",
                code: 38,
                severity_of_damage: 0,
                percentage_affected: "",
                remarks: "",
                severity_of_damage_list: damage38,
                type_of_damages_array: typeOfDamage38,
              },
            ],
          },
        ],
      },
    });

    const createBrideList = await prisma.bridge_list.createMany({
      data: [
        {
          structure: Bridge_Component_1,
        },
        {
          structure: Bridge_Component_2,
        },
        {
          structure: Bridge_Component_3,
        },
        {
          structure: Bridge_Component_4,
        },
        {
          structure: Bridge_Component_5,
        },
        {
          structure: Bridge_Component_6,
        },
        {
          structure: Bridge_Component_7,
        },
        {
          structure: Bridge_Component_8,
        },
        {
          structure: Bridge_Component_9,
        },
        {
          structure: Bridge_Component_10,
        },
        {
          structure: Bridge_Component_11,
        },
      ],
    });

    // if (create && create2 && create3) {
    if (createBrideList) {
      return new NextResponse("Successfully Populate bridge_list2 table.");
    } else {
      return new NextResponse("Fail");
    }
  } catch (error: any) {
    return new NextResponse(error.message);
  }
}
