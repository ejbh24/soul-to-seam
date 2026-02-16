import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soultoseam.com"),
  title: {
    default: "Soul to Seam",
    template: "%s · Soul to Seam",
  },
  description: "Adaptable, functional products designed for real life. Completed by the wearer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-sts-bg text-sts-text`}
      >
        {children}
      </body>
    </html>
  );
}
