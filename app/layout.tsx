import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Geist,
  Geist_Mono,
  IBM_Plex_Mono,
  Instrument_Serif,
  TikTok_Sans,
} from "next/font/google";
import "./globals.css";

const sansFont = TikTok_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serifFont = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});
const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["100", "200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Analytics Tool",
  description: "Best Analytics Tool On The Interwebs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sansFont.variable} ${monoFont.variable} ${serifFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
