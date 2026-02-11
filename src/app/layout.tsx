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
  title: "Abhijeet Chatterjee | Data Engineer",
  description:
    "Data Engineer & Cloud Architect. Specialized in AWS, Kubernetes, and scalable data pipelines. Building intelligent financial analytics systems.",
  keywords: [
    "Data Engineer",
    "Cloud Architect",
    "AWS",
    "Kubernetes",
    "ETL",
    "Snowflake",
    "Python",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhijeet-portfolio-tau-five.vercel.app",
    title: "Abhijeet Chatterjee | Data Engineer",
    description:
      "Data Engineer & Cloud Architect specializing in AWS and scalable data pipelines",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
