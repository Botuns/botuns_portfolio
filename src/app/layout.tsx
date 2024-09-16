import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/building-blocks/navbar";

export const metadata: Metadata = {
  title: "Botuns Portfolio Site",
  description:
    "Hello, I'm AbdulQahar. I'm a software engineer and this is my portfolio site.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
