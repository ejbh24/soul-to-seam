import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
        className={`${inter.className} antialiased bg-sts-bg text-sts-text`}
      >
        {children}
      </body>
    </html>
  );
}
