import { Manrope, Inter } from "next/font/google";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["600", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"Store","name":"LuxeElectro","description":"Toko audio pribadi dengan lini produk Luxe","url":"https://landing-luxeelectro.vercel.app"};

export const metadata = {
  metadataBase: new URL("https://landing-luxeelectro.vercel.app"),
  title: { default: "LuxeElectro — Audio dengan Spesifikasi yang Ditulis Lengkap", template: "%s — LuxeElectro" },
  description: "LuxeElectro: headphone, earphone, DAC, dan speaker meja lini Luxe dengan lembar spesifikasi lengkap, kurva respons frekuensi, dan uji dengar 14 hari di rumah.",
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
    title: "LuxeElectro — Audio dengan Spesifikasi yang Ditulis Lengkap",
    description: "LuxeElectro: headphone, earphone, DAC, dan speaker meja lini Luxe dengan lembar spesifikasi lengkap, kurva respons frekuensi, dan uji dengar 14 hari di rumah.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "LuxeElectro — Audio dengan Spesifikasi yang Ditulis Lengkap" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LuxeElectro — Audio dengan Spesifikasi yang Ditulis Lengkap",
    description: "LuxeElectro: headphone, earphone, DAC, dan speaker meja lini Luxe dengan lembar spesifikasi lengkap, kurva respons frekuensi, dan uji dengar 14 hari di rumah.",
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
        <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-violet-spec focus:px-4 focus:py-2 focus:text-white">Lompat ke konten</a>
        <SiteHeader />
        <div id="konten">{children}</div>
        <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
