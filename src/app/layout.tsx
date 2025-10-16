import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry"; // Corrected path
import Navbar from "@/components/Navbar"; // Import the enhanced Navbar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mapr App",
  description: "Project management tool for tradesmen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0 }}>
        <StyledComponentsRegistry>
          <Navbar /> {/* Render Navbar on all pages */}
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}