import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["600", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"Organization","name":"LuxeElectro","description":"Elektronik premium","url":"https://landing-luxeelectro.vercel.app"};

export const metadata = {
  metadataBase: new URL("https://landing-luxeelectro.vercel.app"),
  title: "LuxeElectro — Elektronik Premium untuk Hidup Mewah",
  description: "LuxeElectro: bawa kemewahan ke kehidupan sehari-hari dengan pilihan gadget & home appliance premium terbaik.",
  applicationName: "LuxeElectro",
  keywords: ["elektronik premium", "gadget", "home appliance", "toko elektronik", "gadget mewah"],
  authors: [{ name: "LuxeElectro" }],
  creator: "LuxeElectro",
  publisher: "LuxeElectro",
  alternates: { canonical: "https://landing-luxeelectro.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://landing-luxeelectro.vercel.app",
    siteName: "LuxeElectro",
    title: "LuxeElectro — Elektronik Premium untuk Hidup Mewah",
    description: "LuxeElectro: bawa kemewahan ke kehidupan sehari-hari dengan pilihan gadget & home appliance premium terbaik.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "LuxeElectro — Elektronik Premium untuk Hidup Mewah" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LuxeElectro — Elektronik Premium untuk Hidup Mewah",
    description: "LuxeElectro: bawa kemewahan ke kehidupan sehari-hari dengan pilihan gadget & home appliance premium terbaik.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
