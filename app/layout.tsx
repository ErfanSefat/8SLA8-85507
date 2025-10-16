import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Menubar from "@/components/Menubar";
import MobileNavbar from "@/components/MobileNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "فروشگاه اینترنتی ایرانسل",
  description: "Made by Erfan Sefat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className="flex flex-col">
        <Header />
        <Menubar />
        <MobileNavbar />
        {children}
      </body>
    </html>
  );
}
