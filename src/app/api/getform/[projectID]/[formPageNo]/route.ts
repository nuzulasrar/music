import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export const revalidate = 0;

export async function GET(
  request: NextRequest,
  { params }: { params: { projectID: string; formPageNo: string } },
) {
  const { projectID, formPageNo } = params;

  console.log(projectID, formPageNo);

  try {
    const formdata = await prisma.bridgeformone.findFirst({
      where: {
        projectBridgeId: Number(projectID),
        page: Number(formPageNo),
      },
    });

    if (formdata) {
      const formdata2 = await prisma.bridgeformtwo.findFirst({
        where: {
          bridgeFormOneId: Number(formdata.id),
          page: Number(formPageNo),
        },
      });

      if (formdata2) {
        return NextResponse.json({
          success: true,
          dataa: formdata,
          dataa2: formdata2,
        });
      } else {
        return NextResponse.json(
          {
            error: "Tak Jumpa formdata2",
            projectID: projectID,
            formPageNo: formPageNo,
          },
          { status: 404 },
        );
      }
    } else {
      return NextResponse.json(
        {
          error: "Tak Jumpa",
          projectID: projectID,
          formPageNo: formPageNo,
        },
        { status: 404 },
      );
    }
  } catch (error: any) {
    console.log("error: ", error.message);

    return new NextResponse(error.message);
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { projectID: string; formPageNo: string } },
) {
  const { projectID, formPageNo } = params;
  const { formdataa } = await request.json();

  console.log(projectID, formPageNo);

  try {
    //FIND IF bridgeformone EXIST
    const formdata = await prisma.bridgeformone.findFirst({
      where: {
        projectBridgeId: Number(projectID),
        page: Number(formPageNo),
      },
    });

    //IF bridgeformone EXIST
    if (formdata) {
      // console.log("a: ", JSON.stringify(formdata, null, 2));
      // console.log(
      //   "formdata.projectBridgeId: ",
      //   JSON.stringify(formdata.projectBridgeId, null, 2),
      // );
      //UPDATE bridgeformone
      const UPDATE_formdata = await prisma.bridgeformone.update({
        where: {
          id: formdata.id,
          projectBridgeId: formdata.projectBridgeId,
          page: Number(formPageNo),
        },
        data: {
          page: formdataa.page,
          pageOfSpan: formdataa.pageOfSpan,
          routeNo: formdataa.routeNo,
          structNo: formdataa.structNo,
          bridgeName: formdataa.bridgeName,
          nameOfInspector: formdataa.nameOfInspector,
          date: formdataa.date,
          beamGirder_tick: formdataa.beamGirder_tick || false,
          beamGirder_steel_tick: formdataa.beamGirder_steel_tick || false,
          beamGirder_steel_ratingOfMember:
            formdataa.beamGirder_steel_ratingOfMember || "",
          beamGirder_steel_corrosionOfSteel_tick:
            formdataa.beamGirder_steel_corrosionOfSteel_tick || false,
          beamGirder_steel_corrosionOfSteel_severity:
            formdataa.beamGirder_steel_corrosionOfSteel_severity || 0,
          beamGirder_steel_corrosionOfSteel_pctgAff1:
            formdataa.beamGirder_steel_corrosionOfSteel_pctgAff1 || "",
          beamGirder_steel_corrosionOfSteel_pctgAff2:
            formdataa.beamGirder_steel_corrosionOfSteel_pctgAff2 || "",
          beamGirder_steel_corrosionOfSteel_remarks:
            formdataa.beamGirder_steel_corrosionOfSteel_remarks || "",
          beamGirder_steel_corrosionOfSteel_rod:
            formdataa.beamGirder_steel_corrosionOfSteel_rod || "",
          beamGirder_steel_fractureAtSteel_tick:
            formdataa.beamGirder_steel_fractureAtSteel_tick || false,
          beamGirder_steel_fractureAtSteel_severity:
            formdataa.beamGirder_steel_fractureAtSteel_severity || 0,
          beamGirder_steel_fractureAtSteel_pctgAff1:
            formdataa.beamGirder_steel_fractureAtSteel_pctgAff1 || "",
          beamGirder_steel_fractureAtSteel_remarks:
            formdataa.beamGirder_steel_fractureAtSteel_remarks || "",
          beamGirder_steel_fractureAtSteel_rod:
            formdataa.beamGirder_steel_fractureAtSteel_rod || "",
          beamGirder_steel_looseConnections_tick:
            formdataa.beamGirder_steel_looseConnections_tick || false,
          beamGirder_steel_looseConnections_severity:
            formdataa.beamGirder_steel_looseConnections_severity || 0,
          beamGirder_steel_looseConnections_pctgAff1:
            formdataa.beamGirder_steel_looseConnections_pctgAff1 || "",
          beamGirder_steel_looseConnections_pctgAff2:
            formdataa.beamGirder_steel_looseConnections_pctgAff2 || "",
          beamGirder_steel_looseConnections_remarks:
            formdataa.beamGirder_steel_looseConnections_remarks || "",
          beamGirder_steel_looseConnections_rod:
            formdataa.beamGirder_steel_looseConnections_rod || "",
          beamGirder_steel_perManentDeformations_tick:
            formdataa.beamGirder_steel_perManentDeformations_tick || false,
          beamGirder_steel_perManentDeformations_severity:
            formdataa.beamGirder_steel_perManentDeformations_severity || 0,
          beamGirder_steel_perManentDeformations_pctgAff1:
            formdataa.beamGirder_steel_perManentDeformations_pctgAff1 || "",
          beamGirder_steel_perManentDeformations_remarks:
            formdataa.beamGirder_steel_perManentDeformations_remarks || "",
          beamGirder_steel_perManentDeformations_rod:
            formdataa.beamGirder_steel_perManentDeformations_rod || "",
          beamGirder_steel_paintDeterioration_tick:
            formdataa.beamGirder_steel_paintDeterioration_tick || false,
          beamGirder_steel_paintDeterioration_severity:
            formdataa.beamGirder_steel_paintDeterioration_severity || 0,
          beamGirder_steel_paintDeterioration_pctgAff1:
            formdataa.beamGirder_steel_paintDeterioration_pctgAff1 || "",
          beamGirder_steel_paintDeterioration_pctgAff2:
            formdataa.beamGirder_steel_paintDeterioration_pctgAff2 || "",
          beamGirder_steel_paintDeterioration_remarks:
            formdataa.beamGirder_steel_paintDeterioration_remarks || "",
          beamGirder_steel_paintDeterioration_rod:
            formdataa.beamGirder_steel_paintDeterioration_rod || "",
          beamGirder_steel_abnormalVibration_tick:
            formdataa.beamGirder_steel_abnormalVibration_tick || false,
          beamGirder_steel_abnormalVibration_severity:
            formdataa.beamGirder_steel_abnormalVibration_severity || 0,
          beamGirder_steel_abnormalVibration_pctgAff1:
            formdataa.beamGirder_steel_abnormalVibration_pctgAff1 || "",
          beamGirder_steel_abnormalVibration_remarks:
            formdataa.beamGirder_steel_abnormalVibration_remarks || "",
          beamGirder_steel_abnormalVibration_rod:
            formdataa.beamGirder_steel_abnormalVibration_rod || "",
          beamGirder_steel_abnormalNoise_tick:
            formdataa.beamGirder_steel_abnormalNoise_tick || false,
          beamGirder_steel_abnormalNoise_severity:
            formdataa.beamGirder_steel_abnormalNoise_severity || 0,
          beamGirder_steel_abnormalNoise_pctgAff1:
            formdataa.beamGirder_steel_abnormalNoise_pctgAff1 || "",
          beamGirder_steel_abnormalNoise_remarks:
            formdataa.beamGirder_steel_abnormalNoise_remarks || "",
          beamGirder_steel_abnormalNoise_rod:
            formdataa.beamGirder_steel_abnormalNoise_rod || "",
          beamGirder_pConcrete_tick:
            formdataa.beamGirder_pConcrete_tick || false,
          beamGirder_rConcrete_tick:
            formdataa.beamGirder_rConcrete_tick || false,
          beamGirder_pAndRConcrete_ratingOfMember:
            formdataa.beamGirder_pAndRConcrete_ratingOfMember || "",
          beamGirder_pAndRConcrete_surfaceDefect_tick:
            formdataa.beamGirder_pAndRConcrete_surfaceDefect_tick || false,
          beamGirder_pAndRConcrete_surfaceDefect_severity:
            formdataa.beamGirder_pAndRConcrete_surfaceDefect_severity || 0,
          beamGirder_pAndRConcrete_surfaceDefect_pctgAff1:
            formdataa.beamGirder_pAndRConcrete_surfaceDefect_pctgAff1 || "",
          beamGirder_pAndRConcrete_surfaceDefect_pctgAff2:
            formdataa.beamGirder_pAndRConcrete_surfaceDefect_pctgAff2 || "",
          beamGirder_pAndRConcrete_surfaceDefect_remarks:
            formdataa.beamGirder_pAndRConcrete_surfaceDefect_remarks || "",
          beamGirder_pAndRConcrete_surfaceDefect_rod:
            formdataa.beamGirder_pAndRConcrete_surfaceDefect_rod || "",
          beamGirder_pAndRConcrete_cracksAtConcrete_tick:
            formdataa.beamGirder_pAndRConcrete_cracksAtConcrete_tick || false,
          beamGirder_pAndRConcrete_cracksAtConcrete_severity:
            formdataa.beamGirder_pAndRConcrete_cracksAtConcrete_severity || 0,
          beamGirder_pAndRConcrete_cracksAtConcrete_pctgAff1:
            formdataa.beamGirder_pAndRConcrete_cracksAtConcrete_pctgAff1 || "",
          beamGirder_pAndRConcrete_cracksAtConcrete_remarks:
            formdataa.beamGirder_pAndRConcrete_cracksAtConcrete_remarks || "",
          beamGirder_pAndRConcrete_cracksAtConcrete_rod:
            formdataa.beamGirder_pAndRConcrete_cracksAtConcrete_rod || "",
          beamGirder_pAndRConcrete_delamination_tick:
            formdataa.beamGirder_pAndRConcrete_delamination_tick || false,
          beamGirder_pAndRConcrete_delamination_severity:
            formdataa.beamGirder_pAndRConcrete_delamination_severity || 0,
          beamGirder_pAndRConcrete_delamination_pctgAff1:
            formdataa.beamGirder_pAndRConcrete_delamination_pctgAff1 || "",
          beamGirder_pAndRConcrete_delamination_pctgAff2:
            formdataa.beamGirder_pAndRConcrete_delamination_pctgAff2 || "",
          beamGirder_pAndRConcrete_delamination_remarks:
            formdataa.beamGirder_pAndRConcrete_delamination_remarks || "",
          beamGirder_pAndRConcrete_delamination_rod:
            formdataa.beamGirder_pAndRConcrete_delamination_rod || "",
          beamGirder_pAndRConcrete_spalling_tick:
            formdataa.beamGirder_pAndRConcrete_spalling_tick || false,
          beamGirder_pAndRConcrete_spalling_severity:
            formdataa.beamGirder_pAndRConcrete_spalling_severity || 0,
          beamGirder_pAndRConcrete_spalling_pctgAff1:
            formdataa.beamGirder_pAndRConcrete_spalling_pctgAff1 || "",
          beamGirder_pAndRConcrete_spalling_pctgAff2:
            formdataa.beamGirder_pAndRConcrete_spalling_pctgAff2 || "",
          beamGirder_pAndRConcrete_spalling_remarks:
            formdataa.beamGirder_pAndRConcrete_spalling_remarks || "",
          beamGirder_pAndRConcrete_spalling_rod:
            formdataa.beamGirder_pAndRConcrete_spalling_rod || "",
          beamGirder_pAndRConcrete_corrossionOfReinforcement_tick:
            formdataa.beamGirder_pAndRConcrete_corrossionOfReinforcement_tick ||
            false,
          beamGirder_pAndRConcrete_corrossionOfReinforcement_severity:
            formdataa.beamGirder_pAndRConcrete_corrossionOfReinforcement_severity ||
            0,
          beamGirder_pAndRConcrete_corrossionOfReinforcement_pctgAff1:
            formdataa.beamGirder_pAndRConcrete_corrossionOfReinforcement_pctgAff1 ||
            "",
          beamGirder_pAndRConcrete_corrossionOfReinforcement_pctgAff2:
            formdataa.beamGirder_pAndRConcrete_corrossionOfReinforcement_pctgAff2 ||
            "",
          beamGirder_pAndRConcrete_corrossionOfReinforcement_remarks:
            formdataa.beamGirder_pAndRConcrete_corrossionOfReinforcement_remarks,
          beamGirder_pAndRConcrete_corrossionOfReinforcement_rod:
            formdataa.beamGirder_pAndRConcrete_corrossionOfReinforcement_rod ||
            "",
          beamGirder_pAndRConcrete_abnormalVibration_tick:
            formdataa.beamGirder_pAndRConcrete_abnormalVibration_tick || false,
          beamGirder_pAndRConcrete_abnormalVibration_severity:
            formdataa.beamGirder_pAndRConcrete_abnormalVibration_severity || 0,
          beamGirder_pAndRConcrete_abnormalVibration_pctgAff1:
            formdataa.beamGirder_pAndRConcrete_abnormalVibration_pctgAff1 || "",
          beamGirder_pAndRConcrete_abnormalVibration_remarks:
            formdataa.beamGirder_pAndRConcrete_abnormalVibration_remarks || "",
          beamGirder_pAndRConcrete_abnormalVibration_rod:
            formdataa.beamGirder_pAndRConcrete_abnormalVibration_rod || "",
          beamGirder_pAndRConcrete_abnormalMovement_tick:
            formdataa.beamGirder_pAndRConcrete_abnormalMovement_tick || false,
          beamGirder_pAndRConcrete_abnormalMovement_severity:
            formdataa.beamGirder_pAndRConcrete_abnormalMovement_severity || 0,
          beamGirder_pAndRConcrete_abnormalMovement_pctgAff1:
            formdataa.beamGirder_pAndRConcrete_abnormalMovement_pctgAff1 || "",
          beamGirder_pAndRConcrete_abnormalMovement_remarks:
            formdataa.beamGirder_pAndRConcrete_abnormalMovement_remarks || "",
          beamGirder_pAndRConcrete_abnormalMovement_rod:
            formdataa.beamGirder_pAndRConcrete_abnormalMovement_rod || "",
          deckSlab_tick: formdataa.deckSlab_tick || false,
          deckSlab_steel_tick: formdataa.deckSlab_steel_tick || false,
          deckSlab_steel_ratingOfMember:
            formdataa.deckSlab_steel_ratingOfMember || "",
          deckSlab_steel_corrosionOfSteel_tick:
            formdataa.deckSlab_steel_corrosionOfSteel_tick || false,
          deckSlab_steel_corrosionOfSteel_severity:
            formdataa.deckSlab_steel_corrosionOfSteel_severity || 0,
          deckSlab_steel_corrosionOfSteel_pctgAff1:
            formdataa.deckSlab_steel_corrosionOfSteel_pctgAff1 || "",
          deckSlab_steel_corrosionOfSteel_pctgAff2:
            formdataa.deckSlab_steel_corrosionOfSteel_pctgAff2 || "",
          deckSlab_steel_corrosionOfSteel_remarks:
            formdataa.deckSlab_steel_corrosionOfSteel_remarks || "",
          deckSlab_steel_corrosionOfSteel_rod:
            formdataa.deckSlab_steel_corrosionOfSteel_rod || "",
          deckSlab_steel_fractureAtSteel_tick:
            formdataa.deckSlab_steel_fractureAtSteel_tick || false,
          deckSlab_steel_fractureAtSteel_severity:
            formdataa.deckSlab_steel_fractureAtSteel_severity || 0,
          deckSlab_steel_fractureAtSteel_pctgAff1:
            formdataa.deckSlab_steel_fractureAtSteel_pctgAff1 || "",
          deckSlab_steel_fractureAtSteel_remarks:
            formdataa.deckSlab_steel_fractureAtSteel_remarks || "",
          deckSlab_steel_fractureAtSteel_rod:
            formdataa.deckSlab_steel_fractureAtSteel_rod || "",
          deckSlab_steel_looseConnections_tick:
            formdataa.deckSlab_steel_looseConnections_tick || false,
          deckSlab_steel_looseConnections_severity:
            formdataa.deckSlab_steel_looseConnections_severity || 0,
          deckSlab_steel_looseConnections_pctgAff1:
            formdataa.deckSlab_steel_looseConnections_pctgAff1 || "",
          deckSlab_steel_looseConnections_pctgAff2:
            formdataa.deckSlab_steel_looseConnections_pctgAff2 || "",
          deckSlab_steel_looseConnections_remarks:
            formdataa.deckSlab_steel_looseConnections_remarks || "",
          deckSlab_steel_looseConnections_rod:
            formdataa.deckSlab_steel_looseConnections_rod || "",
          deckSlab_steel_perManentDeformations_tick:
            formdataa.deckSlab_steel_perManentDeformations_tick || false,
          deckSlab_steel_perManentDeformations_severity:
            formdataa.deckSlab_steel_perManentDeformations_severity || 0,
          deckSlab_steel_perManentDeformations_pctgAff1:
            formdataa.deckSlab_steel_perManentDeformations_pctgAff1 || "",
          deckSlab_steel_perManentDeformations_remarks:
            formdataa.deckSlab_steel_perManentDeformations_remarks || "",
          deckSlab_steel_perManentDeformations_rod:
            formdataa.deckSlab_steel_perManentDeformations_rod || "",
          deckSlab_steel_waterLeak_tick:
            formdataa.deckSlab_steel_waterLeak_tick || false,
          deckSlab_steel_waterLeak_severity:
            formdataa.deckSlab_steel_waterLeak_severity || 0,
          deckSlab_steel_waterLeak_pctgAff1:
            formdataa.deckSlab_steel_waterLeak_pctgAff1 || "",
          deckSlab_steel_waterLeak_pctgAff2:
            formdataa.deckSlab_steel_waterLeak_pctgAff2 || "",
          deckSlab_steel_waterLeak_remarks:
            formdataa.deckSlab_steel_waterLeak_remarks || "",
          deckSlab_steel_waterLeak_rod:
            formdataa.deckSlab_steel_waterLeak_rod || "",
          deckSlab_steel_abnormalMovement_tick:
            formdataa.deckSlab_steel_abnormalMovement_tick || false,
          deckSlab_steel_abnormalMovement_severity:
            formdataa.deckSlab_steel_abnormalMovement_severity || 0,
          deckSlab_steel_abnormalMovement_pctgAff1:
            formdataa.deckSlab_steel_abnormalMovement_pctgAff1 || "",
          deckSlab_steel_abnormalMovement_remarks:
            formdataa.deckSlab_steel_abnormalMovement_remarks || "",
          deckSlab_steel_abnormalMovement_rod:
            formdataa.deckSlab_steel_abnormalMovement_rod || "",
          deckSlab_steel_abnormalNoise_tick:
            formdataa.deckSlab_steel_abnormalNoise_tick || false,
          deckSlab_steel_abnormalNoise_severity:
            formdataa.deckSlab_steel_abnormalNoise_severity || 0,
          deckSlab_steel_abnormalNoise_pctgAff1:
            formdataa.deckSlab_steel_abnormalNoise_pctgAff1 || "",
          deckSlab_steel_abnormalNoise_remarks:
            formdataa.deckSlab_steel_abnormalNoise_remarks || "",
          deckSlab_steel_abnormalNoise_rod:
            formdataa.deckSlab_steel_abnormalNoise_rod || "",
          deckSlab_concrete_tick: formdataa.deckSlab_concrete_tick || false,
          deckSlab_concrete_surfaceDefect_tick:
            formdataa.deckSlab_concrete_surfaceDefect_tick || false,
          deckSlab_concrete_surfaceDefect_severity:
            formdataa.deckSlab_concrete_surfaceDefect_severity || 0,
          deckSlab_concrete_surfaceDefect_pctgAff1:
            formdataa.deckSlab_concrete_surfaceDefect_pctgAff1 || "",
          deckSlab_concrete_abnormalNoise_pctgAff2:
            formdataa.deckSlab_concrete_abnormalNoise_pctgAff2 || "",
          deckSlab_concrete_surfaceDefect_remarks:
            formdataa.deckSlab_concrete_surfaceDefect_remarks || "",
          deckSlab_concrete_surfaceDefect_rod:
            formdataa.deckSlab_concrete_surfaceDefect_rod || "",
          deckSlab_concrete_cracksAtConcrete_tick:
            formdataa.deckSlab_concrete_cracksAtConcrete_tick || false,
          deckSlab_concrete_cracksAtConcrete_severity:
            formdataa.deckSlab_concrete_cracksAtConcrete_severity || 0,
          deckSlab_concrete_cracksAtConcrete_pctgAff1:
            formdataa.deckSlab_concrete_cracksAtConcrete_pctgAff1 || "",
          deckSlab_concrete_cracksAtConcrete_remarks:
            formdataa.deckSlab_concrete_cracksAtConcrete_remarks || "",
          deckSlab_concrete_cracksAtConcrete_rod:
            formdataa.deckSlab_concrete_cracksAtConcrete_rod || "",
          deckSlab_concrete_delamination_tick:
            formdataa.deckSlab_concrete_delamination_tick || false,
          deckSlab_concrete_delamination_severity:
            formdataa.deckSlab_concrete_delamination_severity || 0,
          deckSlab_concrete_delamination_pctgAff1:
            formdataa.deckSlab_concrete_delamination_pctgAff1 || "",
          deckSlab_concrete_delamination_pctgAff2:
            formdataa.deckSlab_concrete_delamination_pctgAff2 || "",
          deckSlab_concrete_delamination_remarks:
            formdataa.deckSlab_concrete_delamination_remarks || "",
          deckSlab_concrete_delamination_rod:
            formdataa.deckSlab_concrete_delamination_rod || "",
          deckSlab_concrete_spalling_tick:
            formdataa.deckSlab_concrete_spalling_tick || false,
          deckSlab_concrete_spalling_severity:
            formdataa.deckSlab_concrete_spalling_severity || 0,
          deckSlab_concrete_spalling_pctgAff1:
            formdataa.deckSlab_concrete_spalling_pctgAff1 || "",
          deckSlab_concrete_spalling_pctgAff2:
            formdataa.deckSlab_concrete_spalling_pctgAff2 || "",
          deckSlab_concrete_spalling_remarks:
            formdataa.deckSlab_concrete_spalling_remarks || "",
          deckSlab_concrete_spalling_rod:
            formdataa.deckSlab_concrete_spalling_rod || "",
          deckSlab_concrete_corrosionOfReinforcement_tick:
            formdataa.deckSlab_concrete_corrosionOfReinforcement_tick || false,
          deckSlab_concrete_corrosionOfReinforcement_severity:
            formdataa.deckSlab_concrete_corrosionOfReinforcement_severity || 0,
          deckSlab_concrete_corrosionOfReinforcement_pctgAff1:
            formdataa.deckSlab_concrete_corrosionOfReinforcement_pctgAff1 || "",
          deckSlab_concrete_corrosionOfReinforcement_pctgAff2:
            formdataa.deckSlab_concrete_corrosionOfReinforcement_pctgAff2 || "",
          deckSlab_concrete_corrosionOfReinforcement_remarks:
            formdataa.deckSlab_concrete_corrosionOfReinforcement_remarks || "",
          deckSlab_concrete_corrosionOfReinforcement_rod:
            formdataa.deckSlab_concrete_corrosionOfReinforcement_rod || "",
          deckSlab_concrete_waterLeakOrFreeLime_tick:
            formdataa.deckSlab_concrete_waterLeakOrFreeLime_tick || false,
          deckSlab_concrete_waterLeakOrFreeLime_severity:
            formdataa.deckSlab_concrete_waterLeakOrFreeLime_severity || 0,
          deckSlab_concrete_waterLeakOrFreeLime_pctgAff1:
            formdataa.deckSlab_concrete_waterLeakOrFreeLime_pctgAff1 || "",
          deckSlab_concrete_waterLeakOrFreeLime_pctgAff2:
            formdataa.deckSlab_concrete_waterLeakOrFreeLime_pctgAff2 || "",
          deckSlab_concrete_waterLeakOrFreeLime_remarks:
            formdataa.deckSlab_concrete_waterLeakOrFreeLime_remarks || "",
          deckSlab_concrete_waterLeakOrFreeLime_rod:
            formdataa.deckSlab_concrete_waterLeakOrFreeLime_rod || "",
          abutment_tick: formdataa.abutment_tick || false,
          abutment_concrete_tick: formdataa.abutment_concrete_tick || false,
          abutment_masonry_tick: formdataa.abutment_masonry_tick || false,
          abutment_concreteAndMasonry_ratingOfMember:
            formdataa.abutment_concreteAndMasonry_ratingOfMember || "",
          abutment_concreteAndMasonry_surfaceDefect_tick:
            formdataa.abutment_concreteAndMasonry_surfaceDefect_tick || false,
          abutment_concreteAndMasonry_surfaceDefect_severity:
            formdataa.abutment_concreteAndMasonry_surfaceDefect_severity || 0,
          abutment_concreteAndMasonry_surfaceDefect_pctgAff1:
            formdataa.abutment_concreteAndMasonry_surfaceDefect_pctgAff1 || "",
          abutment_concreteAndMasonry_surfaceDefect_pctgAff2:
            formdataa.abutment_concreteAndMasonry_surfaceDefect_pctgAff2 || "",
          abutment_concreteAndMasonry_surfaceDefect_remarks:
            formdataa.abutment_concreteAndMasonry_surfaceDefect_remarks || "",
          abutment_concreteAndMasonry_surfaceDefect_rod:
            formdataa.abutment_concreteAndMasonry_surfaceDefect_rod || "",
          abutment_concreteAndMasonry_cracksAtConcrete_tick:
            formdataa.abutment_concreteAndMasonry_cracksAtConcrete_tick ||
            false,
          abutment_concreteAndMasonry_cracksAtConcrete_severity:
            formdataa.abutment_concreteAndMasonry_cracksAtConcrete_severity ||
            0,
          abutment_concreteAndMasonry_cracksAtConcrete_pctgAff1:
            formdataa.abutment_concreteAndMasonry_cracksAtConcrete_pctgAff1 ||
            "",
          abutment_concreteAndMasonry_cracksAtConcrete_remarks:
            formdataa.abutment_concreteAndMasonry_cracksAtConcrete_remarks ||
            "",
          abutment_concreteAndMasonry_cracksAtConcrete_rod:
            formdataa.abutment_concreteAndMasonry_cracksAtConcrete_rod || "",
          abutment_concreteAndMasonry_delamination_tick:
            formdataa.abutment_concreteAndMasonry_delamination_tick || false,
          abutment_concreteAndMasonry_delamination_severity:
            formdataa.abutment_concreteAndMasonry_delamination_severity || 0,
          abutment_concreteAndMasonry_delamination_pctgAff1:
            formdataa.abutment_concreteAndMasonry_delamination_pctgAff1 || "",
          abutment_concreteAndMasonry_delamination_pctgAff2:
            formdataa.abutment_concreteAndMasonry_delamination_pctgAff2 || "",
          abutment_concreteAndMasonry_delamination_remarks:
            formdataa.abutment_concreteAndMasonry_delamination_remarks || "",
          abutment_concreteAndMasonry_delamination_rod:
            formdataa.abutment_concreteAndMasonry_delamination_rod || "",
          abutment_concreteAndMasonry_spalling_tick:
            formdataa.abutment_concreteAndMasonry_spalling_tick || false,
          abutment_concreteAndMasonry_spalling_severity:
            formdataa.abutment_concreteAndMasonry_spalling_severity || 0,
          abutment_concreteAndMasonry_spalling_pctgAff1:
            formdataa.abutment_concreteAndMasonry_spalling_pctgAff1 || "",
          abutment_concreteAndMasonry_spalling_pctgAff2:
            formdataa.abutment_concreteAndMasonry_spalling_pctgAff2 || "",
          abutment_concreteAndMasonry_spalling_remarks:
            formdataa.abutment_concreteAndMasonry_spalling_remarks || "",
          abutment_concreteAndMasonry_spalling_rod:
            formdataa.abutment_concreteAndMasonry_spalling_rod || "",
          abutment_concreteAndMasonry_corrosionOfReinforcement_tick:
            formdataa.abutment_concreteAndMasonry_corrosionOfReinforcement_tick ||
            false,
          abutment_concreteAndMasonry_corrosionOfReinforcement_severity:
            formdataa.abutment_concreteAndMasonry_corrosionOfReinforcement_severity ||
            0,
          abutment_concreteAndMasonry_corrosionOfReinforcement_pctgAff1:
            formdataa.abutment_concreteAndMasonry_corrosionOfReinforcement_pctgAff1 ||
            "",
          abutment_concreteAndMasonry_corrosionOfReinforcement_pctgAff2:
            formdataa.abutment_concreteAndMasonry_corrosionOfReinforcement_pctgAff2 ||
            "",
          abutment_concreteAndMasonry_corrosionOfReinforcement_remarks:
            formdataa.abutment_concreteAndMasonry_corrosionOfReinforcement_remarks ||
            "",
          abutment_concreteAndMasonry_corrosionOfReinforcement_rod:
            formdataa.abutment_concreteAndMasonry_corrosionOfReinforcement_rod ||
            "",
          abutment_concreteAndMasonry_wearOrAbrasion_tick:
            formdataa.abutment_concreteAndMasonry_wearOrAbrasion_tick || false,
          abutment_concreteAndMasonry_wearOrAbrasion_severity:
            formdataa.abutment_concreteAndMasonry_wearOrAbrasion_severity || 0,
          abutment_concreteAndMasonry_wearOrAbrasion_pctgAff1:
            formdataa.abutment_concreteAndMasonry_wearOrAbrasion_pctgAff1 || "",
          abutment_concreteAndMasonry_wearOrAbrasion_pctgAff2:
            formdataa.abutment_concreteAndMasonry_wearOrAbrasion_pctgAff2 || "",
          abutment_concreteAndMasonry_wearOrAbrasion_remarks:
            formdataa.abutment_concreteAndMasonry_wearOrAbrasion_remarks || "",
          abutment_concreteAndMasonry_wearOrAbrasion_rod:
            formdataa.abutment_concreteAndMasonry_wearOrAbrasion_rod || "",
          abutment_concreteAndMasonry_materialDeterioration_tick:
            formdataa.abutment_concreteAndMasonry_materialDeterioration_tick ||
            false,
          abutment_concreteAndMasonry_materialDeterioration_severity:
            formdataa.abutment_concreteAndMasonry_materialDeterioration_severity ||
            0,
          abutment_concreteAndMasonry_materialDeterioration_pctgAff1:
            formdataa.abutment_concreteAndMasonry_materialDeterioration_pctgAff1 ||
            "",
          abutment_concreteAndMasonry_materialDeterioration_pctgAff2:
            formdataa.abutment_concreteAndMasonry_materialDeterioration_pctgAff2 ||
            "",
          abutment_concreteAndMasonry_materialDeterioration_remarks:
            formdataa.abutment_concreteAndMasonry_materialDeterioration_remarks ||
            "",
          abutment_concreteAndMasonry_materialDeterioration_rod:
            formdataa.abutment_concreteAndMasonry_materialDeterioration_rod ||
            "",
          abutment_concreteAndMasonry_tiltOrSettlement_tick:
            formdataa.abutment_concreteAndMasonry_tiltOrSettlement_tick ||
            false,
          abutment_concreteAndMasonry_tiltOrSettlement_severity:
            formdataa.abutment_concreteAndMasonry_tiltOrSettlement_severity ||
            0,
          abutment_concreteAndMasonry_tiltOrSettlement_pctgAff1:
            formdataa.abutment_concreteAndMasonry_tiltOrSettlement_pctgAff1 ||
            "",
          abutment_concreteAndMasonry_tiltOrSettlement_remarks:
            formdataa.abutment_concreteAndMasonry_tiltOrSettlement_remarks ||
            "",
          abutment_concreteAndMasonry_tiltOrSettlement_rod:
            formdataa.abutment_concreteAndMasonry_tiltOrSettlement_rod || "",
          abutment_concreteAndMasonry_scouring_tick:
            formdataa.abutment_concreteAndMasonry_scouring_tick || false,
          abutment_concreteAndMasonry_scouring_severity:
            formdataa.abutment_concreteAndMasonry_scouring_severity || 0,
          abutment_concreteAndMasonry_scouring_pctgAff1:
            formdataa.abutment_concreteAndMasonry_scouring_pctgAff1 || "",
          abutment_concreteAndMasonry_scouring_remarks:
            formdataa.abutment_concreteAndMasonry_scouring_remarks || "",
          abutment_concreteAndMasonry_scouring_rod:
            formdataa.abutment_concreteAndMasonry_scouring_rod || "",
          pierNo__tick: formdataa.pierNo__tick || false,
          pierNo_number: formdataa.pierNo_number || "",
          pierNo_concrete_tick: formdataa.pierNo_concrete_tick || false,
          pierNo_masonry_tick: formdataa.pierNo_masonry_tick || false,
          pierNo_concreteAndMasonry_ratingOfMember:
            formdataa.pierNo_concreteAndMasonry_ratingOfMember || "",
          pierNo_concreteAndMasonry_surfaceDefect_tick:
            formdataa.pierNo_concreteAndMasonry_surfaceDefect_tick || false,
          pierNo_concreteAndMasonry_surfaceDefect_severity:
            formdataa.pierNo_concreteAndMasonry_surfaceDefect_severity || 0,
          pierNo_concreteAndMasonry_surfaceDefect_pctgAff1:
            formdataa.pierNo_concreteAndMasonry_surfaceDefect_pctgAff1 || "",
          pierNo_concreteAndMasonry_surfaceDefect_pctgAff2:
            formdataa.pierNo_concreteAndMasonry_surfaceDefect_pctgAff2 || "",
          pierNo_concreteAndMasonry_surfaceDefect_remarks:
            formdataa.pierNo_concreteAndMasonry_surfaceDefect_remarks || "",
          pierNo_concreteAndMasonry_surfaceDefect_rod:
            formdataa.pierNo_concreteAndMasonry_surfaceDefect_rod || "",
          pierNo_concreteAndMasonry_cracksAtConcrete_tick:
            formdataa.pierNo_concreteAndMasonry_cracksAtConcrete_tick || false,
          pierNo_concreteAndMasonry_cracksAtConcrete_severity:
            formdataa.pierNo_concreteAndMasonry_cracksAtConcrete_severity || 0,
          pierNo_concreteAndMasonry_cracksAtConcrete_pctgAff1:
            formdataa.pierNo_concreteAndMasonry_cracksAtConcrete_pctgAff1 || "",
          pierNo_concreteAndMasonry_cracksAtConcrete_remarks:
            formdataa.pierNo_concreteAndMasonry_cracksAtConcrete_remarks || "",
          pierNo_concreteAndMasonry_cracksAtConcrete_rod:
            formdataa.pierNo_concreteAndMasonry_cracksAtConcrete_rod || "",
          pierNo_concreteAndMasonry_delamination_tick:
            formdataa.pierNo_concreteAndMasonry_delamination_tick || false,
          pierNo_concreteAndMasonry_delamination_severity:
            formdataa.pierNo_concreteAndMasonry_delamination_severity || 0,
          pierNo_concreteAndMasonry_delamination_pctgAff1:
            formdataa.pierNo_concreteAndMasonry_delamination_pctgAff1 || "",
          pierNo_concreteAndMasonry_delamination_pctgAff2:
            formdataa.pierNo_concreteAndMasonry_delamination_pctgAff2 || "",
          pierNo_concreteAndMasonry_delamination_remarks:
            formdataa.pierNo_concreteAndMasonry_delamination_remarks || "",
          pierNo_concreteAndMasonry_delamination_rod:
            formdataa.pierNo_concreteAndMasonry_delamination_rod || "",
          pierNo_concreteAndMasonry_spalling_tick:
            formdataa.pierNo_concreteAndMasonry_spalling_tick || false,
          pierNo_concreteAndMasonry_spalling_severity:
            formdataa.pierNo_concreteAndMasonry_spalling_severity || 0,
          pierNo_concreteAndMasonry_spalling_pctgAff1:
            formdataa.pierNo_concreteAndMasonry_spalling_pctgAff1 || "",
          pierNo_concreteAndMasonry_spalling_pctgAff2:
            formdataa.pierNo_concreteAndMasonry_spalling_pctgAff2 || "",
          pierNo_concreteAndMasonry_spalling_remarks:
            formdataa.pierNo_concreteAndMasonry_spalling_remarks || "",
          pierNo_concreteAndMasonry_spalling_rod:
            formdataa.pierNo_concreteAndMasonry_spalling_rod || "",
          pierNo_concreteAndMasonry_corrosionOfReinforcement_tick:
            formdataa.pierNo_concreteAndMasonry_corrosionOfReinforcement_tick ||
            false,
          pierNo_concreteAndMasonry_corrosionOfReinforcement_severity:
            formdataa.pierNo_concreteAndMasonry_corrosionOfReinforcement_severity ||
            0,
          pierNo_concreteAndMasonry_corrosionOfReinforcement_pctgAff1:
            formdataa.pierNo_concreteAndMasonry_corrosionOfReinforcement_pctgAff1 ||
            "",
          pierNo_concreteAndMasonry_corrosionOfReinforcement_pctgAff2:
            formdataa.pierNo_concreteAndMasonry_corrosionOfReinforcement_pctgAff2 ||
            "",
          pierNo_concreteAndMasonry_corrosionOfReinforcement_remarks:
            formdataa.pierNo_concreteAndMasonry_corrosionOfReinforcement_remarks ||
            "",
          pierNo_concreteAndMasonry_corrosionOfReinforcement_rod:
            formdataa.pierNo_concreteAndMasonry_corrosionOfReinforcement_rod ||
            "",
          pierNo_concreteAndMasonry_wearOrAbrasion_tick:
            formdataa.pierNo_concreteAndMasonry_wearOrAbrasion_tick || false,
          pierNo_concreteAndMasonry_wearOrAbrasion_severity:
            formdataa.pierNo_concreteAndMasonry_wearOrAbrasion_severity || 0,
          pierNo_concreteAndMasonry_wearOrAbrasion_pctgAff1:
            formdataa.pierNo_concreteAndMasonry_wearOrAbrasion_pctgAff1 || "",
          pierNo_concreteAndMasonry_wearOrAbrasion_pctgAff2:
            formdataa.pierNo_concreteAndMasonry_wearOrAbrasion_pctgAff2 || "",
          pierNo_concreteAndMasonry_wearOrAbrasion_remarks:
            formdataa.pierNo_concreteAndMasonry_wearOrAbrasion_remarks || "",
          pierNo_concreteAndMasonry_wearOrAbrasion_rod:
            formdataa.pierNo_concreteAndMasonry_wearOrAbrasion_rod || "",
          pierNo_concreteAndMasonry_materialDeterioration_tick:
            formdataa.pierNo_concreteAndMasonry_materialDeterioration_tick ||
            false,
          pierNo_concreteAndMasonry_materialDeterioration_severity:
            formdataa.pierNo_concreteAndMasonry_materialDeterioration_severity ||
            0,
          pierNo_concreteAndMasonry_materialDeterioration_pctgAff1:
            formdataa.pierNo_concreteAndMasonry_materialDeterioration_pctgAff1 ||
            "",
          pierNo_concreteAndMasonry_materialDeterioration_pctgAff2:
            formdataa.pierNo_concreteAndMasonry_materialDeterioration_pctgAff2 ||
            "",
          pierNo_concreteAndMasonry_materialDeterioration_remarks:
            formdataa.pierNo_concreteAndMasonry_materialDeterioration_remarks ||
            "",
          pierNo_concreteAndMasonry_materialDeterioration_rod:
            formdataa.pierNo_concreteAndMasonry_materialDeterioration_rod || "",
          pierNo_concreteAndMasonry_tiltOrSettlement_tick:
            formdataa.pierNo_concreteAndMasonry_tiltOrSettlement_tick || false,
          pierNo_concreteAndMasonry_tiltOrSettlement_severity:
            formdataa.pierNo_concreteAndMasonry_tiltOrSettlement_severity || 0,
          pierNo_concreteAndMasonry_tiltOrSettlement_pctgAff1:
            formdataa.pierNo_concreteAndMasonry_tiltOrSettlement_pctgAff1 || "",
          pierNo_concreteAndMasonry_tiltOrSettlement_remarks:
            formdataa.pierNo_concreteAndMasonry_tiltOrSettlement_remarks || "",
          pierNo_concreteAndMasonry_tiltOrSettlement_rod:
            formdataa.pierNo_concreteAndMasonry_tiltOrSettlement_rod || "",
          pierNo_concreteAndMasonry_scouring_tick:
            formdataa.pierNo_concreteAndMasonry_scouring_tick || false,
          pierNo_concreteAndMasonry_scouring_severity:
            formdataa.pierNo_concreteAndMasonry_scouring_severity || 0,
          pierNo_concreteAndMasonry_scouring_pctgAff1:
            formdataa.pierNo_concreteAndMasonry_scouring_pctgAff1 || "",
          pierNo_concreteAndMasonry_scouring_remarks:
            formdataa.pierNo_concreteAndMasonry_scouring_remarks || "",
          pierNo_concreteAndMasonry_scouring_rod:
            formdataa.pierNo_concreteAndMasonry_scouring_rod || "",
        },
      });

      console.log("UPDATE_formdata:", JSON.stringify(UPDATE_formdata, null, 2));

      // IF UPDATE bridgeformone SUCCESS
      if (UPDATE_formdata) {
        const formdata2 = await prisma.bridgeformtwo.findFirst({
          where: {
            bridgeFormOneId: UPDATE_formdata.id,
            page: Number(formPageNo),
          },
        });
        if (formdata2) {
          try {
            //UPDATE bridgeformtwo
            const UPDATE_formdata_2 = await prisma.bridgeformtwo.update({
              where: {
                id: formdata2.id,
                bridgeFormOneId: UPDATE_formdata.id,
                page: Number(formPageNo),
              },
              data: {
                page: formdataa.page,
                bearing_tick: formdataa.bearing_tick || false,
                bearing_steel_tick: formdataa.bearing_steel_tick || false,
                bearing_rubber_tick: formdataa.bearing_rubber_tick || false,
                bearing_others_tick: formdataa.bearing_others_tick || false,
                bearing_steelAndRubberAndOthers_ratingOfMember:
                  formdataa.bearing_steelAndRubberAndOthers_ratingOfMember ||
                  "",
                bearing_steelAndRubberAndOthers_corrosionOfSteel_tick:
                  formdataa.bearing_steelAndRubberAndOthers_corrosionOfSteel_tick ||
                  false,
                bearing_steelAndRubberAndOthers_corrosionOfSteel_severity:
                  formdataa.bearing_steelAndRubberAndOthers_corrosionOfSteel_severity ||
                  0,
                bearing_steelAndRubberAndOthers_corrosionOfSteel_pctgAff1:
                  formdataa.bearing_steelAndRubberAndOthers_corrosionOfSteel_pctgAff1 ||
                  "",
                bearing_steelAndRubberAndOthers_corrosionOfSteel_pctgAff2:
                  formdataa.bearing_steelAndRubberAndOthers_corrosionOfSteel_pctgAff2 ||
                  "",
                bearing_steelAndRubberAndOthers_corrosionOfSteel_remarks:
                  formdataa.bearing_steelAndRubberAndOthers_corrosionOfSteel_remarks ||
                  "",
                bearing_steelAndRubberAndOthers_corrosionOfSteel_rod:
                  formdataa.bearing_steelAndRubberAndOthers_corrosionOfSteel_rod ||
                  "",
                bearing_steelAndRubberAndOthers_looseConnections_tick:
                  formdataa.bearing_steelAndRubberAndOthers_looseConnections_tick ||
                  false,
                bearing_steelAndRubberAndOthers_looseConnections_severity:
                  formdataa.bearing_steelAndRubberAndOthers_looseConnections_severity ||
                  0,
                bearing_steelAndRubberAndOthers_looseConnections_pctgAff1:
                  formdataa.bearing_steelAndRubberAndOthers_looseConnections_pctgAff1 ||
                  "",
                bearing_steelAndRubberAndOthers_looseConnections_pctgAff2:
                  formdataa.bearing_steelAndRubberAndOthers_looseConnections_pctgAff2 ||
                  "",
                bearing_steelAndRubberAndOthers_looseConnections_remarks:
                  formdataa.bearing_steelAndRubberAndOthers_looseConnections_remarks ||
                  "",
                bearing_steelAndRubberAndOthers_looseConnections_rod:
                  formdataa.bearing_steelAndRubberAndOthers_looseConnections_rod ||
                  "",
                bearing_steelAndRubberAndOthers_pendingWater_tick:
                  formdataa.bearing_steelAndRubberAndOthers_pendingWater_tick ||
                  false,
                bearing_steelAndRubberAndOthers_pendingWater_severity:
                  formdataa.bearing_steelAndRubberAndOthers_pendingWater_severity ||
                  0,
                bearing_steelAndRubberAndOthers_pendingWater_pctgAff1:
                  formdataa.bearing_steelAndRubberAndOthers_pendingWater_pctgAff1 ||
                  "",
                bearing_steelAndRubberAndOthers_pendingWater_remarks:
                  formdataa.bearing_steelAndRubberAndOthers_pendingWater_remarks ||
                  "",
                bearing_steelAndRubberAndOthers_pendingWater_rod:
                  formdataa.bearing_steelAndRubberAndOthers_pendingWater_rod ||
                  "",
                bearing_steelAndRubberAndOthers_debrisOrVegetation_tick:
                  formdataa.bearing_steelAndRubberAndOthers_debrisOrVegetation_tick ||
                  false,
                bearing_steelAndRubberAndOthers_debrisOrVegetation_severity:
                  formdataa.bearing_steelAndRubberAndOthers_debrisOrVegetation_severity ||
                  0,
                bearing_steelAndRubberAndOthers_debrisOrVegetation_pctgAff1:
                  formdataa.bearing_steelAndRubberAndOthers_debrisOrVegetation_pctgAff1 ||
                  "",
                bearing_steelAndRubberAndOthers_debrisOrVegetation_remarks:
                  formdataa.bearing_steelAndRubberAndOthers_debrisOrVegetation_remarks ||
                  "",
                bearing_steelAndRubberAndOthers_debrisOrVegetation_rod:
                  formdataa.bearing_steelAndRubberAndOthers_debrisOrVegetation_rod ||
                  "",
                bearing_steelAndRubberAndOthers_abnormalBulging_tick:
                  formdataa.bearing_steelAndRubberAndOthers_abnormalBulging_tick ||
                  false,
                bearing_steelAndRubberAndOthers_abnormalBulging_severity:
                  formdataa.bearing_steelAndRubberAndOthers_abnormalBulging_severity ||
                  0,
                bearing_steelAndRubberAndOthers_abnormalBulging_pctgAff1:
                  formdataa.bearing_steelAndRubberAndOthers_abnormalBulging_pctgAff1 ||
                  "",
                bearing_steelAndRubberAndOthers_abnormalBulging_remarks:
                  formdataa.bearing_steelAndRubberAndOthers_abnormalBulging_remarks ||
                  "",
                bearing_steelAndRubberAndOthers_abnormalBulging_rod:
                  formdataa.bearing_steelAndRubberAndOthers_abnormalBulging_rod ||
                  "",
                bearing_steelAndRubberAndOthers_abnormalDisplacement_tick:
                  formdataa.bearing_steelAndRubberAndOthers_abnormalDisplacement_tick ||
                  false,
                bearing_steelAndRubberAndOthers_abnormalDisplacement_severity:
                  formdataa.bearing_steelAndRubberAndOthers_abnormalDisplacement_severity ||
                  0,
                bearing_steelAndRubberAndOthers_abnormalDisplacement_pctgAff1:
                  formdataa.bearing_steelAndRubberAndOthers_abnormalDisplacement_pctgAff1 ||
                  "",
                bearing_steelAndRubberAndOthers_abnormalDisplacement_pctgAff2:
                  formdataa.bearing_steelAndRubberAndOthers_abnormalDisplacement_pctgAff2 ||
                  "",
                bearing_steelAndRubberAndOthers_abnormalDisplacement_remarks:
                  formdataa.bearing_steelAndRubberAndOthers_abnormalDisplacement_remarks ||
                  "",
                bearing_steelAndRubberAndOthers_abnormalDisplacement_rod:
                  formdataa.bearing_steelAndRubberAndOthers_abnormalDisplacement_rod ||
                  "",
                parapet_tick: formdataa.parapet_tick || false,
                parapet_steel_tick: formdataa.parapet_steel_tick || false,
                parapet_concrete_tick: formdataa.parapet_concrete_tick || false,
                parapet_others_tick: formdataa.parapet_others_tick || false,
                parapet_steelAndConcreteAndOthers_ratingOfMember:
                  formdataa.parapet_steelAndConcreteAndOthers_ratingOfMember ||
                  "",
                parapet_steelAndConcreteAndOthers_corrosionOfSteel_tick:
                  formdataa.parapet_steelAndConcreteAndOthers_corrosionOfSteel_tick ||
                  false,
                parapet_steelAndConcreteAndOthers_corrosionOfSteel_severity:
                  formdataa.parapet_steelAndConcreteAndOthers_corrosionOfSteel_severity ||
                  0,
                parapet_steelAndConcreteAndOthers_corrosionOfSteel_pctgAff1:
                  formdataa.parapet_steelAndConcreteAndOthers_corrosionOfSteel_pctgAff1 ||
                  "",
                parapet_steelAndConcreteAndOthers_corrosionOfSteel_pctgAff2:
                  formdataa.parapet_steelAndConcreteAndOthers_corrosionOfSteel_pctgAff2 ||
                  "",
                parapet_steelAndConcreteAndOthers_corrosionOfSteel_remarks:
                  formdataa.parapet_steelAndConcreteAndOthers_corrosionOfSteel_remarks ||
                  "",
                parapet_steelAndConcreteAndOthers_corrosionOfSteel_rod:
                  formdataa.parapet_steelAndConcreteAndOthers_corrosionOfSteel_rod ||
                  "",
                parapet_steelAndConcreteAndOthers_cracksAtConcrete_tick:
                  formdataa.parapet_steelAndConcreteAndOthers_cracksAtConcrete_tick ||
                  false,
                parapet_steelAndConcreteAndOthers_cracksAtConcrete_severity:
                  formdataa.parapet_steelAndConcreteAndOthers_cracksAtConcrete_severity ||
                  0,
                parapet_steelAndConcreteAndOthers_cracksAtConcrete_pctgAff1:
                  formdataa.parapet_steelAndConcreteAndOthers_cracksAtConcrete_pctgAff1 ||
                  "",
                parapet_steelAndConcreteAndOthers_cracksAtConcrete_remarks:
                  formdataa.parapet_steelAndConcreteAndOthers_cracksAtConcrete_remarks ||
                  "",
                parapet_steelAndConcreteAndOthers_cracksAtConcrete_rod:
                  formdataa.parapet_steelAndConcreteAndOthers_cracksAtConcrete_rod ||
                  "",
                parapet_steelAndConcreteAndOthers_spalling_tick:
                  formdataa.parapet_steelAndConcreteAndOthers_spalling_tick ||
                  false,
                parapet_steelAndConcreteAndOthers_spalling_severity:
                  formdataa.parapet_steelAndConcreteAndOthers_spalling_severity ||
                  0,
                parapet_steelAndConcreteAndOthers_spalling_pctgAff1:
                  formdataa.parapet_steelAndConcreteAndOthers_spalling_pctgAff1 ||
                  "",
                parapet_steelAndConcreteAndOthers_spalling_pctgAff2:
                  formdataa.parapet_steelAndConcreteAndOthers_spalling_pctgAff2 ||
                  "",
                parapet_steelAndConcreteAndOthers_spalling_remarks:
                  formdataa.parapet_steelAndConcreteAndOthers_spalling_remarks ||
                  "",
                parapet_steelAndConcreteAndOthers_spalling_rod:
                  formdataa.parapet_steelAndConcreteAndOthers_spalling_rod ||
                  "",
                parapet_steelAndConcreteAndOthers_impactDamage_tick:
                  formdataa.parapet_steelAndConcreteAndOthers_impactDamage_tick ||
                  false,
                parapet_steelAndConcreteAndOthers_impactDamage_severity:
                  formdataa.parapet_steelAndConcreteAndOthers_impactDamage_severity ||
                  0,
                parapet_steelAndConcreteAndOthers_impactDamage_pctgAff1:
                  formdataa.parapet_steelAndConcreteAndOthers_impactDamage_pctgAff1 ||
                  "",
                parapet_steelAndConcreteAndOthers_impactDamage_pctgAff2:
                  formdataa.parapet_steelAndConcreteAndOthers_impactDamage_pctgAff2 ||
                  "",
                parapet_steelAndConcreteAndOthers_impactDamage_remarks:
                  formdataa.parapet_steelAndConcreteAndOthers_impactDamage_remarks ||
                  "",
                parapet_steelAndConcreteAndOthers_impactDamage_rod:
                  formdataa.parapet_steelAndConcreteAndOthers_impactDamage_rod ||
                  "",
                parapet_steelAndConcreteAndOthers_looseConnections_tick:
                  formdataa.parapet_steelAndConcreteAndOthers_looseConnections_tick ||
                  false,
                parapet_steelAndConcreteAndOthers_looseConnections_severity:
                  formdataa.parapet_steelAndConcreteAndOthers_looseConnections_severity ||
                  0,
                parapet_steelAndConcreteAndOthers_looseConnections_pctgAff1:
                  formdataa.parapet_steelAndConcreteAndOthers_looseConnections_pctgAff1 ||
                  "",
                parapet_steelAndConcreteAndOthers_looseConnections_pctgAff2:
                  formdataa.parapet_steelAndConcreteAndOthers_looseConnections_pctgAff2 ||
                  "",
                parapet_steelAndConcreteAndOthers_looseConnections_remarks:
                  formdataa.parapet_steelAndConcreteAndOthers_looseConnections_remarks ||
                  "",
                parapet_steelAndConcreteAndOthers_looseConnections_rod:
                  formdataa.parapet_steelAndConcreteAndOthers_looseConnections_rod ||
                  "",
                surfacing__tick: formdataa.surfacing__tick || false,
                surfacing_asphalt_tick:
                  formdataa.surfacing_asphalt_tick || false,
                surfacing_concrete_tick:
                  formdataa.surfacing_concrete_tick || false,
                surfacing_asphaltAndConcrete_ratingOfMember:
                  formdataa.surfacing_asphaltAndConcrete_ratingOfMember || "",
                surfacing_asphaltAndConcrete_potHoles_tick:
                  formdataa.surfacing_asphaltAndConcrete_potHoles_tick || false,
                surfacing_asphaltAndConcrete_potHoles_severity:
                  formdataa.surfacing_asphaltAndConcrete_potHoles_severity || 0,
                surfacing_asphaltAndConcrete_potHoles_pctgAff1:
                  formdataa.surfacing_asphaltAndConcrete_potHoles_pctgAff1 ||
                  "",
                surfacing_asphaltAndConcrete_potHoles_pctgAff2:
                  formdataa.surfacing_asphaltAndConcrete_potHoles_pctgAff2 ||
                  "",
                surfacing_asphaltAndConcrete_potHoles_remarks:
                  formdataa.surfacing_asphaltAndConcrete_potHoles_remarks || "",
                surfacing_asphaltAndConcrete_potHoles_rod:
                  formdataa.surfacing_asphaltAndConcrete_potHoles_rod || "",
                surfacing_asphaltAndConcrete_wheelTrackRutting_tick:
                  formdataa.surfacing_asphaltAndConcrete_wheelTrackRutting_tick ||
                  false,
                surfacing_asphaltAndConcrete_wheelTrackRutting_severity:
                  formdataa.surfacing_asphaltAndConcrete_wheelTrackRutting_severity ||
                  0,
                surfacing_asphaltAndConcrete_wheelTrackRutting_pctgAff1:
                  formdataa.surfacing_asphaltAndConcrete_wheelTrackRutting_pctgAff1 ||
                  "",
                surfacing_asphaltAndConcrete_wheelTrackRutting_pctgAff2:
                  formdataa.surfacing_asphaltAndConcrete_wheelTrackRutting_pctgAff2 ||
                  "",
                surfacing_asphaltAndConcrete_wheelTrackRutting_remarks:
                  formdataa.surfacing_asphaltAndConcrete_wheelTrackRutting_remarks ||
                  "",
                surfacing_asphaltAndConcrete_wheelTrackRutting_rod:
                  formdataa.surfacing_asphaltAndConcrete_wheelTrackRutting_rod ||
                  "",
                surfacing_asphaltAndConcrete_lostOfBondAndDelamination_tick:
                  formdataa.surfacing_asphaltAndConcrete_lostOfBondAndDelamination_tick ||
                  false,
                surfacing_asphaltAndConcrete_lostOfBondAndDelamination_severity:
                  formdataa.surfacing_asphaltAndConcrete_lostOfBondAndDelamination_severity ||
                  0,
                surfacing_asphaltAndConcrete_lostOfBondAndDelamination_pctgAff1:
                  formdataa.surfacing_asphaltAndConcrete_lostOfBondAndDelamination_pctgAff1 ||
                  "",
                surfacing_asphaltAndConcrete_lostOfBondAndDelamination_pctgAff2:
                  formdataa.surfacing_asphaltAndConcrete_lostOfBondAndDelamination_pctgAff2 ||
                  "",
                surfacing_asphaltAndConcrete_lostOfBondAndDelamination_remarks:
                  formdataa.surfacing_asphaltAndConcrete_lostOfBondAndDelamination_remarks ||
                  "",
                surfacing_asphaltAndConcrete_lostOfBondAndDelamination_rod:
                  formdataa.surfacing_asphaltAndConcrete_lostOfBondAndDelamination_rod ||
                  "",
                surfacing_asphaltAndConcrete_rippling_tick:
                  formdataa.surfacing_asphaltAndConcrete_rippling_tick || false,
                surfacing_asphaltAndConcrete_rippling_severity:
                  formdataa.surfacing_asphaltAndConcrete_rippling_severity || 0,
                surfacing_asphaltAndConcrete_rippling_pctgAff1:
                  formdataa.surfacing_asphaltAndConcrete_rippling_pctgAff1 ||
                  "",
                surfacing_asphaltAndConcrete_rippling_remarks:
                  formdataa.surfacing_asphaltAndConcrete_rippling_remarks || "",
                surfacing_asphaltAndConcrete_rippling_rod:
                  formdataa.surfacing_asphaltAndConcrete_rippling_rod || "",
                surfacing_asphaltAndConcrete_pavementCrack_tick:
                  formdataa.surfacing_asphaltAndConcrete_pavementCrack_tick ||
                  false,
                surfacing_asphaltAndConcrete_pavementCrack_severity:
                  formdataa.surfacing_asphaltAndConcrete_pavementCrack_severity ||
                  0,
                surfacing_asphaltAndConcrete_pavementCrack_pctgAff1:
                  formdataa.surfacing_asphaltAndConcrete_pavementCrack_pctgAff1 ||
                  "",
                surfacing_asphaltAndConcrete_pavementCrack_remarks:
                  formdataa.surfacing_asphaltAndConcrete_pavementCrack_remarks ||
                  "",
                surfacing_asphaltAndConcrete_pavementCrack_rod:
                  formdataa.surfacing_asphaltAndConcrete_pavementCrack_rod ||
                  "",
                expansionJoint__tick: formdataa.expansionJoint__tick || false,
                expansionJoint_aspPlug_tick:
                  formdataa.expansionJoint_aspPlug_tick || false,
                expansionJoint_elastomeric_tick:
                  formdataa.expansionJoint_elastomeric_tick || false,
                expansionJoint_compSeal_tick:
                  formdataa.expansionJoint_compSeal_tick || false,
                expansionJoint_buried_tick:
                  formdataa.expansionJoint_buried_tick || false,
                expansionJoint_others_tick:
                  formdataa.expansionJoint_others_tick || false,
                expansionJoint_all_ratingOfMember:
                  formdataa.expansionJoint_all_ratingOfMember || "",
                expansionJoint_all_abnormalSpacing_tick:
                  formdataa.expansionJoint_all_abnormalSpacing_tick || false,
                expansionJoint_all_abnormalSpacing_severity:
                  formdataa.expansionJoint_all_abnormalSpacing_severity || 0,
                expansionJoint_all_abnormalSpacing_pctgAff1:
                  formdataa.expansionJoint_all_abnormalSpacing_pctgAff1 || "",
                expansionJoint_all_abnormalSpacing_remarks:
                  formdataa.expansionJoint_all_abnormalSpacing_remarks || "",
                expansionJoint_all_abnormalSpacing_rod:
                  formdataa.expansionJoint_all_abnormalSpacing_rod || "",
                expansionJoint_all_differenceInLevel_tick:
                  formdataa.expansionJoint_all_differenceInLevel_tick || false,
                expansionJoint_all_differenceInLevel_severity:
                  formdataa.expansionJoint_all_differenceInLevel_severity || 0,
                expansionJoint_all_differenceInLevel_pctgAff1:
                  formdataa.expansionJoint_all_differenceInLevel_pctgAff1 || "",
                expansionJoint_all_differenceInLevel_pctgAff2:
                  formdataa.expansionJoint_all_differenceInLevel_pctgAff2 || "",
                expansionJoint_all_differenceInLevel_remarks:
                  formdataa.expansionJoint_all_differenceInLevel_remarks || "",
                expansionJoint_all_differenceInLevel_rod:
                  formdataa.expansionJoint_all_differenceInLevel_rod || "",
                expansionJoint_all_waterLeak_tick:
                  formdataa.expansionJoint_all_waterLeak_tick || false,
                expansionJoint_all_waterLeak_severity:
                  formdataa.expansionJoint_all_waterLeak_severity || 0,
                expansionJoint_all_waterLeak_pctgAff1:
                  formdataa.expansionJoint_all_waterLeak_pctgAff1 || "",
                expansionJoint_all_waterLeak_pctgAff2:
                  formdataa.expansionJoint_all_waterLeak_pctgAff2 || "",
                expansionJoint_all_waterLeak_remarks:
                  formdataa.expansionJoint_all_waterLeak_remarks || "",
                expansionJoint_all_waterLeak_rod:
                  formdataa.expansionJoint_all_waterLeak_rod || "",
                expansionJoint_all_crackingAtExpJoint_tick:
                  formdataa.expansionJoint_all_crackingAtExpJoint_tick || false,
                expansionJoint_all_crackingAtExpJoint_severity:
                  formdataa.expansionJoint_all_crackingAtExpJoint_severity || 0,
                expansionJoint_all_crackingAtExpJoint_pctgAff1:
                  formdataa.expansionJoint_all_crackingAtExpJoint_pctgAff1 ||
                  "",
                expansionJoint_all_crackingAtExpJoint_pctgAff2:
                  formdataa.expansionJoint_all_crackingAtExpJoint_pctgAff2 ||
                  "",
                expansionJoint_all_crackingAtExpJoint_remarks:
                  formdataa.expansionJoint_all_crackingAtExpJoint_remarks || "",
                expansionJoint_all_crackingAtExpJoint_rod:
                  formdataa.expansionJoint_all_crackingAtExpJoint_rod || "",
                expansionJoint_all_rupture_tick:
                  formdataa.expansionJoint_all_rupture_tick || false,
                expansionJoint_all_rupture_severity:
                  formdataa.expansionJoint_all_rupture_severity || 0,
                expansionJoint_all_rupture_pctgAff1:
                  formdataa.expansionJoint_all_rupture_pctgAff1 || "",
                expansionJoint_all_rupture_pctgAff2:
                  formdataa.expansionJoint_all_rupture_pctgAff2 || "",
                expansionJoint_all_rupture_remarks:
                  formdataa.expansionJoint_all_rupture_remarks || "",
                expansionJoint_all_rupture_rod:
                  formdataa.expansionJoint_all_rupture_rod || "",
                drainPipe_tick: formdataa.drainPipe_tick || false,
                drainPipe_steel_tick: formdataa.drainPipe_steel_tick || false,
                drainPipe_pvc_tick: formdataa.drainPipe_pvc_tick || false,
                drainPipe_all_ratingOfMember:
                  formdataa.drainPipe_all_ratingOfMember || "",
                drainPipe_steelPVC_corrosionOfSteel_tick:
                  formdataa.drainPipe_steelPVC_corrosionOfSteel_tick || false,
                drainPipe_steelPVC_corrosionOfSteel_severity:
                  formdataa.drainPipe_steelPVC_corrosionOfSteel_severity || 0,
                drainPipe_steelPVC_corrosionOfSteel_pctgAff1:
                  formdataa.drainPipe_steelPVC_corrosionOfSteel_pctgAff1 || "",
                drainPipe_steelPVC_corrosionOfSteel_pctgAff2:
                  formdataa.drainPipe_steelPVC_corrosionOfSteel_pctgAff2 || "",
                drainPipe_steelPVC_corrosionOfSteel_remarks:
                  formdataa.drainPipe_steelPVC_corrosionOfSteel_remarks || "",
                drainPipe_steelPVC_corrosionOfSteel_rod:
                  formdataa.drainPipe_steelPVC_corrosionOfSteel_rod || "",
                drainPipe_steelPVC_blockedDrainage_tick:
                  formdataa.drainPipe_steelPVC_blockedDrainage_tick || false,
                drainPipe_steelPVC_blockedDrainage_severity:
                  formdataa.drainPipe_steelPVC_blockedDrainage_severity || 0,
                drainPipe_steelPVC_blockedDrainage_pctgAff1:
                  formdataa.drainPipe_steelPVC_blockedDrainage_pctgAff1 || "",
                drainPipe_steelPVC_blockedDrainage_pctgAff2:
                  formdataa.drainPipe_steelPVC_blockedDrainage_pctgAff2 || "",
                drainPipe_steelPVC_blockedDrainage_remarks:
                  formdataa.drainPipe_steelPVC_blockedDrainage_remarks || "",
                drainPipe_steelPVC_blockedDrainage_rod:
                  formdataa.drainPipe_steelPVC_blockedDrainage_rod || "",
                drainPipe_steelPVC_waterLeak_tick:
                  formdataa.drainPipe_steelPVC_waterLeak_tick || false,
                drainPipe_steelPVC_waterLeak_severity:
                  formdataa.drainPipe_steelPVC_waterLeak_severity || 0,
                drainPipe_steelPVC_waterLeak_pctgAff1:
                  formdataa.drainPipe_steelPVC_waterLeak_pctgAff1 || "",
                drainPipe_steelPVC_waterLeak_pctgAff2:
                  formdataa.drainPipe_steelPVC_waterLeak_pctgAff2 || "",
                drainPipe_steelPVC_waterLeak_remarks:
                  formdataa.drainPipe_steelPVC_waterLeak_remarks || "",
                drainPipe_steelPVC_waterLeak_rod:
                  formdataa.drainPipe_steelPVC_waterLeak_rod || "",
                drainPipe_steelPVC_inadequatePipeLength_tick:
                  formdataa.drainPipe_steelPVC_inadequatePipeLength_tick ||
                  false,
                drainPipe_steelPVC_inadequatePipeLength_severity:
                  formdataa.drainPipe_steelPVC_inadequatePipeLength_severity ||
                  0,
                drainPipe_steelPVC_inadequatePipeLength_pctgAff1:
                  formdataa.drainPipe_steelPVC_inadequatePipeLength_pctgAff1 ||
                  "",
                drainPipe_steelPVC_inadequatePipeLength_pctgAff2:
                  formdataa.drainPipe_steelPVC_inadequatePipeLength_pctgAff2 ||
                  "",
                drainPipe_steelPVC_inadequatePipeLength_remarks:
                  formdataa.drainPipe_steelPVC_inadequatePipeLength_remarks ||
                  "",
                drainPipe_steelPVC_inadequatePipeLength_rod:
                  formdataa.drainPipe_steelPVC_inadequatePipeLength_rod || "",
                slopeProtection_tick: formdataa.slopeProtection_tick || false,
                slopeProtection_rblePitching_tick:
                  formdataa.slopeProtection_rblePitching_tick || false,
                slopeProtection_gablons_tick:
                  formdataa.slopeProtection_gablons_tick || false,
                slopeProtection_others_tick:
                  formdataa.slopeProtection_others_tick || false,
                slopeProtection_all_ratingOfMember:
                  formdataa.slopeProtection_all_ratingOfMember || "",
                slopeProtection_all_scouring_tick:
                  formdataa.slopeProtection_all_scouring_tick || false,
                slopeProtection_all_scouring_severity:
                  formdataa.slopeProtection_all_scouring_severity || 0,
                slopeProtection_all_scouring_pctgAff1:
                  formdataa.slopeProtection_all_scouring_pctgAff1 || "",
                slopeProtection_all_scouring_remarks:
                  formdataa.slopeProtection_all_scouring_remarks || "",
                slopeProtection_all_scouring_rod:
                  formdataa.slopeProtection_all_scouring_rod || "",
                slopeProtection_all_erosion_tick:
                  formdataa.slopeProtection_all_erosion_tick || false,
                slopeProtection_all_erosion_severity:
                  formdataa.slopeProtection_all_erosion_severity || 0,
                slopeProtection_all_erosion_pctgAff1:
                  formdataa.slopeProtection_all_erosion_pctgAff1 || "",
                slopeProtection_all_erosion_pctgAff2:
                  formdataa.slopeProtection_all_erosion_pctgAff2 || "",
                slopeProtection_all_erosion_remarks:
                  formdataa.slopeProtection_all_erosion_remarks || "",
                slopeProtection_all_erosion_rod:
                  formdataa.slopeProtection_all_erosion_rod || "",
                slopeProtection_all_materialLoss_tick:
                  formdataa.slopeProtection_all_materialLoss_tick || false,
                slopeProtection_all_materialLoss_severity:
                  formdataa.slopeProtection_all_materialLoss_severity || 0,
                slopeProtection_all_materialLoss_pctgAff1:
                  formdataa.slopeProtection_all_materialLoss_pctgAff1 || "",
                slopeProtection_all_materialLoss_pctgAff2:
                  formdataa.slopeProtection_all_materialLoss_pctgAff2 || "",
                slopeProtection_all_materialLoss_remarks:
                  formdataa.slopeProtection_all_materialLoss_remarks || "",
                slopeProtection_all_materialLoss_rod:
                  formdataa.slopeProtection_all_materialLoss_rod || "",
                slopeProtection_all_blank_name:
                  formdataa.slopeProtection_all_blank_name || "",
                slopeProtection_all_blank_tick:
                  formdataa.slopeProtection_all_blank_tick || false,
                slopeProtection_all_blank_severity:
                  formdataa.slopeProtection_all_blank_severity || 0,
                slopeProtection_all_blank_pctgAff1:
                  formdataa.slopeProtection_all_blank_pctgAff1 || "",
                slopeProtection_all_blank_pctgAff2:
                  formdataa.slopeProtection_all_blank_pctgAff2 || "",
                slopeProtection_all_blank_remarks:
                  formdataa.slopeProtection_all_blank_remarks || "",
                slopeProtection_all_blank_rod:
                  formdataa.slopeProtection_all_blank_rod || "",
                hydraulicCapacity_inadequateOpening_ratingOfMember:
                  formdataa.hydraulicCapacity_inadequateOpening_ratingOfMember ||
                  "",
                hydraulicCapacity_inadequateOpening_tick:
                  formdataa.hydraulicCapacity_inadequateOpening_tick || false,
                hydraulicCapacity_inadequateOpening_severity:
                  formdataa.hydraulicCapacity_inadequateOpening_severity || 0,
                hydraulicCapacity_inadequateOpening_pctgAff1:
                  formdataa.hydraulicCapacity_inadequateOpening_pctgAff1 || "",
                hydraulicCapacity_inadequateOpening_remarks:
                  formdataa.hydraulicCapacity_inadequateOpening_remarks || "",
                hydraulicCapacity_inadequateOpening_rod:
                  formdataa.hydraulicCapacity_inadequateOpening_rod || "",
                allComponentsInspected:
                  formdataa.allComponentsInspected || false,
              },
            });

            //IF UPDATE bridgeformtwo SUCCESS
            if (UPDATE_formdata_2) {
              return NextResponse.json({
                success: true,
                message: "Data updated successfully to database",
              });
            }
            //IF UPDATE bridgeformtwo FAIL
            else {
            }

            // console.log(CREATE_formdata_2);
          } catch (error) {
            console.log("error bridgeformtwo: ", error);
          }
        } else {
        }
      }
      // IF UPDATE bridgeformone FAIL
      else {
      }
    }
    //IF bridgeformone DONT EXIST
    else {
      console.log("b");

      //INSERT bridgeformone
      const CREATE_formdata = await prisma.bridgeformone.create({
        data: {
          page: formdataa.page,
          pageOfSpan: formdataa.pageOfSpan,
          routeNo: formdataa.routeNo,
          structNo: formdataa.structNo,
          bridgeName: formdataa.bridgeName,
          nameOfInspector: formdataa.nameOfInspector,
          date: formdataa.date,
          beamGirder_tick: formdataa.beamGirder_tick || false,
          beamGirder_steel_tick: formdataa.beamGirder_steel_tick || false,
          beamGirder_steel_ratingOfMember:
            formdataa.beamGirder_steel_ratingOfMember || "",
          beamGirder_steel_corrosionOfSteel_tick:
            formdataa.beamGirder_steel_corrosionOfSteel_tick || false,
          beamGirder_steel_corrosionOfSteel_severity:
            formdataa.beamGirder_steel_corrosionOfSteel_severity || 0,
          beamGirder_steel_corrosionOfSteel_pctgAff1:
            formdataa.beamGirder_steel_corrosionOfSteel_pctgAff1 || "",
          beamGirder_steel_corrosionOfSteel_pctgAff2:
            formdataa.beamGirder_steel_corrosionOfSteel_pctgAff2 || "",
          beamGirder_steel_corrosionOfSteel_remarks:
            formdataa.beamGirder_steel_corrosionOfSteel_remarks || "",
          beamGirder_steel_corrosionOfSteel_rod:
            formdataa.beamGirder_steel_corrosionOfSteel_rod || "",
          beamGirder_steel_fractureAtSteel_tick:
            formdataa.beamGirder_steel_fractureAtSteel_tick || false,
          beamGirder_steel_fractureAtSteel_severity:
            formdataa.beamGirder_steel_fractureAtSteel_severity || 0,
          beamGirder_steel_fractureAtSteel_pctgAff1:
            formdataa.beamGirder_steel_fractureAtSteel_pctgAff1 || "",
          beamGirder_steel_fractureAtSteel_remarks:
            formdataa.beamGirder_steel_fractureAtSteel_remarks || "",
          beamGirder_steel_fractureAtSteel_rod:
            formdataa.beamGirder_steel_fractureAtSteel_rod || "",
          beamGirder_steel_looseConnections_tick:
            formdataa.beamGirder_steel_looseConnections_tick || false,
          beamGirder_steel_looseConnections_severity:
            formdataa.beamGirder_steel_looseConnections_severity || 0,
          beamGirder_steel_looseConnections_pctgAff1:
            formdataa.beamGirder_steel_looseConnections_pctgAff1 || "",
          beamGirder_steel_looseConnections_pctgAff2:
            formdataa.beamGirder_steel_looseConnections_pctgAff2 || "",
          beamGirder_steel_looseConnections_remarks:
            formdataa.beamGirder_steel_looseConnections_remarks || "",
          beamGirder_steel_looseConnections_rod:
            formdataa.beamGirder_steel_looseConnections_rod || "",
          beamGirder_steel_perManentDeformations_tick:
            formdataa.beamGirder_steel_perManentDeformations_tick || false,
          beamGirder_steel_perManentDeformations_severity:
            formdataa.beamGirder_steel_perManentDeformations_severity || 0,
          beamGirder_steel_perManentDeformations_pctgAff1:
            formdataa.beamGirder_steel_perManentDeformations_pctgAff1 || "",
          beamGirder_steel_perManentDeformations_remarks:
            formdataa.beamGirder_steel_perManentDeformations_remarks || "",
          beamGirder_steel_perManentDeformations_rod:
            formdataa.beamGirder_steel_perManentDeformations_rod || "",
          beamGirder_steel_paintDeterioration_tick:
            formdataa.beamGirder_steel_paintDeterioration_tick || false,
          beamGirder_steel_paintDeterioration_severity:
            formdataa.beamGirder_steel_paintDeterioration_severity || 0,
          beamGirder_steel_paintDeterioration_pctgAff1:
            formdataa.beamGirder_steel_paintDeterioration_pctgAff1 || "",
          beamGirder_steel_paintDeterioration_pctgAff2:
            formdataa.beamGirder_steel_paintDeterioration_pctgAff2 || "",
          beamGirder_steel_paintDeterioration_remarks:
            formdataa.beamGirder_steel_paintDeterioration_remarks || "",
          beamGirder_steel_paintDeterioration_rod:
            formdataa.beamGirder_steel_paintDeterioration_rod || "",
          beamGirder_steel_abnormalVibration_tick:
            formdataa.beamGirder_steel_abnormalVibration_tick || false,
          beamGirder_steel_abnormalVibration_severity:
            formdataa.beamGirder_steel_abnormalVibration_severity || 0,
          beamGirder_steel_abnormalVibration_pctgAff1:
            formdataa.beamGirder_steel_abnormalVibration_pctgAff1 || "",
          beamGirder_steel_abnormalVibration_remarks:
            formdataa.beamGirder_steel_abnormalVibration_remarks || "",
          beamGirder_steel_abnormalVibration_rod:
            formdataa.beamGirder_steel_abnormalVibration_rod || "",
          beamGirder_steel_abnormalNoise_tick:
            formdataa.beamGirder_steel_abnormalNoise_tick || false,
          beamGirder_steel_abnormalNoise_severity:
            formdataa.beamGirder_steel_abnormalNoise_severity || 0,
          beamGirder_steel_abnormalNoise_pctgAff1:
            formdataa.beamGirder_steel_abnormalNoise_pctgAff1 || "",
          beamGirder_steel_abnormalNoise_remarks:
            formdataa.beamGirder_steel_abnormalNoise_remarks || "",
          beamGirder_steel_abnormalNoise_rod:
            formdataa.beamGirder_steel_abnormalNoise_rod || "",
          beamGirder_pConcrete_tick:
            formdataa.beamGirder_pConcrete_tick || false,
          beamGirder_rConcrete_tick:
            formdataa.beamGirder_rConcrete_tick || false,
          beamGirder_pAndRConcrete_ratingOfMember:
            formdataa.beamGirder_pAndRConcrete_ratingOfMember || "",
          beamGirder_pAndRConcrete_surfaceDefect_tick:
            formdataa.beamGirder_pAndRConcrete_surfaceDefect_tick || false,
          beamGirder_pAndRConcrete_surfaceDefect_severity:
            formdataa.beamGirder_pAndRConcrete_surfaceDefect_severity || 0,
          beamGirder_pAndRConcrete_surfaceDefect_pctgAff1:
            formdataa.beamGirder_pAndRConcrete_surfaceDefect_pctgAff1 || "",
          beamGirder_pAndRConcrete_surfaceDefect_pctgAff2:
            formdataa.beamGirder_pAndRConcrete_surfaceDefect_pctgAff2 || "",
          beamGirder_pAndRConcrete_surfaceDefect_remarks:
            formdataa.beamGirder_pAndRConcrete_surfaceDefect_remarks || "",
          beamGirder_pAndRConcrete_surfaceDefect_rod:
            formdataa.beamGirder_pAndRConcrete_surfaceDefect_rod || "",
          beamGirder_pAndRConcrete_cracksAtConcrete_tick:
            formdataa.beamGirder_pAndRConcrete_cracksAtConcrete_tick || false,
          beamGirder_pAndRConcrete_cracksAtConcrete_severity:
            formdataa.beamGirder_pAndRConcrete_cracksAtConcrete_severity || 0,
          beamGirder_pAndRConcrete_cracksAtConcrete_pctgAff1:
            formdataa.beamGirder_pAndRConcrete_cracksAtConcrete_pctgAff1 || "",
          beamGirder_pAndRConcrete_cracksAtConcrete_remarks:
            formdataa.beamGirder_pAndRConcrete_cracksAtConcrete_remarks || "",
          beamGirder_pAndRConcrete_cracksAtConcrete_rod:
            formdataa.beamGirder_pAndRConcrete_cracksAtConcrete_rod || "",
          beamGirder_pAndRConcrete_delamination_tick:
            formdataa.beamGirder_pAndRConcrete_delamination_tick || false,
          beamGirder_pAndRConcrete_delamination_severity:
            formdataa.beamGirder_pAndRConcrete_delamination_severity || 0,
          beamGirder_pAndRConcrete_delamination_pctgAff1:
            formdataa.beamGirder_pAndRConcrete_delamination_pctgAff1 || "",
          beamGirder_pAndRConcrete_delamination_pctgAff2:
            formdataa.beamGirder_pAndRConcrete_delamination_pctgAff2 || "",
          beamGirder_pAndRConcrete_delamination_remarks:
            formdataa.beamGirder_pAndRConcrete_delamination_remarks || "",
          beamGirder_pAndRConcrete_delamination_rod:
            formdataa.beamGirder_pAndRConcrete_delamination_rod || "",
          beamGirder_pAndRConcrete_spalling_tick:
            formdataa.beamGirder_pAndRConcrete_spalling_tick || false,
          beamGirder_pAndRConcrete_spalling_severity:
            formdataa.beamGirder_pAndRConcrete_spalling_severity || 0,
          beamGirder_pAndRConcrete_spalling_pctgAff1:
            formdataa.beamGirder_pAndRConcrete_spalling_pctgAff1 || "",
          beamGirder_pAndRConcrete_spalling_pctgAff2:
            formdataa.beamGirder_pAndRConcrete_spalling_pctgAff2 || "",
          beamGirder_pAndRConcrete_spalling_remarks:
            formdataa.beamGirder_pAndRConcrete_spalling_remarks || "",
          beamGirder_pAndRConcrete_spalling_rod:
            formdataa.beamGirder_pAndRConcrete_spalling_rod || "",
          beamGirder_pAndRConcrete_corrossionOfReinforcement_tick:
            formdataa.beamGirder_pAndRConcrete_corrossionOfReinforcement_tick ||
            false,
          beamGirder_pAndRConcrete_corrossionOfReinforcement_severity:
            formdataa.beamGirder_pAndRConcrete_corrossionOfReinforcement_severity ||
            0,
          beamGirder_pAndRConcrete_corrossionOfReinforcement_pctgAff1:
            formdataa.beamGirder_pAndRConcrete_corrossionOfReinforcement_pctgAff1 ||
            "",
          beamGirder_pAndRConcrete_corrossionOfReinforcement_pctgAff2:
            formdataa.beamGirder_pAndRConcrete_corrossionOfReinforcement_pctgAff2 ||
            "",
          beamGirder_pAndRConcrete_corrossionOfReinforcement_remarks:
            formdataa.beamGirder_pAndRConcrete_corrossionOfReinforcement_remarks ||
            "",
          beamGirder_pAndRConcrete_corrossionOfReinforcement_rod:
            formdataa.beamGirder_pAndRConcrete_corrossionOfReinforcement_rod ||
            "",
          beamGirder_pAndRConcrete_abnormalVibration_tick:
            formdataa.beamGirder_pAndRConcrete_abnormalVibration_tick || false,
          beamGirder_pAndRConcrete_abnormalVibration_severity:
            formdataa.beamGirder_pAndRConcrete_abnormalVibration_severity || 0,
          beamGirder_pAndRConcrete_abnormalVibration_pctgAff1:
            formdataa.beamGirder_pAndRConcrete_abnormalVibration_pctgAff1 || "",
          beamGirder_pAndRConcrete_abnormalVibration_remarks:
            formdataa.beamGirder_pAndRConcrete_abnormalVibration_remarks || "",
          beamGirder_pAndRConcrete_abnormalVibration_rod:
            formdataa.beamGirder_pAndRConcrete_abnormalVibration_rod || "",
          beamGirder_pAndRConcrete_abnormalMovement_tick:
            formdataa.beamGirder_pAndRConcrete_abnormalMovement_tick || false,
          beamGirder_pAndRConcrete_abnormalMovement_severity:
            formdataa.beamGirder_pAndRConcrete_abnormalMovement_severity || 0,
          beamGirder_pAndRConcrete_abnormalMovement_pctgAff1:
            formdataa.beamGirder_pAndRConcrete_abnormalMovement_pctgAff1 || "",
          beamGirder_pAndRConcrete_abnormalMovement_remarks:
            formdataa.beamGirder_pAndRConcrete_abnormalMovement_remarks || "",
          beamGirder_pAndRConcrete_abnormalMovement_rod:
            formdataa.beamGirder_pAndRConcrete_abnormalMovement_rod || "",
          deckSlab_tick: formdataa.deckSlab_tick || false,
          deckSlab_steel_tick: formdataa.deckSlab_steel_tick || false,
          deckSlab_steel_ratingOfMember:
            formdataa.deckSlab_steel_ratingOfMember || "",
          deckSlab_steel_corrosionOfSteel_tick:
            formdataa.deckSlab_steel_corrosionOfSteel_tick || false,
          deckSlab_steel_corrosionOfSteel_severity:
            formdataa.deckSlab_steel_corrosionOfSteel_severity || 0,
          deckSlab_steel_corrosionOfSteel_pctgAff1:
            formdataa.deckSlab_steel_corrosionOfSteel_pctgAff1 || "",
          deckSlab_steel_corrosionOfSteel_pctgAff2:
            formdataa.deckSlab_steel_corrosionOfSteel_pctgAff2 || "",
          deckSlab_steel_corrosionOfSteel_remarks:
            formdataa.deckSlab_steel_corrosionOfSteel_remarks || "",
          deckSlab_steel_corrosionOfSteel_rod:
            formdataa.deckSlab_steel_corrosionOfSteel_rod || "",
          deckSlab_steel_fractureAtSteel_tick:
            formdataa.deckSlab_steel_fractureAtSteel_tick || false,
          deckSlab_steel_fractureAtSteel_severity:
            formdataa.deckSlab_steel_fractureAtSteel_severity || 0,
          deckSlab_steel_fractureAtSteel_pctgAff1:
            formdataa.deckSlab_steel_fractureAtSteel_pctgAff1 || "",
          deckSlab_steel_fractureAtSteel_remarks:
            formdataa.deckSlab_steel_fractureAtSteel_remarks || "",
          deckSlab_steel_fractureAtSteel_rod:
            formdataa.deckSlab_steel_fractureAtSteel_rod || "",
          deckSlab_steel_looseConnections_tick:
            formdataa.deckSlab_steel_looseConnections_tick || false,
          deckSlab_steel_looseConnections_severity:
            formdataa.deckSlab_steel_looseConnections_severity || 0,
          deckSlab_steel_looseConnections_pctgAff1:
            formdataa.deckSlab_steel_looseConnections_pctgAff1 || "",
          deckSlab_steel_looseConnections_pctgAff2:
            formdataa.deckSlab_steel_looseConnections_pctgAff2 || "",
          deckSlab_steel_looseConnections_remarks:
            formdataa.deckSlab_steel_looseConnections_remarks || "",
          deckSlab_steel_looseConnections_rod:
            formdataa.deckSlab_steel_looseConnections_rod || "",
          deckSlab_steel_perManentDeformations_tick:
            formdataa.deckSlab_steel_perManentDeformations_tick || false,
          deckSlab_steel_perManentDeformations_severity:
            formdataa.deckSlab_steel_perManentDeformations_severity || 0,
          deckSlab_steel_perManentDeformations_pctgAff1:
            formdataa.deckSlab_steel_perManentDeformations_pctgAff1 || "",
          deckSlab_steel_perManentDeformations_remarks:
            formdataa.deckSlab_steel_perManentDeformations_remarks || "",
          deckSlab_steel_perManentDeformations_rod:
            formdataa.deckSlab_steel_perManentDeformations_rod || "",
          deckSlab_steel_waterLeak_tick:
            formdataa.deckSlab_steel_waterLeak_tick || false,
          deckSlab_steel_waterLeak_severity:
            formdataa.deckSlab_steel_waterLeak_severity || 0,
          deckSlab_steel_waterLeak_pctgAff1:
            formdataa.deckSlab_steel_waterLeak_pctgAff1 || "",
          deckSlab_steel_waterLeak_pctgAff2:
            formdataa.deckSlab_steel_waterLeak_pctgAff2 || "",
          deckSlab_steel_waterLeak_remarks:
            formdataa.deckSlab_steel_waterLeak_remarks || "",
          deckSlab_steel_waterLeak_rod:
            formdataa.deckSlab_steel_waterLeak_rod || "",
          deckSlab_steel_abnormalMovement_tick:
            formdataa.deckSlab_steel_abnormalMovement_tick || false,
          deckSlab_steel_abnormalMovement_severity:
            formdataa.deckSlab_steel_abnormalMovement_severity || 0,
          deckSlab_steel_abnormalMovement_pctgAff1:
            formdataa.deckSlab_steel_abnormalMovement_pctgAff1 || "",
          deckSlab_steel_abnormalMovement_remarks:
            formdataa.deckSlab_steel_abnormalMovement_remarks || "",
          deckSlab_steel_abnormalMovement_rod:
            formdataa.deckSlab_steel_abnormalMovement_rod || "",
          deckSlab_steel_abnormalNoise_tick:
            formdataa.deckSlab_steel_abnormalNoise_tick || false,
          deckSlab_steel_abnormalNoise_severity:
            formdataa.deckSlab_steel_abnormalNoise_severity || 0,
          deckSlab_steel_abnormalNoise_pctgAff1:
            formdataa.deckSlab_steel_abnormalNoise_pctgAff1 || "",
          deckSlab_steel_abnormalNoise_remarks:
            formdataa.deckSlab_steel_abnormalNoise_remarks || "",
          deckSlab_steel_abnormalNoise_rod:
            formdataa.deckSlab_steel_abnormalNoise_rod || "",
          deckSlab_concrete_tick: formdataa.deckSlab_concrete_tick || false,
          deckSlab_concrete_surfaceDefect_tick:
            formdataa.deckSlab_concrete_surfaceDefect_tick || false,
          deckSlab_concrete_surfaceDefect_severity:
            formdataa.deckSlab_concrete_surfaceDefect_severity || 0,
          deckSlab_concrete_surfaceDefect_pctgAff1:
            formdataa.deckSlab_concrete_surfaceDefect_pctgAff1 || "",
          deckSlab_concrete_abnormalNoise_pctgAff2:
            formdataa.deckSlab_concrete_abnormalNoise_pctgAff2 || "",
          deckSlab_concrete_surfaceDefect_remarks:
            formdataa.deckSlab_concrete_surfaceDefect_remarks || "",
          deckSlab_concrete_surfaceDefect_rod:
            formdataa.deckSlab_concrete_surfaceDefect_rod || "",
          deckSlab_concrete_cracksAtConcrete_tick:
            formdataa.deckSlab_concrete_cracksAtConcrete_tick || false,
          deckSlab_concrete_cracksAtConcrete_severity:
            formdataa.deckSlab_concrete_cracksAtConcrete_severity || 0,
          deckSlab_concrete_cracksAtConcrete_pctgAff1:
            formdataa.deckSlab_concrete_cracksAtConcrete_pctgAff1 || "",
          deckSlab_concrete_cracksAtConcrete_remarks:
            formdataa.deckSlab_concrete_cracksAtConcrete_remarks || "",
          deckSlab_concrete_cracksAtConcrete_rod:
            formdataa.deckSlab_concrete_cracksAtConcrete_rod || "",
          deckSlab_concrete_delamination_tick:
            formdataa.deckSlab_concrete_delamination_tick || false,
          deckSlab_concrete_delamination_severity:
            formdataa.deckSlab_concrete_delamination_severity || 0,
          deckSlab_concrete_delamination_pctgAff1:
            formdataa.deckSlab_concrete_delamination_pctgAff1 || "",
          deckSlab_concrete_delamination_pctgAff2:
            formdataa.deckSlab_concrete_delamination_pctgAff2 || "",
          deckSlab_concrete_delamination_remarks:
            formdataa.deckSlab_concrete_delamination_remarks || "",
          deckSlab_concrete_delamination_rod:
            formdataa.deckSlab_concrete_delamination_rod || "",
          deckSlab_concrete_spalling_tick:
            formdataa.deckSlab_concrete_spalling_tick || false,
          deckSlab_concrete_spalling_severity:
            formdataa.deckSlab_concrete_spalling_severity || 0,
          deckSlab_concrete_spalling_pctgAff1:
            formdataa.deckSlab_concrete_spalling_pctgAff1 || "",
          deckSlab_concrete_spalling_pctgAff2:
            formdataa.deckSlab_concrete_spalling_pctgAff2 || "",
          deckSlab_concrete_spalling_remarks:
            formdataa.deckSlab_concrete_spalling_remarks || "",
          deckSlab_concrete_spalling_rod:
            formdataa.deckSlab_concrete_spalling_rod || "",
          deckSlab_concrete_corrosionOfReinforcement_tick:
            formdataa.deckSlab_concrete_corrosionOfReinforcement_tick || false,
          deckSlab_concrete_corrosionOfReinforcement_severity:
            formdataa.deckSlab_concrete_corrosionOfReinforcement_severity || 0,
          deckSlab_concrete_corrosionOfReinforcement_pctgAff1:
            formdataa.deckSlab_concrete_corrosionOfReinforcement_pctgAff1 || "",
          deckSlab_concrete_corrosionOfReinforcement_pctgAff2:
            formdataa.deckSlab_concrete_corrosionOfReinforcement_pctgAff2 || "",
          deckSlab_concrete_corrosionOfReinforcement_remarks:
            formdataa.deckSlab_concrete_corrosionOfReinforcement_remarks || "",
          deckSlab_concrete_corrosionOfReinforcement_rod:
            formdataa.deckSlab_concrete_corrosionOfReinforcement_rod || "",
          deckSlab_concrete_waterLeakOrFreeLime_tick:
            formdataa.deckSlab_concrete_waterLeakOrFreeLime_tick || false,
          deckSlab_concrete_waterLeakOrFreeLime_severity:
            formdataa.deckSlab_concrete_waterLeakOrFreeLime_severity || 0,
          deckSlab_concrete_waterLeakOrFreeLime_pctgAff1:
            formdataa.deckSlab_concrete_waterLeakOrFreeLime_pctgAff1 || "",
          deckSlab_concrete_waterLeakOrFreeLime_pctgAff2:
            formdataa.deckSlab_concrete_waterLeakOrFreeLime_pctgAff2 || "",
          deckSlab_concrete_waterLeakOrFreeLime_remarks:
            formdataa.deckSlab_concrete_waterLeakOrFreeLime_remarks || "",
          deckSlab_concrete_waterLeakOrFreeLime_rod:
            formdataa.deckSlab_concrete_waterLeakOrFreeLime_rod || "",
          abutment_tick: formdataa.abutment_tick || false,
          abutment_concrete_tick: formdataa.abutment_concrete_tick || false,
          abutment_masonry_tick: formdataa.abutment_masonry_tick || false,
          abutment_concreteAndMasonry_ratingOfMember:
            formdataa.abutment_concreteAndMasonry_ratingOfMember || "",
          abutment_concreteAndMasonry_surfaceDefect_tick:
            formdataa.abutment_concreteAndMasonry_surfaceDefect_tick || false,
          abutment_concreteAndMasonry_surfaceDefect_severity:
            formdataa.abutment_concreteAndMasonry_surfaceDefect_severity || 0,
          abutment_concreteAndMasonry_surfaceDefect_pctgAff1:
            formdataa.abutment_concreteAndMasonry_surfaceDefect_pctgAff1 || "",
          abutment_concreteAndMasonry_surfaceDefect_pctgAff2:
            formdataa.abutment_concreteAndMasonry_surfaceDefect_pctgAff2 || "",
          abutment_concreteAndMasonry_surfaceDefect_remarks:
            formdataa.abutment_concreteAndMasonry_surfaceDefect_remarks || "",
          abutment_concreteAndMasonry_surfaceDefect_rod:
            formdataa.abutment_concreteAndMasonry_surfaceDefect_rod || "",
          abutment_concreteAndMasonry_cracksAtConcrete_tick:
            formdataa.abutment_concreteAndMasonry_cracksAtConcrete_tick ||
            false,
          abutment_concreteAndMasonry_cracksAtConcrete_severity:
            formdataa.abutment_concreteAndMasonry_cracksAtConcrete_severity ||
            0,
          abutment_concreteAndMasonry_cracksAtConcrete_pctgAff1:
            formdataa.abutment_concreteAndMasonry_cracksAtConcrete_pctgAff1 ||
            "",
          abutment_concreteAndMasonry_cracksAtConcrete_remarks:
            formdataa.abutment_concreteAndMasonry_cracksAtConcrete_remarks ||
            "",
          abutment_concreteAndMasonry_cracksAtConcrete_rod:
            formdataa.abutment_concreteAndMasonry_cracksAtConcrete_rod || "",
          abutment_concreteAndMasonry_delamination_tick:
            formdataa.abutment_concreteAndMasonry_delamination_tick || false,
          abutment_concreteAndMasonry_delamination_severity:
            formdataa.abutment_concreteAndMasonry_delamination_severity || 0,
          abutment_concreteAndMasonry_delamination_pctgAff1:
            formdataa.abutment_concreteAndMasonry_delamination_pctgAff1 || "",
          abutment_concreteAndMasonry_delamination_pctgAff2:
            formdataa.abutment_concreteAndMasonry_delamination_pctgAff2 || "",
          abutment_concreteAndMasonry_delamination_remarks:
            formdataa.abutment_concreteAndMasonry_delamination_remarks || "",
          abutment_concreteAndMasonry_delamination_rod:
            formdataa.abutment_concreteAndMasonry_delamination_rod || "",
          abutment_concreteAndMasonry_spalling_tick:
            formdataa.abutment_concreteAndMasonry_spalling_tick || false,
          abutment_concreteAndMasonry_spalling_severity:
            formdataa.abutment_concreteAndMasonry_spalling_severity || 0,
          abutment_concreteAndMasonry_spalling_pctgAff1:
            formdataa.abutment_concreteAndMasonry_spalling_pctgAff1 || "",
          abutment_concreteAndMasonry_spalling_pctgAff2:
            formdataa.abutment_concreteAndMasonry_spalling_pctgAff2 || "",
          abutment_concreteAndMasonry_spalling_remarks:
            formdataa.abutment_concreteAndMasonry_spalling_remarks || "",
          abutment_concreteAndMasonry_spalling_rod:
            formdataa.abutment_concreteAndMasonry_spalling_rod || "",
          abutment_concreteAndMasonry_corrosionOfReinforcement_tick:
            formdataa.abutment_concreteAndMasonry_corrosionOfReinforcement_tick ||
            false,
          abutment_concreteAndMasonry_corrosionOfReinforcement_severity:
            formdataa.abutment_concreteAndMasonry_corrosionOfReinforcement_severity ||
            0,
          abutment_concreteAndMasonry_corrosionOfReinforcement_pctgAff1:
            formdataa.abutment_concreteAndMasonry_corrosionOfReinforcement_pctgAff1 ||
            "",
          abutment_concreteAndMasonry_corrosionOfReinforcement_pctgAff2:
            formdataa.abutment_concreteAndMasonry_corrosionOfReinforcement_pctgAff2 ||
            "",
          abutment_concreteAndMasonry_corrosionOfReinforcement_remarks:
            formdataa.abutment_concreteAndMasonry_corrosionOfReinforcement_remarks ||
            "",
          abutment_concreteAndMasonry_corrosionOfReinforcement_rod:
            formdataa.abutment_concreteAndMasonry_corrosionOfReinforcement_rod ||
            "",
          abutment_concreteAndMasonry_wearOrAbrasion_tick:
            formdataa.abutment_concreteAndMasonry_wearOrAbrasion_tick || false,
          abutment_concreteAndMasonry_wearOrAbrasion_severity:
            formdataa.abutment_concreteAndMasonry_wearOrAbrasion_severity || 0,
          abutment_concreteAndMasonry_wearOrAbrasion_pctgAff1:
            formdataa.abutment_concreteAndMasonry_wearOrAbrasion_pctgAff1 || "",
          abutment_concreteAndMasonry_wearOrAbrasion_pctgAff2:
            formdataa.abutment_concreteAndMasonry_wearOrAbrasion_pctgAff2 || "",
          abutment_concreteAndMasonry_wearOrAbrasion_remarks:
            formdataa.abutment_concreteAndMasonry_wearOrAbrasion_remarks || "",
          abutment_concreteAndMasonry_wearOrAbrasion_rod:
            formdataa.abutment_concreteAndMasonry_wearOrAbrasion_rod || "",
          abutment_concreteAndMasonry_materialDeterioration_tick:
            formdataa.abutment_concreteAndMasonry_materialDeterioration_tick ||
            false,
          abutment_concreteAndMasonry_materialDeterioration_severity:
            formdataa.abutment_concreteAndMasonry_materialDeterioration_severity ||
            0,
          abutment_concreteAndMasonry_materialDeterioration_pctgAff1:
            formdataa.abutment_concreteAndMasonry_materialDeterioration_pctgAff1 ||
            "",
          abutment_concreteAndMasonry_materialDeterioration_pctgAff2:
            formdataa.abutment_concreteAndMasonry_materialDeterioration_pctgAff2 ||
            "",
          abutment_concreteAndMasonry_materialDeterioration_remarks:
            formdataa.abutment_concreteAndMasonry_materialDeterioration_remarks ||
            "",
          abutment_concreteAndMasonry_materialDeterioration_rod:
            formdataa.abutment_concreteAndMasonry_materialDeterioration_rod ||
            "",
          abutment_concreteAndMasonry_tiltOrSettlement_tick:
            formdataa.abutment_concreteAndMasonry_tiltOrSettlement_tick ||
            false,
          abutment_concreteAndMasonry_tiltOrSettlement_severity:
            formdataa.abutment_concreteAndMasonry_tiltOrSettlement_severity ||
            0,
          abutment_concreteAndMasonry_tiltOrSettlement_pctgAff1:
            formdataa.abutment_concreteAndMasonry_tiltOrSettlement_pctgAff1 ||
            "",
          abutment_concreteAndMasonry_tiltOrSettlement_remarks:
            formdataa.abutment_concreteAndMasonry_tiltOrSettlement_remarks ||
            "",
          abutment_concreteAndMasonry_tiltOrSettlement_rod:
            formdataa.abutment_concreteAndMasonry_tiltOrSettlement_rod || "",
          abutment_concreteAndMasonry_scouring_tick:
            formdataa.abutment_concreteAndMasonry_scouring_tick || false,
          abutment_concreteAndMasonry_scouring_severity:
            formdataa.abutment_concreteAndMasonry_scouring_severity || 0,
          abutment_concreteAndMasonry_scouring_pctgAff1:
            formdataa.abutment_concreteAndMasonry_scouring_pctgAff1 || "",
          abutment_concreteAndMasonry_scouring_remarks:
            formdataa.abutment_concreteAndMasonry_scouring_remarks || "",
          abutment_concreteAndMasonry_scouring_rod:
            formdataa.abutment_concreteAndMasonry_scouring_rod || "",
          pierNo__tick: formdataa.pierNo__tick || false,
          pierNo_number: formdataa.pierNo_number || "",
          pierNo_concrete_tick: formdataa.pierNo_concrete_tick || false,
          pierNo_masonry_tick: formdataa.pierNo_masonry_tick || false,
          pierNo_concreteAndMasonry_ratingOfMember:
            formdataa.pierNo_concreteAndMasonry_ratingOfMember || "",
          pierNo_concreteAndMasonry_surfaceDefect_tick:
            formdataa.pierNo_concreteAndMasonry_surfaceDefect_tick || false,
          pierNo_concreteAndMasonry_surfaceDefect_severity:
            formdataa.pierNo_concreteAndMasonry_surfaceDefect_severity || 0,
          pierNo_concreteAndMasonry_surfaceDefect_pctgAff1:
            formdataa.pierNo_concreteAndMasonry_surfaceDefect_pctgAff1 || "",
          pierNo_concreteAndMasonry_surfaceDefect_pctgAff2:
            formdataa.pierNo_concreteAndMasonry_surfaceDefect_pctgAff2 || "",
          pierNo_concreteAndMasonry_surfaceDefect_remarks:
            formdataa.pierNo_concreteAndMasonry_surfaceDefect_remarks || "",
          pierNo_concreteAndMasonry_surfaceDefect_rod:
            formdataa.pierNo_concreteAndMasonry_surfaceDefect_rod || "",
          pierNo_concreteAndMasonry_cracksAtConcrete_tick:
            formdataa.pierNo_concreteAndMasonry_cracksAtConcrete_tick || false,
          pierNo_concreteAndMasonry_cracksAtConcrete_severity:
            formdataa.pierNo_concreteAndMasonry_cracksAtConcrete_severity || 0,
          pierNo_concreteAndMasonry_cracksAtConcrete_pctgAff1:
            formdataa.pierNo_concreteAndMasonry_cracksAtConcrete_pctgAff1 || "",
          pierNo_concreteAndMasonry_cracksAtConcrete_remarks:
            formdataa.pierNo_concreteAndMasonry_cracksAtConcrete_remarks || "",
          pierNo_concreteAndMasonry_cracksAtConcrete_rod:
            formdataa.pierNo_concreteAndMasonry_cracksAtConcrete_rod || "",
          pierNo_concreteAndMasonry_delamination_tick:
            formdataa.pierNo_concreteAndMasonry_delamination_tick || false,
          pierNo_concreteAndMasonry_delamination_severity:
            formdataa.pierNo_concreteAndMasonry_delamination_severity || 0,
          pierNo_concreteAndMasonry_delamination_pctgAff1:
            formdataa.pierNo_concreteAndMasonry_delamination_pctgAff1 || "",
          pierNo_concreteAndMasonry_delamination_pctgAff2:
            formdataa.pierNo_concreteAndMasonry_delamination_pctgAff2 || "",
          pierNo_concreteAndMasonry_delamination_remarks:
            formdataa.pierNo_concreteAndMasonry_delamination_remarks || "",
          pierNo_concreteAndMasonry_delamination_rod:
            formdataa.pierNo_concreteAndMasonry_delamination_rod || "",
          pierNo_concreteAndMasonry_spalling_tick:
            formdataa.pierNo_concreteAndMasonry_spalling_tick || false,
          pierNo_concreteAndMasonry_spalling_severity:
            formdataa.pierNo_concreteAndMasonry_spalling_severity || 0,
          pierNo_concreteAndMasonry_spalling_pctgAff1:
            formdataa.pierNo_concreteAndMasonry_spalling_pctgAff1 || "",
          pierNo_concreteAndMasonry_spalling_pctgAff2:
            formdataa.pierNo_concreteAndMasonry_spalling_pctgAff2 || "",
          pierNo_concreteAndMasonry_spalling_remarks:
            formdataa.pierNo_concreteAndMasonry_spalling_remarks || "",
          pierNo_concreteAndMasonry_spalling_rod:
            formdataa.pierNo_concreteAndMasonry_spalling_rod || "",
          pierNo_concreteAndMasonry_corrosionOfReinforcement_tick:
            formdataa.pierNo_concreteAndMasonry_corrosionOfReinforcement_tick ||
            false,
          pierNo_concreteAndMasonry_corrosionOfReinforcement_severity:
            formdataa.pierNo_concreteAndMasonry_corrosionOfReinforcement_severity ||
            0,
          pierNo_concreteAndMasonry_corrosionOfReinforcement_pctgAff1:
            formdataa.pierNo_concreteAndMasonry_corrosionOfReinforcement_pctgAff1 ||
            "",
          pierNo_concreteAndMasonry_corrosionOfReinforcement_pctgAff2:
            formdataa.pierNo_concreteAndMasonry_corrosionOfReinforcement_pctgAff2 ||
            "",
          pierNo_concreteAndMasonry_corrosionOfReinforcement_remarks:
            formdataa.pierNo_concreteAndMasonry_corrosionOfReinforcement_remarks ||
            "",
          pierNo_concreteAndMasonry_corrosionOfReinforcement_rod:
            formdataa.pierNo_concreteAndMasonry_corrosionOfReinforcement_rod ||
            "",
          pierNo_concreteAndMasonry_wearOrAbrasion_tick:
            formdataa.pierNo_concreteAndMasonry_wearOrAbrasion_tick || false,
          pierNo_concreteAndMasonry_wearOrAbrasion_severity:
            formdataa.pierNo_concreteAndMasonry_wearOrAbrasion_severity || 0,
          pierNo_concreteAndMasonry_wearOrAbrasion_pctgAff1:
            formdataa.pierNo_concreteAndMasonry_wearOrAbrasion_pctgAff1 || "",
          pierNo_concreteAndMasonry_wearOrAbrasion_pctgAff2:
            formdataa.pierNo_concreteAndMasonry_wearOrAbrasion_pctgAff2 || "",
          pierNo_concreteAndMasonry_wearOrAbrasion_remarks:
            formdataa.pierNo_concreteAndMasonry_wearOrAbrasion_remarks || "",
          pierNo_concreteAndMasonry_wearOrAbrasion_rod:
            formdataa.pierNo_concreteAndMasonry_wearOrAbrasion_rod || "",
          pierNo_concreteAndMasonry_materialDeterioration_tick:
            formdataa.pierNo_concreteAndMasonry_materialDeterioration_tick ||
            false,
          pierNo_concreteAndMasonry_materialDeterioration_severity:
            formdataa.pierNo_concreteAndMasonry_materialDeterioration_severity ||
            0,
          pierNo_concreteAndMasonry_materialDeterioration_pctgAff1:
            formdataa.pierNo_concreteAndMasonry_materialDeterioration_pctgAff1 ||
            "",
          pierNo_concreteAndMasonry_materialDeterioration_pctgAff2:
            formdataa.pierNo_concreteAndMasonry_materialDeterioration_pctgAff2 ||
            "",
          pierNo_concreteAndMasonry_materialDeterioration_remarks:
            formdataa.pierNo_concreteAndMasonry_materialDeterioration_remarks ||
            "",
          pierNo_concreteAndMasonry_materialDeterioration_rod:
            formdataa.pierNo_concreteAndMasonry_materialDeterioration_rod || "",
          pierNo_concreteAndMasonry_tiltOrSettlement_tick:
            formdataa.pierNo_concreteAndMasonry_tiltOrSettlement_tick || false,
          pierNo_concreteAndMasonry_tiltOrSettlement_severity:
            formdataa.pierNo_concreteAndMasonry_tiltOrSettlement_severity || 0,
          pierNo_concreteAndMasonry_tiltOrSettlement_pctgAff1:
            formdataa.pierNo_concreteAndMasonry_tiltOrSettlement_pctgAff1 || "",
          pierNo_concreteAndMasonry_tiltOrSettlement_remarks:
            formdataa.pierNo_concreteAndMasonry_tiltOrSettlement_remarks || "",
          pierNo_concreteAndMasonry_tiltOrSettlement_rod:
            formdataa.pierNo_concreteAndMasonry_tiltOrSettlement_rod || "",
          pierNo_concreteAndMasonry_scouring_tick:
            formdataa.pierNo_concreteAndMasonry_scouring_tick || false,
          pierNo_concreteAndMasonry_scouring_severity:
            formdataa.pierNo_concreteAndMasonry_scouring_severity || 0,
          pierNo_concreteAndMasonry_scouring_pctgAff1:
            formdataa.pierNo_concreteAndMasonry_scouring_pctgAff1 || "",
          pierNo_concreteAndMasonry_scouring_remarks:
            formdataa.pierNo_concreteAndMasonry_scouring_remarks || "",
          pierNo_concreteAndMasonry_scouring_rod:
            formdataa.pierNo_concreteAndMasonry_scouring_rod || "",
          projectbridgees: {
            connect: { id: Number(projectID) },
          },
        },
      });
      console.log("CREATE_formdata: ", JSON.stringify(CREATE_formdata));
      //IF INSERT bridgeformone SUCCESS
      if (CREATE_formdata) {
        console.log("c");
        try {
          // INSERT bridgeformtwo
          const CREATE_formdata_2 = await prisma.bridgeformtwo.create({
            data: {
              page: formdataa.page,
              bearing_tick: formdataa.bearing_tick || false,
              bearing_steel_tick: formdataa.bearing_steel_tick || false,
              bearing_rubber_tick: formdataa.bearing_rubber_tick || false,
              bearing_others_tick: formdataa.bearing_others_tick || false,
              bearing_steelAndRubberAndOthers_ratingOfMember:
                formdataa.bearing_steelAndRubberAndOthers_ratingOfMember || "",
              bearing_steelAndRubberAndOthers_corrosionOfSteel_tick:
                formdataa.bearing_steelAndRubberAndOthers_corrosionOfSteel_tick ||
                false,
              bearing_steelAndRubberAndOthers_corrosionOfSteel_severity:
                formdataa.bearing_steelAndRubberAndOthers_corrosionOfSteel_severity ||
                0,
              bearing_steelAndRubberAndOthers_corrosionOfSteel_pctgAff1:
                formdataa.bearing_steelAndRubberAndOthers_corrosionOfSteel_pctgAff1 ||
                "",
              bearing_steelAndRubberAndOthers_corrosionOfSteel_pctgAff2:
                formdataa.bearing_steelAndRubberAndOthers_corrosionOfSteel_pctgAff2 ||
                "",
              bearing_steelAndRubberAndOthers_corrosionOfSteel_remarks:
                formdataa.bearing_steelAndRubberAndOthers_corrosionOfSteel_remarks ||
                "",
              bearing_steelAndRubberAndOthers_corrosionOfSteel_rod:
                formdataa.bearing_steelAndRubberAndOthers_corrosionOfSteel_rod ||
                "",
              bearing_steelAndRubberAndOthers_looseConnections_tick:
                formdataa.bearing_steelAndRubberAndOthers_looseConnections_tick ||
                false,
              bearing_steelAndRubberAndOthers_looseConnections_severity:
                formdataa.bearing_steelAndRubberAndOthers_looseConnections_severity ||
                0,
              bearing_steelAndRubberAndOthers_looseConnections_pctgAff1:
                formdataa.bearing_steelAndRubberAndOthers_looseConnections_pctgAff1 ||
                "",
              bearing_steelAndRubberAndOthers_looseConnections_pctgAff2:
                formdataa.bearing_steelAndRubberAndOthers_looseConnections_pctgAff2 ||
                "",
              bearing_steelAndRubberAndOthers_looseConnections_remarks:
                formdataa.bearing_steelAndRubberAndOthers_looseConnections_remarks ||
                "",
              bearing_steelAndRubberAndOthers_looseConnections_rod:
                formdataa.bearing_steelAndRubberAndOthers_looseConnections_rod ||
                "",
              bearing_steelAndRubberAndOthers_pendingWater_tick:
                formdataa.bearing_steelAndRubberAndOthers_pendingWater_tick ||
                false,
              bearing_steelAndRubberAndOthers_pendingWater_severity:
                formdataa.bearing_steelAndRubberAndOthers_pendingWater_severity ||
                0,
              bearing_steelAndRubberAndOthers_pendingWater_pctgAff1:
                formdataa.bearing_steelAndRubberAndOthers_pendingWater_pctgAff1 ||
                "",
              bearing_steelAndRubberAndOthers_pendingWater_remarks:
                formdataa.bearing_steelAndRubberAndOthers_pendingWater_remarks ||
                "",
              bearing_steelAndRubberAndOthers_pendingWater_rod:
                formdataa.bearing_steelAndRubberAndOthers_pendingWater_rod ||
                "",
              bearing_steelAndRubberAndOthers_debrisOrVegetation_tick:
                formdataa.bearing_steelAndRubberAndOthers_debrisOrVegetation_tick ||
                false,
              bearing_steelAndRubberAndOthers_debrisOrVegetation_severity:
                formdataa.bearing_steelAndRubberAndOthers_debrisOrVegetation_severity ||
                0,
              bearing_steelAndRubberAndOthers_debrisOrVegetation_pctgAff1:
                formdataa.bearing_steelAndRubberAndOthers_debrisOrVegetation_pctgAff1 ||
                "",
              bearing_steelAndRubberAndOthers_debrisOrVegetation_remarks:
                formdataa.bearing_steelAndRubberAndOthers_debrisOrVegetation_remarks ||
                "",
              bearing_steelAndRubberAndOthers_debrisOrVegetation_rod:
                formdataa.bearing_steelAndRubberAndOthers_debrisOrVegetation_rod ||
                "",
              bearing_steelAndRubberAndOthers_abnormalBulging_tick:
                formdataa.bearing_steelAndRubberAndOthers_abnormalBulging_tick ||
                false,
              bearing_steelAndRubberAndOthers_abnormalBulging_severity:
                formdataa.bearing_steelAndRubberAndOthers_abnormalBulging_severity ||
                0,
              bearing_steelAndRubberAndOthers_abnormalBulging_pctgAff1:
                formdataa.bearing_steelAndRubberAndOthers_abnormalBulging_pctgAff1 ||
                "",
              bearing_steelAndRubberAndOthers_abnormalBulging_remarks:
                formdataa.bearing_steelAndRubberAndOthers_abnormalBulging_remarks ||
                "",
              bearing_steelAndRubberAndOthers_abnormalBulging_rod:
                formdataa.bearing_steelAndRubberAndOthers_abnormalBulging_rod ||
                "",
              bearing_steelAndRubberAndOthers_abnormalDisplacement_tick:
                formdataa.bearing_steelAndRubberAndOthers_abnormalDisplacement_tick ||
                false,
              bearing_steelAndRubberAndOthers_abnormalDisplacement_severity:
                formdataa.bearing_steelAndRubberAndOthers_abnormalDisplacement_severity ||
                0,
              bearing_steelAndRubberAndOthers_abnormalDisplacement_pctgAff1:
                formdataa.bearing_steelAndRubberAndOthers_abnormalDisplacement_pctgAff1 ||
                "",
              bearing_steelAndRubberAndOthers_abnormalDisplacement_pctgAff2:
                formdataa.bearing_steelAndRubberAndOthers_abnormalDisplacement_pctgAff2 ||
                "",
              bearing_steelAndRubberAndOthers_abnormalDisplacement_remarks:
                formdataa.bearing_steelAndRubberAndOthers_abnormalDisplacement_remarks ||
                "",
              bearing_steelAndRubberAndOthers_abnormalDisplacement_rod:
                formdataa.bearing_steelAndRubberAndOthers_abnormalDisplacement_rod ||
                "",
              parapet_tick: formdataa.parapet_tick || false,
              parapet_steel_tick: formdataa.parapet_steel_tick || false,
              parapet_concrete_tick: formdataa.parapet_concrete_tick || false,
              parapet_others_tick: formdataa.parapet_others_tick || false,
              parapet_steelAndConcreteAndOthers_ratingOfMember:
                formdataa.parapet_steelAndConcreteAndOthers_ratingOfMember ||
                "",
              parapet_steelAndConcreteAndOthers_corrosionOfSteel_tick:
                formdataa.parapet_steelAndConcreteAndOthers_corrosionOfSteel_tick ||
                false,
              parapet_steelAndConcreteAndOthers_corrosionOfSteel_severity:
                formdataa.parapet_steelAndConcreteAndOthers_corrosionOfSteel_severity ||
                0,
              parapet_steelAndConcreteAndOthers_corrosionOfSteel_pctgAff1:
                formdataa.parapet_steelAndConcreteAndOthers_corrosionOfSteel_pctgAff1 ||
                "",
              parapet_steelAndConcreteAndOthers_corrosionOfSteel_pctgAff2:
                formdataa.parapet_steelAndConcreteAndOthers_corrosionOfSteel_pctgAff2 ||
                "",
              parapet_steelAndConcreteAndOthers_corrosionOfSteel_remarks:
                formdataa.parapet_steelAndConcreteAndOthers_corrosionOfSteel_remarks ||
                "",
              parapet_steelAndConcreteAndOthers_corrosionOfSteel_rod:
                formdataa.parapet_steelAndConcreteAndOthers_corrosionOfSteel_rod ||
                "",
              parapet_steelAndConcreteAndOthers_cracksAtConcrete_tick:
                formdataa.parapet_steelAndConcreteAndOthers_cracksAtConcrete_tick ||
                false,
              parapet_steelAndConcreteAndOthers_cracksAtConcrete_severity:
                formdataa.parapet_steelAndConcreteAndOthers_cracksAtConcrete_severity ||
                0,
              parapet_steelAndConcreteAndOthers_cracksAtConcrete_pctgAff1:
                formdataa.parapet_steelAndConcreteAndOthers_cracksAtConcrete_pctgAff1 ||
                "",
              parapet_steelAndConcreteAndOthers_cracksAtConcrete_remarks:
                formdataa.parapet_steelAndConcreteAndOthers_cracksAtConcrete_remarks ||
                "",
              parapet_steelAndConcreteAndOthers_cracksAtConcrete_rod:
                formdataa.parapet_steelAndConcreteAndOthers_cracksAtConcrete_rod ||
                "",
              parapet_steelAndConcreteAndOthers_spalling_tick:
                formdataa.parapet_steelAndConcreteAndOthers_spalling_tick ||
                false,
              parapet_steelAndConcreteAndOthers_spalling_severity:
                formdataa.parapet_steelAndConcreteAndOthers_spalling_severity ||
                0,
              parapet_steelAndConcreteAndOthers_spalling_pctgAff1:
                formdataa.parapet_steelAndConcreteAndOthers_spalling_pctgAff1 ||
                "",
              parapet_steelAndConcreteAndOthers_spalling_pctgAff2:
                formdataa.parapet_steelAndConcreteAndOthers_spalling_pctgAff2 ||
                "",
              parapet_steelAndConcreteAndOthers_spalling_remarks:
                formdataa.parapet_steelAndConcreteAndOthers_spalling_remarks ||
                "",
              parapet_steelAndConcreteAndOthers_spalling_rod:
                formdataa.parapet_steelAndConcreteAndOthers_spalling_rod || "",
              parapet_steelAndConcreteAndOthers_impactDamage_tick:
                formdataa.parapet_steelAndConcreteAndOthers_impactDamage_tick ||
                false,
              parapet_steelAndConcreteAndOthers_impactDamage_severity:
                formdataa.parapet_steelAndConcreteAndOthers_impactDamage_severity ||
                0,
              parapet_steelAndConcreteAndOthers_impactDamage_pctgAff1:
                formdataa.parapet_steelAndConcreteAndOthers_impactDamage_pctgAff1 ||
                "",
              parapet_steelAndConcreteAndOthers_impactDamage_pctgAff2:
                formdataa.parapet_steelAndConcreteAndOthers_impactDamage_pctgAff2 ||
                "",
              parapet_steelAndConcreteAndOthers_impactDamage_remarks:
                formdataa.parapet_steelAndConcreteAndOthers_impactDamage_remarks ||
                "",
              parapet_steelAndConcreteAndOthers_impactDamage_rod:
                formdataa.parapet_steelAndConcreteAndOthers_impactDamage_rod ||
                "",
              parapet_steelAndConcreteAndOthers_looseConnections_tick:
                formdataa.parapet_steelAndConcreteAndOthers_looseConnections_tick ||
                false,
              parapet_steelAndConcreteAndOthers_looseConnections_severity:
                formdataa.parapet_steelAndConcreteAndOthers_looseConnections_severity ||
                0,
              parapet_steelAndConcreteAndOthers_looseConnections_pctgAff1:
                formdataa.parapet_steelAndConcreteAndOthers_looseConnections_pctgAff1 ||
                "",
              parapet_steelAndConcreteAndOthers_looseConnections_pctgAff2:
                formdataa.parapet_steelAndConcreteAndOthers_looseConnections_pctgAff2 ||
                "",
              parapet_steelAndConcreteAndOthers_looseConnections_remarks:
                formdataa.parapet_steelAndConcreteAndOthers_looseConnections_remarks ||
                "",
              parapet_steelAndConcreteAndOthers_looseConnections_rod:
                formdataa.parapet_steelAndConcreteAndOthers_looseConnections_rod ||
                "",
              surfacing__tick: formdataa.surfacing__tick || false,
              surfacing_asphalt_tick: formdataa.surfacing_asphalt_tick || false,
              surfacing_concrete_tick:
                formdataa.surfacing_concrete_tick || false,
              surfacing_asphaltAndConcrete_ratingOfMember:
                formdataa.surfacing_asphaltAndConcrete_ratingOfMember || "",
              surfacing_asphaltAndConcrete_potHoles_tick:
                formdataa.surfacing_asphaltAndConcrete_potHoles_tick || false,
              surfacing_asphaltAndConcrete_potHoles_severity:
                formdataa.surfacing_asphaltAndConcrete_potHoles_severity || 0,
              surfacing_asphaltAndConcrete_potHoles_pctgAff1:
                formdataa.surfacing_asphaltAndConcrete_potHoles_pctgAff1 || "",
              surfacing_asphaltAndConcrete_potHoles_pctgAff2:
                formdataa.surfacing_asphaltAndConcrete_potHoles_pctgAff2 || "",
              surfacing_asphaltAndConcrete_potHoles_remarks:
                formdataa.surfacing_asphaltAndConcrete_potHoles_remarks || "",
              surfacing_asphaltAndConcrete_potHoles_rod:
                formdataa.surfacing_asphaltAndConcrete_potHoles_rod || "",
              surfacing_asphaltAndConcrete_wheelTrackRutting_tick:
                formdataa.surfacing_asphaltAndConcrete_wheelTrackRutting_tick ||
                false,
              surfacing_asphaltAndConcrete_wheelTrackRutting_severity:
                formdataa.surfacing_asphaltAndConcrete_wheelTrackRutting_severity ||
                0,
              surfacing_asphaltAndConcrete_wheelTrackRutting_pctgAff1:
                formdataa.surfacing_asphaltAndConcrete_wheelTrackRutting_pctgAff1 ||
                "",
              surfacing_asphaltAndConcrete_wheelTrackRutting_pctgAff2:
                formdataa.surfacing_asphaltAndConcrete_wheelTrackRutting_pctgAff2 ||
                "",
              surfacing_asphaltAndConcrete_wheelTrackRutting_remarks:
                formdataa.surfacing_asphaltAndConcrete_wheelTrackRutting_remarks ||
                "",
              surfacing_asphaltAndConcrete_wheelTrackRutting_rod:
                formdataa.surfacing_asphaltAndConcrete_wheelTrackRutting_rod ||
                "",
              surfacing_asphaltAndConcrete_lostOfBondAndDelamination_tick:
                formdataa.surfacing_asphaltAndConcrete_lostOfBondAndDelamination_tick ||
                false,
              surfacing_asphaltAndConcrete_lostOfBondAndDelamination_severity:
                formdataa.surfacing_asphaltAndConcrete_lostOfBondAndDelamination_severity ||
                0,
              surfacing_asphaltAndConcrete_lostOfBondAndDelamination_pctgAff1:
                formdataa.surfacing_asphaltAndConcrete_lostOfBondAndDelamination_pctgAff1 ||
                "",
              surfacing_asphaltAndConcrete_lostOfBondAndDelamination_pctgAff2:
                formdataa.surfacing_asphaltAndConcrete_lostOfBondAndDelamination_pctgAff2 ||
                "",
              surfacing_asphaltAndConcrete_lostOfBondAndDelamination_remarks:
                formdataa.surfacing_asphaltAndConcrete_lostOfBondAndDelamination_remarks ||
                "",
              surfacing_asphaltAndConcrete_lostOfBondAndDelamination_rod:
                formdataa.surfacing_asphaltAndConcrete_lostOfBondAndDelamination_rod ||
                "",
              surfacing_asphaltAndConcrete_rippling_tick:
                formdataa.surfacing_asphaltAndConcrete_rippling_tick || false,
              surfacing_asphaltAndConcrete_rippling_severity:
                formdataa.surfacing_asphaltAndConcrete_rippling_severity || 0,
              surfacing_asphaltAndConcrete_rippling_pctgAff1:
                formdataa.surfacing_asphaltAndConcrete_rippling_pctgAff1 || "",
              surfacing_asphaltAndConcrete_rippling_remarks:
                formdataa.surfacing_asphaltAndConcrete_rippling_remarks || "",
              surfacing_asphaltAndConcrete_rippling_rod:
                formdataa.surfacing_asphaltAndConcrete_rippling_rod || "",
              surfacing_asphaltAndConcrete_pavementCrack_tick:
                formdataa.surfacing_asphaltAndConcrete_pavementCrack_tick ||
                false,
              surfacing_asphaltAndConcrete_pavementCrack_severity:
                formdataa.surfacing_asphaltAndConcrete_pavementCrack_severity ||
                0,
              surfacing_asphaltAndConcrete_pavementCrack_pctgAff1:
                formdataa.surfacing_asphaltAndConcrete_pavementCrack_pctgAff1 ||
                "",
              surfacing_asphaltAndConcrete_pavementCrack_remarks:
                formdataa.surfacing_asphaltAndConcrete_pavementCrack_remarks ||
                "",
              surfacing_asphaltAndConcrete_pavementCrack_rod:
                formdataa.surfacing_asphaltAndConcrete_pavementCrack_rod || "",
              expansionJoint__tick: formdataa.expansionJoint__tick || false,
              expansionJoint_aspPlug_tick:
                formdataa.expansionJoint_aspPlug_tick || false,
              expansionJoint_elastomeric_tick:
                formdataa.expansionJoint_elastomeric_tick || false,
              expansionJoint_compSeal_tick:
                formdataa.expansionJoint_compSeal_tick || false,
              expansionJoint_buried_tick:
                formdataa.expansionJoint_buried_tick || false,
              expansionJoint_others_tick:
                formdataa.expansionJoint_others_tick || false,
              expansionJoint_all_ratingOfMember:
                formdataa.expansionJoint_all_ratingOfMember,
              expansionJoint_all_abnormalSpacing_tick:
                formdataa.expansionJoint_all_abnormalSpacing_tick || false,
              expansionJoint_all_abnormalSpacing_severity:
                formdataa.expansionJoint_all_abnormalSpacing_severity || 0,
              expansionJoint_all_abnormalSpacing_pctgAff1:
                formdataa.expansionJoint_all_abnormalSpacing_pctgAff1 || "",
              expansionJoint_all_abnormalSpacing_remarks:
                formdataa.expansionJoint_all_abnormalSpacing_remarks || "",
              expansionJoint_all_abnormalSpacing_rod:
                formdataa.expansionJoint_all_abnormalSpacing_rod || "",
              expansionJoint_all_differenceInLevel_tick:
                formdataa.expansionJoint_all_differenceInLevel_tick || false,
              expansionJoint_all_differenceInLevel_severity:
                formdataa.expansionJoint_all_differenceInLevel_severity || 0,
              expansionJoint_all_differenceInLevel_pctgAff1:
                formdataa.expansionJoint_all_differenceInLevel_pctgAff1 || "",
              expansionJoint_all_differenceInLevel_pctgAff2:
                formdataa.expansionJoint_all_differenceInLevel_pctgAff2 || "",
              expansionJoint_all_differenceInLevel_remarks:
                formdataa.expansionJoint_all_differenceInLevel_remarks || "",
              expansionJoint_all_differenceInLevel_rod:
                formdataa.expansionJoint_all_differenceInLevel_rod || "",
              expansionJoint_all_waterLeak_tick:
                formdataa.expansionJoint_all_waterLeak_tick || false,
              expansionJoint_all_waterLeak_severity:
                formdataa.expansionJoint_all_waterLeak_severity || 0,
              expansionJoint_all_waterLeak_pctgAff1:
                formdataa.expansionJoint_all_waterLeak_pctgAff1 || "",
              expansionJoint_all_waterLeak_pctgAff2:
                formdataa.expansionJoint_all_waterLeak_pctgAff2 || "",
              expansionJoint_all_waterLeak_remarks:
                formdataa.expansionJoint_all_waterLeak_remarks || "",
              expansionJoint_all_waterLeak_rod:
                formdataa.expansionJoint_all_waterLeak_rod || "",
              expansionJoint_all_crackingAtExpJoint_tick:
                formdataa.expansionJoint_all_crackingAtExpJoint_tick || false,
              expansionJoint_all_crackingAtExpJoint_severity:
                formdataa.expansionJoint_all_crackingAtExpJoint_severity || 0,
              expansionJoint_all_crackingAtExpJoint_pctgAff1:
                formdataa.expansionJoint_all_crackingAtExpJoint_pctgAff1 || "",
              expansionJoint_all_crackingAtExpJoint_pctgAff2:
                formdataa.expansionJoint_all_crackingAtExpJoint_pctgAff2 || "",
              expansionJoint_all_crackingAtExpJoint_remarks:
                formdataa.expansionJoint_all_crackingAtExpJoint_remarks || "",
              expansionJoint_all_crackingAtExpJoint_rod:
                formdataa.expansionJoint_all_crackingAtExpJoint_rod || "",
              expansionJoint_all_rupture_tick:
                formdataa.expansionJoint_all_rupture_tick || false,
              expansionJoint_all_rupture_severity:
                formdataa.expansionJoint_all_rupture_severity || 0,
              expansionJoint_all_rupture_pctgAff1:
                formdataa.expansionJoint_all_rupture_pctgAff1 || "",
              expansionJoint_all_rupture_pctgAff2:
                formdataa.expansionJoint_all_rupture_pctgAff2 || "",
              expansionJoint_all_rupture_remarks:
                formdataa.expansionJoint_all_rupture_remarks || "",
              expansionJoint_all_rupture_rod:
                formdataa.expansionJoint_all_rupture_rod || "",
              drainPipe_tick: formdataa.drainPipe_tick || false,
              drainPipe_steel_tick: formdataa.drainPipe_steel_tick || false,
              drainPipe_pvc_tick: formdataa.drainPipe_pvc_tick || false,
              drainPipe_all_ratingOfMember:
                formdataa.drainPipe_all_ratingOfMember || "",
              drainPipe_steelPVC_corrosionOfSteel_tick:
                formdataa.drainPipe_steelPVC_corrosionOfSteel_tick || false,
              drainPipe_steelPVC_corrosionOfSteel_severity:
                formdataa.drainPipe_steelPVC_corrosionOfSteel_severity || 0,
              drainPipe_steelPVC_corrosionOfSteel_pctgAff1:
                formdataa.drainPipe_steelPVC_corrosionOfSteel_pctgAff1 || "",
              drainPipe_steelPVC_corrosionOfSteel_pctgAff2:
                formdataa.drainPipe_steelPVC_corrosionOfSteel_pctgAff2 || "",
              drainPipe_steelPVC_corrosionOfSteel_remarks:
                formdataa.drainPipe_steelPVC_corrosionOfSteel_remarks || "",
              drainPipe_steelPVC_corrosionOfSteel_rod:
                formdataa.drainPipe_steelPVC_corrosionOfSteel_rod || "",
              drainPipe_steelPVC_blockedDrainage_tick:
                formdataa.drainPipe_steelPVC_blockedDrainage_tick || false,
              drainPipe_steelPVC_blockedDrainage_severity:
                formdataa.drainPipe_steelPVC_blockedDrainage_severity || 0,
              drainPipe_steelPVC_blockedDrainage_pctgAff1:
                formdataa.drainPipe_steelPVC_blockedDrainage_pctgAff1 || "",
              drainPipe_steelPVC_blockedDrainage_pctgAff2:
                formdataa.drainPipe_steelPVC_blockedDrainage_pctgAff2 || "",
              drainPipe_steelPVC_blockedDrainage_remarks:
                formdataa.drainPipe_steelPVC_blockedDrainage_remarks || "",
              drainPipe_steelPVC_blockedDrainage_rod:
                formdataa.drainPipe_steelPVC_blockedDrainage_rod || "",
              drainPipe_steelPVC_waterLeak_tick:
                formdataa.drainPipe_steelPVC_waterLeak_tick || false,
              drainPipe_steelPVC_waterLeak_severity:
                formdataa.drainPipe_steelPVC_waterLeak_severity || 0,
              drainPipe_steelPVC_waterLeak_pctgAff1:
                formdataa.drainPipe_steelPVC_waterLeak_pctgAff1 || "",
              drainPipe_steelPVC_waterLeak_pctgAff2:
                formdataa.drainPipe_steelPVC_waterLeak_pctgAff2 || "",
              drainPipe_steelPVC_waterLeak_remarks:
                formdataa.drainPipe_steelPVC_waterLeak_remarks || "",
              drainPipe_steelPVC_waterLeak_rod:
                formdataa.drainPipe_steelPVC_waterLeak_rod || "",
              drainPipe_steelPVC_inadequatePipeLength_tick:
                formdataa.drainPipe_steelPVC_inadequatePipeLength_tick || false,
              drainPipe_steelPVC_inadequatePipeLength_severity:
                formdataa.drainPipe_steelPVC_inadequatePipeLength_severity || 0,
              drainPipe_steelPVC_inadequatePipeLength_pctgAff1:
                formdataa.drainPipe_steelPVC_inadequatePipeLength_pctgAff1 ||
                "",
              drainPipe_steelPVC_inadequatePipeLength_pctgAff2:
                formdataa.drainPipe_steelPVC_inadequatePipeLength_pctgAff2 ||
                "",
              drainPipe_steelPVC_inadequatePipeLength_remarks:
                formdataa.drainPipe_steelPVC_inadequatePipeLength_remarks || "",
              drainPipe_steelPVC_inadequatePipeLength_rod:
                formdataa.drainPipe_steelPVC_inadequatePipeLength_rod || "",
              slopeProtection_tick: formdataa.slopeProtection_tick || false,
              slopeProtection_rblePitching_tick:
                formdataa.slopeProtection_rblePitching_tick || false,
              slopeProtection_gablons_tick:
                formdataa.slopeProtection_gablons_tick || false,
              slopeProtection_others_tick:
                formdataa.slopeProtection_others_tick || false,
              slopeProtection_all_ratingOfMember:
                formdataa.slopeProtection_all_ratingOfMember || "",
              slopeProtection_all_scouring_tick:
                formdataa.slopeProtection_all_scouring_tick || false,
              slopeProtection_all_scouring_severity:
                formdataa.slopeProtection_all_scouring_severity || 0,
              slopeProtection_all_scouring_pctgAff1:
                formdataa.slopeProtection_all_scouring_pctgAff1 || "",
              slopeProtection_all_scouring_remarks:
                formdataa.slopeProtection_all_scouring_remarks || "",
              slopeProtection_all_scouring_rod:
                formdataa.slopeProtection_all_scouring_rod || "",
              slopeProtection_all_erosion_tick:
                formdataa.slopeProtection_all_erosion_tick || false,
              slopeProtection_all_erosion_severity:
                formdataa.slopeProtection_all_erosion_severity || 0,
              slopeProtection_all_erosion_pctgAff1:
                formdataa.slopeProtection_all_erosion_pctgAff1 || "",
              slopeProtection_all_erosion_pctgAff2:
                formdataa.slopeProtection_all_erosion_pctgAff2 || "",
              slopeProtection_all_erosion_remarks:
                formdataa.slopeProtection_all_erosion_remarks || "",
              slopeProtection_all_erosion_rod:
                formdataa.slopeProtection_all_erosion_rod || "",
              slopeProtection_all_materialLoss_tick:
                formdataa.slopeProtection_all_materialLoss_tick || false,
              slopeProtection_all_materialLoss_severity:
                formdataa.slopeProtection_all_materialLoss_severity || 0,
              slopeProtection_all_materialLoss_pctgAff1:
                formdataa.slopeProtection_all_materialLoss_pctgAff1 || "",
              slopeProtection_all_materialLoss_pctgAff2:
                formdataa.slopeProtection_all_materialLoss_pctgAff2 || "",
              slopeProtection_all_materialLoss_remarks:
                formdataa.slopeProtection_all_materialLoss_remarks || "",
              slopeProtection_all_materialLoss_rod:
                formdataa.slopeProtection_all_materialLoss_rod || "",
              slopeProtection_all_blank_name:
                formdataa.slopeProtection_all_blank_name || "",
              slopeProtection_all_blank_tick:
                formdataa.slopeProtection_all_blank_tick || false,
              slopeProtection_all_blank_severity:
                formdataa.slopeProtection_all_blank_severity || 0,
              slopeProtection_all_blank_pctgAff1:
                formdataa.slopeProtection_all_blank_pctgAff1 || "",
              slopeProtection_all_blank_pctgAff2:
                formdataa.slopeProtection_all_blank_pctgAff2 || "",
              slopeProtection_all_blank_remarks:
                formdataa.slopeProtection_all_blank_remarks || "",
              slopeProtection_all_blank_rod:
                formdataa.slopeProtection_all_blank_rod || "",
              hydraulicCapacity_inadequateOpening_ratingOfMember:
                formdataa.hydraulicCapacity_inadequateOpening_ratingOfMember ||
                "",
              hydraulicCapacity_inadequateOpening_tick:
                formdataa.hydraulicCapacity_inadequateOpening_tick || false,
              hydraulicCapacity_inadequateOpening_severity:
                formdataa.hydraulicCapacity_inadequateOpening_severity || 0,
              hydraulicCapacity_inadequateOpening_pctgAff1:
                formdataa.hydraulicCapacity_inadequateOpening_pctgAff1 || "",
              hydraulicCapacity_inadequateOpening_remarks:
                formdataa.hydraulicCapacity_inadequateOpening_remarks || "",
              hydraulicCapacity_inadequateOpening_rod:
                formdataa.hydraulicCapacity_inadequateOpening_rod || "",
              allComponentsInspected: formdataa.allComponentsInspected || false,
              bridgeformone: {
                connect: { id: CREATE_formdata.id },
              },
            },
          });

          //IF INSERT bridgeformtwo SUCCESS
          if (CREATE_formdata_2) {
            return NextResponse.json({
              success: true,
              message: "Data saved successfully to database",
            });
          }
          //IF INSERT bridgeformtwo FAIL
          else {
          }

          // console.log(CREATE_formdata_2);
        } catch (error) {
          console.log("error bridgeformtwo: ", error);
        }
      }
      //IF INSERT bridgeformone FAIL
      else {
        return NextResponse.json({
          success: false,
          message: "Fail to Query database",
        });
      }
    }
  } catch (error: any) {
    console.log(error);

    return NextResponse.json({
      error: error.message,
    });
  }
}
