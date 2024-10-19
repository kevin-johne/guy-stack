import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import HydrationProvider from "../context/HydrationProvider";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Guy Stack",
  description: "Custom stack for bootstrapping my new projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HydrationProvider>{children}</HydrationProvider>
      </body>
    </html>
  );
}
