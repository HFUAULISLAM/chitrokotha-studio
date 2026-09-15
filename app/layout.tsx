import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chitrokotha Studio — Visual Storytelling Studio",
  description:
    "Chitrokotha Studio is an independent visual storytelling studio creating films, photography and visual experiences for brands, people and ideas.",
  keywords: [
    "Chitrokotha Studio",
    "Video Production",
    "Cinematography",
    "Photography",
    "Video Editing",
    "Brand Film",
    "Dhaka",
    "Bangladesh",
  ],
  openGraph: {
    title: "Chitrokotha Studio — Visual Storytelling Studio",
    description:
      "Films, photography and visual stories for brands, people and ideas.",
    type: "website",
    url: "https://chitrokotha.com",
    siteName: "Chitrokotha Studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}