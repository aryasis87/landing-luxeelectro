import { PRODUK, SITE } from "@/lib/produk";

export default function sitemap() {
  const now = new Date();
  return [
    { url: SITE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/bandingkan`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...PRODUK.map((p) => ({ url: `${SITE}/produk/${p.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 })),
  ];
}
