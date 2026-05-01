import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sync SEO | Strategic SEO Execution Partner for Agencies",
  description: "Scaling SEO agencies with precision execution. We handle the technical, content, and link-building heavy lifting so you can focus on strategy.",
  keywords: ["SEO execution", "White label SEO", "Agency partner", "Technical SEO", "Link building execution"],
  openGraph: {
    title: "Sync SEO | Strategic SEO Execution Partner",
    description: "Scale your agency with our precision execution services.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body style={{ fontFamily: 'var(--font-inter)' }}>
        {children}
      </body>
    </html>
  );
}
