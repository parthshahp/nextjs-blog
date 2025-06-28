import type { Metadata } from "next";
import { Inconsolata } from "next/font/google"
import "./globals.css";
import Topbar from "@/components/topbar";
import { ThemeProvider } from "next-themes";

const inconsolata = Inconsolata({
  variable: "--inconsolata",
  subsets: ["latin"]
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inconsolata.className}`}>
        <ThemeProvider>
          <Topbar />
          {children}
        </ThemeProvider>
      </body>
    </html >
  );
}
