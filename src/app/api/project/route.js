import { NextRequest, NextResponse } from "next/server";
import prisma from "../../lib/prisma";

// export async function GET(request, { params }) {
//     // const team = params.team // '1'
//     return new NextResponse(JSON.stringify(params.industryID))
// }

export const revalidate = 0;

export async function GET(request) {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        updatedAt: "desc", // 'asc' for ascending order
      },
    });

    if (projects) {
      return new NextResponse(JSON.stringify(projects));
    } else {
      return new NextResponse("Fail");
    }
  } catch (error) {
    return new NextResponse(error.message);
  }
}

export async function POST(request, response) {
  try {
    const { projectName, projectType } = await request.json();
    const createProject = await prisma.project.create({
      data: {
        project_name: projectName,
        project_type: projectType,
        location_data: "{}",
        bridge_type: "{}",
        structured_data: "{}",
      },
    });
    if (createProject) {
      return NextResponse.json({
        success: true,
        msg: "Successfully created the project.",
      });
    } else {
      return NextResponse.json({
        success: false,
        error: "Fail to create project. Please try again.",
      });
    }
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
}
