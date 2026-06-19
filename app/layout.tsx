import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'P.P. "Melis" | Građevinska firma',
  description:
    "P.P. Melis — građevinska firma specijalizovana za projektovanje i izvođenje stambenih i poslovnih objekata.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full overflow-x-hidden flex flex-col font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
