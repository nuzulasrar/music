import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

export const revalidate = 0;

export async function GET(request: any) {
  try {
    const projectlist = await prisma.projectBridge.findMany();

    // if (create && create2 && create3) {
    if (projectlist) {
      return NextResponse.json({ msg: "success", projectlist: projectlist });
    } else {
      return new NextResponse("Fail");
    }
  } catch (error: any) {
    return new NextResponse(error.message);
  }
}
