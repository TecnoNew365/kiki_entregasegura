import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kiki - Entregas Seguras",
  description:
    "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
       
        <div className="flex flex-col space-y-16">
          <Header />
          <div className="w-full   mx-auto">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
