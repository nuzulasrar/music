import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prestasi Perintis",
  description: "Prestasi Perintis System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className="bg-white flex-1">
        <div className="" style={{ height: "100vh" }}>
          <div className="h-[100px] flex flex-row justify-center items-center gap-x-7">
            <h2 className="font-semibold text-[2vh]">Projects</h2>
            <h2 className="font-semibold text-[2vh]">Forms</h2>
            <h2 className="font-semibold text-[2vh]">Report</h2>
            <h2 className="font-semibold text-[2vh]">Settings</h2>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
