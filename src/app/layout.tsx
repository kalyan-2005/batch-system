import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/componants/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Batch-System",
  description: "Replicating the UI of uifry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-[1000px] m-auto font-clash max-lg:w-full max-sm:p-2">
          <div><Header /></div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
