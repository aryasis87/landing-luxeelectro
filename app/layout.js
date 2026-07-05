import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["600", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata = {
  title: "LuxeElectro — Elektronik Premium untuk Hidup Mewah",
  description: "LuxeElectro: bawa kemewahan ke dalam kehidupan sehari-hari dengan pilihan gadget & home appliance terbaik.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
