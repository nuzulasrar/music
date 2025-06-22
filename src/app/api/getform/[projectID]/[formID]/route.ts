import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export const revalidate = 0;

export async function GET(
  request: NextRequest,
  { params }: { params: { projectID: string; formID: string } }
) {
  const { projectID, formID } = params;

  try {

    const formdata = await prisma.bridgeformone.findUnique({
  where: {
    id: 42,
}});

    return NextResponse.json({
      message: `Fetched form ${projectID} for project ${formID}`,
      projectID,
      formID,
    });
  } catch (error: any) {
    return new NextResponse(error.message);
  }
}
