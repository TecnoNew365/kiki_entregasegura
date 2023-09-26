import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kiki - Entregas Seguras",
  description:
    "Con A&A Reserva, podrás gestionar de manera eficiente y efectiva tu calendario de citas, permitiendo a tus clientes reservar fácilmente sus turnos a través de nuestra plataforma intuitiva y amigable. Ya sea que administres una clínica médica, salón de belleza, spa o cualquier otro tipo de negocio que requiera programación, nuestro SaaS es la solución perfecta para ti.",
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
