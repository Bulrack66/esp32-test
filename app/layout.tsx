import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// export const dynamic = 'auto'
// export const dynamicParams = true
// export const revalidate = false
// export const fetchCache = 'auto'
// export const runtime = 'nodejs'
// export const preferredRegion = 'auto'
// export const maxDuration = 5

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Esp32 Météo",
  description: "L'application qui mesure les température",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
