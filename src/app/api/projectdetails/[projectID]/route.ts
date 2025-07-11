import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export const revalidate = 0;

export async function GET(
  request: NextRequest,
  { params }: { params: { projectID: string; formID: string } }
) {
  const { projectID } = params;

  try {
    const READ_ProjectBridgeDetail = await prisma.projectBridge.findFirst({
      where: { id: Number(projectID) },
    });

    if (READ_ProjectBridgeDetail) {
      return NextResponse.json({
        success: true,
        data: READ_ProjectBridgeDetail,
      });
    } else {
      return NextResponse.json({
        success: false,
        error: "Could not find project in database.",
      });
    }
  } catch (error: any) {
    console.log(error);

    return NextResponse.json({
      error: error.message,
    });
  }
}
