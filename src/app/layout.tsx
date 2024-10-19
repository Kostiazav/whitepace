import type { Metadata } from "next";
import "./globals.css";
import {Inter} from 'next/font/google'
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter',
});

export const metadata: Metadata = {
  title: "Whitepace",
  description: "Whitepace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  bg-white  overflow-x-hidden`}
        >
        <Header/>
        <section className="mt-20">
        {children}
        </section>
        <Footer/>
      </body>
    </html>
  );
}
