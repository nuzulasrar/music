import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request, { params }) {
  try {
    const submitted_form = await prisma.submitted_form.findMany({
      where: {
        project_type: params.type,
      },
    });

    return new NextResponse(JSON.stringify({ submitted_form: submitted_form }));
    // return new NextResponse(JSON.stringify({ bridgelist: bridgelist }));
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }));
  }
}
