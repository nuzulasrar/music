import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export const revalidate = 0;

// export async function GET(request, { params }) {
//     // const team = params.team // '1'
//     return new NextResponse(JSON.stringify(params.industryID))
// }

export async function GET(request, { params }) {
  const { projectID } = params;
  try {
    // return NextResponse.json({ projectID });
    const submitted_form_list = await prisma.submitted_form.findMany({
      where: {
        project_id: projectID,
      },
    });

    if (submitted_form_list && submitted_form_list.length > 0) {
      return NextResponse.json({ success: true, data: submitted_form_list });
    } else {
      return NextResponse.json({ success: false, data: [] });
    }
  } catch (error) {
    return new NextResponse(error.message);
  }
}
