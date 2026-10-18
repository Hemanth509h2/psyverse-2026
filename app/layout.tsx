import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PSYVERSE 2026 | Where Psychology Meets Technology",
  description:
    "A professional psychology conclave on the evolution of therapy. 24 October 2026, 9:30 AM to 1:00 PM, G04 Auditorium, HITAM, Hyderabad.",
  openGraph: {
    title: "PSYVERSE 2026",
    description: "The Evolution of Therapy: What Has Changed, What Hasn't, and What Comes Next?",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
