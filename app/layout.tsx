import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/topbar";
import { ThemeProvider } from "next-themes";
import "@/styles/prism.css";
import { ViewTransitions } from "next-view-transitions";

const inconsolata = Inconsolata({
  variable: "--inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parth Shah",
  description: "Parth Shah's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head></head>
        <body className={`${inconsolata.className}`}>
          <ThemeProvider
            attribute="data-theme"
            defaultTheme="system"
            enableSystem
          >
            <Topbar />
            {children}
          </ThemeProvider>
          <SpeedInsights />
        </body>
      </html>
    </ViewTransitions>
  );
}
