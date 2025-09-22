import React from "react";
import "./globals.css";
import { Inter } from "next/font/google"; // Import Inter font

const inter = Inter({ subsets: ["latin"] }); // Initialize Inter font

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
