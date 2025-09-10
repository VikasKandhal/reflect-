import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({subsets:["latin"]});

export const metadata: Metadata = {
  title: "Reflct",
  description: "A Journaling app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body  className={`${inter.className}`}>
      <div className="inset-0 bg-[url('/bg.jpg')] opacity-50 fixed -z-10"  />
      <Header />
      <main className="min-h-screen">{children}</main>

      <footer className="bg-orange-300 py-12 bg-opacity-10">
        <div className="container mx-auto px-4 text-center text-gray-900">
          <p>Made with love By VikasKandhal</p>
        </div>
      </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
