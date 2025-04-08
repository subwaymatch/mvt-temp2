import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientInfoWrapper from "@/app/components/ClientInfoWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Misleading Tutor Viz",
  description: "A web interface for the Misleading Tutor Viz project",
};

// Disable resizing on mobile devices
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ClientInfoWrapper>{children}</ClientInfoWrapper>
      </body>
    </html>
  );
}
