import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

export const revalidate = 0;

export async function POST(request: any) {
  try {
    const { id } = await request.json();

    const READ_uploaded_file = await prisma.bridgeuploadedfiles.findFirst({
      where: { id: id },
    });

    if (READ_uploaded_file) {
      const DELETE_file = await prisma.bridgeuploadedfiles.delete({
        where: {
          id: id,
        },
      });
      if (DELETE_file) {
        return NextResponse.json({
          success: true,
          msg: id,
        });
      } else {
        return NextResponse.json({
          success: false,
          error: "Fail to delete photo",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        error: "Fail to delete photo",
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    });
  }
}
