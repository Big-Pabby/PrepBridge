import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { FooterSection } from "./components/FooterSection";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://www.prepbridgehq.com";
const SITE_NAME = "PrepBridge";
const SITE_DESCRIPTION =
  "PrepBridge is a technology-enabled academic learning institute focused on structured exam preparation, academic development, and ethical learning. Prep for GCSE, JAMB, and more.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - Structured Exam Prep & Academic Development`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "PrepBridge",
    "GCSE preparation",
    "JAMB preparation",
    "exam prep",
    "academic development",
    "online tutoring",
    "Nigeria",
    "United Kingdom",
    "structured learning",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Structured Exam Prep & Academic Development`,
    description: SITE_DESCRIPTION,
    locale: "en_GB",
    images: [
      {
        url: "/logo.svg",
        alt: `${SITE_NAME} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Structured Exam Prep & Academic Development`,
    description: SITE_DESCRIPTION,
    site: "@prepbridgehq",
    creator: "@prepbridgehq",
    images: ["/logo.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full pt-[80px] flex flex-col">
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
