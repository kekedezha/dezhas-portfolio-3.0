import { Metadata } from "next";
import LocalFont from "next/font/local";
import { Inter } from "next/font/google";
import "../global.css";

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'), //will need to update this to website url once obtained
  title: {
    default: "christiandezha.com",
    template: "%s | christiandezha.com"
  },
  description: "Aspiring software engineer who likes to occasionally run and lift weights.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "../favicon.ico",
  },
  twitter: {
    title: "Christian Dezha",
    card: "summary_large_image",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {  
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
      </head>
      <body
        className={`bg-black undefined`}
      >
        {children}
      </body>
    </html>
  );
}
