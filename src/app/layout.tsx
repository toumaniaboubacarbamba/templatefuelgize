import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fuelgize – Oil & Gas Solutions",
  description: "Reproduction front du template Fuelgize (Next.js + Tailwind).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
