import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export const revalidate = 0;

export async function GET(request: any) {
  try {
    const READ_uploaded_files = await prisma.bridgeuploadedfiles.findMany({
      orderBy: {
        position: "desc",
      },
    });

    // if (create && create2 && create3) {
    if (READ_uploaded_files) {
      return NextResponse.json({ msg: "success", dataa: READ_uploaded_files });
    } else {
      return NextResponse.json({ msg: "fail" });
    }
  } catch (error: any) {
    return new NextResponse(error.message);
  }
}
