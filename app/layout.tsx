import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-6e83c692.vercel.app"),
  title: "Aurora Intelligence — AI solutions for every team",
  description:
    "Aurora Intelligence delivers human-centered AI strategy, products, and automation that accelerate decision making for modern teams.",
  openGraph: {
    title: "Aurora Intelligence",
    description:
      "Human-centered AI strategy, products, and automation that accelerate decision making for modern teams.",
    url: "https://agentic-6e83c692.vercel.app",
    siteName: "Aurora Intelligence",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Abstract representation of Aurora Intelligence"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora Intelligence — AI solutions for every team",
    description:
      "Strategize, build, and scale with an AI partner engineered for high-performing teams.",
    creator: "@aurora_ai"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${grotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
