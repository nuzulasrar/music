import { readFile } from "fs/promises";
import path from "path";

export async function GET(request, { params }) {
  // 1. Sanitize the filename to prevent directory traversal
  const safeImageName = path.basename(params.imageName);

  // 2. Construct the path: Root -> public -> uploads -> filename
  const imagePath = path.join(
    process.cwd(),
    "public",
    "uploads",
    safeImageName,
  );

  try {
    const data = await readFile(imagePath);

    // 3. Simple extension check for the header
    const ext = path.extname(safeImageName).toLowerCase();
    const mimeTypes = {
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".png": "image/png",
      ".webp": "image/webp",
    };

    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type": mimeTypes[ext] || "application/octet-stream",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (err) {
    return new Response("Image not found", { status: 404 });
  }
}
