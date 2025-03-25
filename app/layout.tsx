import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import dynamic from "next/dynamic";

// Dynamically import non-critical components
const GoogleAnalytics = dynamic(() => 
  import("@/components/shared/GoogleAnalytics"), { ssr: false }
);

// Defer loading of non-critical scripts
const DeferredScripts = dynamic(() => import('./defer-script'), { ssr: false });

// Configure font with preload: true to let Next.js handle preloading
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Pranav Sonawane",
  description: "Portfolio website of Pranav Sonawane",
  // Add additional metadata for better SEO
  keywords: ["developer", "portfolio", "web development", "frontend", "React", "Next.js"],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical CSS */}
        <link
          rel="preload"
          href="/_next/static/css/app/layout.css"
          as="style"
        />
        {/* Add preconnect for external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-852PT30F8Y" />
        <Navbar />
        {children}
        {/* <Footer /> */}
        <DeferredScripts />
      </body>
    </html>
  );
}
