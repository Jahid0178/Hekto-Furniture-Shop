"use client";

import Header from "@/components/client/Header/Header";
import "../globals.css";
import "swiper/css";
import { Josefin_Sans } from "next/font/google";
import Footer from "@/components/client/Footer/Footer";

const josefin_sans = Josefin_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josefin_sans.className} suppressHydrationWarning={true}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
