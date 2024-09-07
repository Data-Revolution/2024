import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const notoSans = localFont({
  src: "./fonts/NotoSans-VariableFont_wdth,wght.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const header = localFont({
  src: "./fonts/DelaGothicOne-Regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Croc-Spot",
  description: "Crowdsourced crocodile sightings and alerts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
