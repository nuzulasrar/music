// import { NextResponse, NextRequest } from "next/server";
// import prisma from "../../lib/prisma";

// import { Prisma } from "@prisma/client";

// export const revalidate = 0;

// export async function GET() {

//   try {

//     const submittedForm = await prisma.submitted_form.findMany();
    
//     if(submittedForm){
//       return NextResponse.json(submittedForm)
//     } else {
//       return NextResponse.json({fail: "API FAIL"})
//     }

//   } catch (error: any) {
//     return new NextResponse(error.message);
//   }
// }
