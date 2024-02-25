import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import MyPicture from "./components/MyPicture";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tudor's blog",
  description: "Created by Tudor Domocos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-sky-950">
        <Navbar />
        <MyPicture />
        {children}
      </body>
    </html>
  );
}
