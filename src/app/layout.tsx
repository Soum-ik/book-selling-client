import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "Book Selling Website",
  description: "Buy Sell Spi Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#A8B3CF" height={5} />
        <NavBar />
        <div className=" mt-10">
          {children}
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
