import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export const revalidate = 0;

export async function GET(request: any, { params }: any) {
  try {
    const submittedForm = await prisma.submitted_form.findMany({
      where: {
        project_id: params.projectID,
      },
    });

    if (submittedForm) {
      return NextResponse.json(submittedForm);
    } else {
      return NextResponse.json({ fail: "API FAIL" });
    }
    // return new NextResponse(JSON.stringify({ bridgelist: bridgelist }));
  } catch (error: any) {
    return NextResponse.json([]);
  }

  //   return new NextResponse(JSON.stringify(params.projectID));
}
