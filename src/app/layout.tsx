import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import LenisProvider from "@/components/LenisProvider";
import ScrollProgress from "@/components/ScrollProgress";
import SpotlightTracker from "@/components/SpotlightTracker";
import Toaster from "@/components/Toaster";

export const metadata: Metadata = {
  metadataBase: new URL("https://jafrienterprises.biz"),
  title: {
    default: "Jafri Enterprises | Premium Leather Manufacturing & Export — Karachi",
    template: "%s | Jafri Enterprises",
  },
  description:
    "Jafri Enterprises is an established leather tannery and exporter based in Karachi, Pakistan, since 2005. Specializing in premium leather for clothing, bags, shoes, jackets, and finished leather goods. Serving clients across Korea, Germany, China, and worldwide. Request a quote today.",
  keywords: [
    "leather manufacturer Pakistan",
    "leather exporter Karachi",
    "finished leather skins",
    "leather jackets manufacturer",
    "OEM leather manufacturing",
    "bulk leather supply",
    "B2B leather Pakistan",
    "Jafri Enterprises",
    "Korangi leather",
  ],
  authors: [{ name: "Jafri Enterprises", url: "https://jafrienterprises.biz" }],
  creator: "Jafri Enterprises",
  publisher: "Jafri Enterprises",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jafrienterprises.biz",
    siteName: "Jafri Enterprises",
    title: "Jafri Enterprises | Premium Leather Manufacturing & Export",
    description:
      "20+ years of premium leather manufacturing from Karachi. Leather skins, garments, OEM & private label. Bulk export worldwide.",
    images: [
      {
        url: "/images/hero/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "Jafri Enterprises Premium Leather Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jafri Enterprises | Premium Leather Manufacturing",
    description:
      "Karachi's premier leather manufacturer. Finished skins, garments, OEM. Bulk export worldwide.",
  },
  icons: {
    icon: [
      { url: "/images/jafri-logo.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/images/jafri-logo.svg",
    apple: "/images/jafri-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/jafri-logo.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/jafri-logo.svg" />
      </head>
      <body className="antialiased">
        <LenisProvider>
          <ScrollProgress />
          <SpotlightTracker />
          <Navbar />
          <QuoteModal />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </LenisProvider>
      </body>
    </html>
  );
}
