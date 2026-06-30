import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description:
    "Portfolio de OUFFOUET DEXQUIS JUNIOR - Développeur Full Stack spécialisé React, Next.js, Java et Intelligence Artificielle",
  keywords: [
    "Next.js",
    "React",
    "Java",
    "Spring Boot",
    "IA",
    "Full Stack Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
