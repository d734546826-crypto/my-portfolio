import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sisyphus | Design Portfolio",
  description: "Crafting digital experiences with pixel perfection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} font-sans bg-mesh-gradient min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
