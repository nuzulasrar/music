import { writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'
import fs from "fs"
import { time } from 'console';

export const revalidate = 0

// export async function POST(request: NextRequest) {
//     try {
//         const data = await request.formData()
//         const file: File | null = data.get('file') as unknown as File


//         var thisarray = []


//         return new NextResponse(JSON.stringify(typeof file))

//         // if (!file) {
//         //     return NextResponse.json({ success: false })
//         // }

//         // const bytes = await file.arrayBuffer()
//         // const buffer = Buffer.from(bytes)

//         // // With the file data in the buffer, you can do whatever you want with it.
//         // // For this, we'll just write it to the filesystem in a new location
//         // const path = "uploads" + file.name
//         // await writeFile(path, buffer)
//         // console.log(`open ${path} to see the uploaded file`)

//         // return NextResponse.json({ success: true })
//     }
//     catch (error: any) {
//         return new NextResponse(JSON.stringify(error.message))
//     }
// }

export async function POST(req: NextRequest, res: Response) {
    try {
        const formData = await req.formData();
        const formDataEntryValues = Array.from(formData.values());
        for (const formDataEntryValue of formDataEntryValues) {
            if (typeof formDataEntryValue === "object" && "arrayBuffer" in formDataEntryValue) {
                const file = formDataEntryValue as unknown as Blob;
                const buffer = Buffer.from(await file.arrayBuffer());

                const now = new Date();

                const year = now.getFullYear();
                const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
                const day = String(now.getDate()).padStart(2, '0');
                const hours = String(now.getHours()).padStart(2, '0');
                const minutes = String(now.getMinutes()).padStart(2, '0');
                const seconds = String(now.getSeconds()).padStart(2, '0');

                const formattedDateTime = `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;

                fs.writeFileSync(`src/app/uploads/${formattedDateTime}-${file.name}`, buffer);
            }
        }
        return NextResponse.json({ success: true });
    } catch (error: any) {
        // console.error('Error uploading files:', error);
        return new NextResponse(JSON.stringify(error.message))
    }
}