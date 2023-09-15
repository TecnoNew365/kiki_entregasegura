import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The SaaS Factory Demo landing page",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, expedita delectus. At obcaecati nostrum tenetur dignissimos. Accusamus eius provident earum, quod at ad harum aut aliquid explicabo deleniti eos exercitationem!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        <div className="flex flex-col space-y-16">
          <Header />
          <div className="w-full absolute z-40 g-main pt-2 font-medium h-10 text-center">
          <span>
            {" "}
            <a href="https://thesaasfactory.dev">
              Buy this boilerplate in{" "}
              <span className="text-sky-500 animate-pulse"> thesaasfactory.dev</span>
            </a>
          </span>
        </div>
          <div className="w-full   mx-auto">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
