"use client";

import Header from "@/components/client/Header/Header";
import Footer from "@/components/client/Footer/Footer";
import { Josefin_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "../globals.css";

const josefin_sans = Josefin_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josefin_sans.className} suppressHydrationWarning={true}>
        <Toaster />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
