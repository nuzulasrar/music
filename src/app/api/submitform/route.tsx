import { NextResponse, NextRequest } from "next/server";
import prisma from "../../lib/prisma";

import { Prisma } from "@prisma/client";

export const revalidate = 0;

export async function GET(request: any, { params }: any) {
  try {
    const submitted_form = await prisma.submitted_form.findMany({
      // select: {
      //     createdAt: true
      // }
    });

    return new NextResponse(JSON.stringify({ submitted_form: submitted_form }));
    // return new NextResponse(JSON.stringify({ bridgelist: bridgelist }));
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }));
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get("name");
    const details = formData.get("details");
    const project_id = formData.get("project_id");
    const project_type = formData.get("project_type");
    const draw = formData.get("draw");
    const image = formData.get("image");
    const photo = formData.get("photo");
    const images_detail1 = formData.get("images_detail1");
    const images_detail2 = formData.get("images_detail2");
    const images_detail3 = formData.get("images_detail3");

    const submittedForm = await prisma.submitted_form.create({
      data: {
        formdata: String(name),
        details: String(details),
        project_id: String(project_id),
        project_type: String(project_type),
        images1: String(draw),
        images2: String(image),
        images3: String(photo),
        images_detail1: String(images_detail1),
        images_detail2: String(images_detail2),
        images_detail3: String(images_detail3),
      },
    });

    if (submittedForm) {
      return NextResponse.json({ success: "success", id: submittedForm.id });
    } else {
      return NextResponse.json({ fail: "API FAIL" });
    }
  } catch (error: any) {
    return new NextResponse(error.message);
  }
}

export async function PUT(request: NextRequest) {
  try {
    const formData = await request.formData();

    const form: any = formData.get("form");
    const id: any = formData.get("id");

    let transformform = JSON.parse(form);
    let transformid = JSON.parse(id);

    const submittedForm = await prisma.submitted_form.update({
      where: { id: transformid },
      data: {
        formdata: JSON.stringify(transformform),
      },
    });

    if (submittedForm) {
      return NextResponse.json({ success: "success" });
    } else {
      return NextResponse.json({ fail: "API FAIL" });
    }
    // return NextResponse.json({
    //   form: JSON.stringify(transformform),
    //   id: transformid,
    // });
    // return NextResponse.json({
    //   submittedForm: submittedForm,
    // });
  } catch (error: any) {
    return new NextResponse(error.message);
  }
}
