import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

import { Prisma } from "@prisma/client";

export const revalidate = 0;

export async function GET(request: any) {
  try {

    const createBrideList = await prisma.user.createMany({
      data: {

      }
    });

    // if (create && create2 && create3) {
    if (createBrideList) {
      return new NextResponse("Successfully Populate bridge_list table.");
    } else {
      return new NextResponse("Fail");
    }
  } catch (error: any) {
    return new NextResponse(error.message);
  }
}
