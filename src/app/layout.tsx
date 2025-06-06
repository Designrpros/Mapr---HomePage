import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./registry";
import Navbar from "@/components/Navbar"; // Import the Navbar component

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
      <body style={{margin: 0}}>
        <StyledComponentsRegistry>
          <Navbar /> {/* Render the Navbar */}
            {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}