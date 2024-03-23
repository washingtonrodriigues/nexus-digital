import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/app/footer/page";
import WhatsappBtn from "@/components/ui/wppbutton";
import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexus | Agência Digital",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="shortcut icon"
          href="/nexusfavicon.png"
          type="image/x-icon"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <div className=" flex  h-full flex-col">
          <Navbar />

          <div className="relative flex-1">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
