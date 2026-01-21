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
  title: "Ryo Kusnadi | Software Engineer",
  description: "Personal profile and portfolio showcasing my work and experience",
  openGraph: {
    title: "Ryo Kusnadi | Software Engineer",
    description: "Backend & distributed systems engineer focused on reliability and scale.",
    url: "https://ryokusnadi.com",
    siteName: "Ryo Kusnadi",
    images: [
      {
        url: "/main.png",
        width: 1200,
        height: 630,
        alt: "Ryo Kusnadi Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryo Kusnadi | Software Engineer",
    description: "Backend & distributed systems engineer focused on reliability and scale.",
    images: ["/main.png"],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
