import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

export async function POST(req: Request) {
  try {
    const items = await req.json();

    if (!Array.isArray(items)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    // Use a transaction so ALL updates succeed or fail together
    await prisma.$transaction(
      items.map((item) =>
        prisma.bridgeuploadedfiles.update({
          where: { id: item.id },
          data: {
            location: item.location,
            mappingTagNo: item.mappingTagNo,
            description: item.description,
            remarks: item.remarks,
            categorytype: item.categorytype,
            customdatetime: item.customdatetime,
            position: Number(item.position),
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
