import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

export const revalidate = 0;

export async function PUT(request: any) {
  try {
    const { projectID, formdataa } = await request.json();

    const READ_ProjectBridgeDetail = await prisma.projectBridge.findFirst({
      where: { id: projectID },
    });

    if (READ_ProjectBridgeDetail) {
      const UPDATE_ProjectBridge = await prisma.projectBridge.update({
        where: { id: projectID },
        data: formdataa,
      });
      if (UPDATE_ProjectBridge) {
        return NextResponse.json({
          success: true,
          msg: formdataa,
        });
      } else {
        return NextResponse.json({
          success: false,
          error: "Fail to update project detail to database.",
        });
      }
    } else {
    }
  } catch (error: any) {
    console.log(error);

    return NextResponse.json({
      error: error.message,
    });
  }
}
