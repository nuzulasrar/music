import fs from "fs";
import path from "path";

export async function GET(request, { params }) {
  const imagePath = path.join(
    process.cwd(),
    "app",
    "uploads",
    params.imageName
  );

  fs.readFile(imagePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end("Image not found");
      return;
    }

    res.setHeader("Content-Type", "image/jpeg");
    res.end(data);
  });
}
