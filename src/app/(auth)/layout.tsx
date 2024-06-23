import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

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
                <NavBar />
                <div className=" mt-20">
                    {children}
                </div>

            </body>
        </html>
    );
}