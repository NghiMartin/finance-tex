import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FinanTex - Nền tảng giao dịch lý tưởng để kiếm tiền",
  description: "Nền tảng giao dịch lý tưởng để kiếm tiền",
  openGraph: {
    type: "website",
    url: "https://yourdomain.com",
    title: "FinanTex - Nền tảng giao dịch lý tưởng để kiếm tiền",
    description: "Nền tảng giao dịch lý tưởng để kiếm tiền",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "FinanTex - Nền tảng giao dịch lý tưởng để kiếm tiền",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitter",
    title: "FinanTex - Nền tảng giao dịch lý tưởng để kiếm tiền",
    description: "Nền tảng giao dịch lý tưởng để kiếm tiền",
    images: ["/favicon.png"],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
                {/* <link rel="shortcut icon" href={favicon} /> */}
                <link rel="shortcut icon" href="/favicon.png" />
      <body className={cn("min-h-screen min-w-screen", inter.className)}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
