import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Menubar from "@/components/Menubar";
import MobileNavbar from "@/components/MobileNavbar";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";

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
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
