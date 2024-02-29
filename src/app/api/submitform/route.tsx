import { NextResponse, NextRequest } from "next/server";
import prisma from "../../lib/prisma";

import { Prisma } from "@prisma/client";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get("name");
    const details = formData.get("details");
    const project_id = formData.get("project_id");
    const project_type = formData.get("project_type");

    const submittedForm = await prisma.submitted_form.create({
      data: {
        formdata: String(name),
        details: String(details),
        project_id: String(project_id),
        project_type: String(project_type),
      },
    });

    if (submittedForm) {
      return NextResponse.json({ success: "success" });
    } else {
      return NextResponse.json({ fail: "API FAIL" });
    }
  } catch (error: any) {
    return new NextResponse(error.message);
  }
}
