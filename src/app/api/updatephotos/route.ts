import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

export async function POST(req: Request) {
  try {
    const { projectID, photosData } = await req.json();

    if (!Array.isArray(photosData)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    // Use a transaction so ALL updates succeed or fail together
    await prisma.$transaction(
      photosData.map((item) =>
        prisma.bridgeuploadedfiles.upsert({
          where: { id: item.id },
          update: {
            location: item.location,
            mappingTagNo: item.mappingTagNo,
            description: item.description,
            remarks: item.remarks,
            categorytype: item.categorytype,
            customdatetime: item.customdatetime,
            position: Number(item.position),
          },
          create: {
            projectBridgeId: Number(projectID),
            location: item.location,
            mappingTagNo: item.mappingTagNo,
            description: item.description,
            remarks: item.remarks,
            categorytype: item.categorytype,
            customdatetime: item.customdatetime,
            position: Number(item.position),
            filename: "empty",
            filetype: "empty",
          },
        }),
      ),
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update records" },
      { status: 500 },
    );
  }
}
