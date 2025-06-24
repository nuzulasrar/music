import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

export const revalidate = 0;

export async function PUT(request: any) {
  try {
    const findProjectDetails = await prisma.projectBridge.findFirst({
      where: { id: 1 },
    });

    if (findProjectDetails) {
      return NextResponse.json({
        success: true,
        msg: "Successfully updated project details.",
      });
    } else {
      return NextResponse.json({
        success: false,
        error: "Fail to update project detail to database.",
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    });
  }
}
