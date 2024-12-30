// import { NextResponse, NextRequest } from "next/server";
// import prisma from "../../lib/prisma";

// export const revalidate = 0;

// export async function PUT(request: NextRequest) {
//   try {
//     const formData = await request.formData();

//     const imageIndex: any = formData.get("imageIndex");
//     const form: any = formData.get("form");
//     const id: any = formData.get("id");

//     let transformimageIndex = JSON.parse(imageIndex);
//     let transformform = JSON.parse(form);
//     let transformid = JSON.parse(id);

//     var submittedForm: any = undefined;

//     if (imageIndex == 1) {
//       submittedForm = await prisma.submitted_form.update({
//         where: { id: transformid },
//         data: {
//           images_detail1: JSON.stringify(transformform),
//         },
//       });
//     } else if (imageIndex == 2) {
//       submittedForm = await prisma.submitted_form.update({
//         where: { id: transformid },
//         data: {
//           images_detail2: JSON.stringify(transformform),
//         },
//       });
//     } else if (imageIndex == 3) {
//       submittedForm = await prisma.submitted_form.update({
//         where: { id: transformid },
//         data: {
//           images_detail3: JSON.stringify(transformform),
//         },
//       });
//     }

//     if (submittedForm) {
//       return NextResponse.json({ success: "success" });
//     } else {
//       return NextResponse.json({ fail: "API FAIL" });
//     }
//     // return NextResponse.json({
//     //   imageIndex: transformimageIndex,
//     //   form: transformform,
//     //   id: transformid,
//     // });
//   } catch (error: any) {
//     return new NextResponse(error.message);
//   }
// }
