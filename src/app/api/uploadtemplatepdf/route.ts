import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import { time } from "console";
import prisma from "../../lib/prisma";

export const revalidate = 0;

export async function POST(req: NextRequest, res: Response) {
  console.log("ok");

  try {
    var thisfilename = "";
    var allfilename = "";
    var count = 0;
    var thistemplates = [];
    var formattedDateTime = "";

    const formData = await req.formData();
    const formDataEntryValues = Array.from(formData.values());

    const id: any = formData.get("id");

    for (const formDataEntryValue of formDataEntryValues) {
      if (
        typeof formDataEntryValue === "object" &&
        "arrayBuffer" in formDataEntryValue
      ) {
        const file = formDataEntryValue as unknown as Blob;
        const buffer: any = Buffer.from(await file.arrayBuffer());

        thisfilename = file.name;

        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
        const day = String(now.getDate()).padStart(2, "0");
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        formattedDateTime = `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;

        const lastname = `${formattedDateTime}-${count}template.jpg`;

        if (allfilename) allfilename = allfilename + ", " + lastname;
        else allfilename = allfilename + lastname;

        fs.writeFileSync(
          `public/uploads/${formattedDateTime}-${thisfilename}`,
          buffer,
        );

        // thistemplates.push(`${formattedDateTime}-${count}pdf.pdf`);

        count++;
      }
    }

    const updateForm = await prisma.bridgeuploadedfiles.create({
      data: {
        projectBridgeId: Number(id),
        filename: `${formattedDateTime}-${thisfilename}`,
        filetype: "file",
        categorytype: "",
        customdatetime: "",
        location: "",
        description: "",
        mappingTagNo: "",
        remarks: "",
      },
    });

    if (updateForm) {
      return NextResponse.json({ success: true, filename: thisfilename });
    } else {
      return NextResponse.json({ success: false });
    }

    // if (thisfilename) {
    //   return NextResponse.json({
    //     success: true,
    //     message: "File uploaded successfully",
    //     allfilename: allfilename,
    //   });
    // } else {
    //   return NextResponse.json({
    //     success: false,
    //     message: "No file uploaded",
    //   });
    // }
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
