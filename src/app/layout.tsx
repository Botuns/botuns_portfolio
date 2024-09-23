import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/building-blocks/navbar";
import { ThemeProvider } from "@/components/theme-provider";

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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta name="description" content={metadata.description} /> */}
        {/* <title>{metadata.title}</title> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* <link
          rel="icon"
          href="/logo.png"
          type="image/png"    
          // sizes="<generated>"
        /> */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>{" "}
        </ThemeProvider>
      </body>
    </html>
  );
}
