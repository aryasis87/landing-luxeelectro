import Link from 'next/link';
import { PRODUK } from '@/lib/produk';

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-lume/10 bg-slate-deep/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" className="font-[family-name:var(--font-manrope)] text-lg font-extrabold tracking-tight text-lume">
          Luxe<span className="text-violet-light">Electro</span>
        </Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-7 md:flex">
          {[['/#spesifikasi', 'Spesifikasi'], ['/#lini', 'Lini Luxe'], ['/bandingkan', 'Bandingkan'], ['/#perlindungan', 'Perlindungan']].map(([h, l]) => (
            <Link key={h} href={h} className="spec-label text-lume/80 hover:text-lume">{l}</Link>
          ))}
        </nav>
        <Link href="/#pesan" className="inline-flex bg-violet-spec px-4 py-2.5 text-sm font-bold text-white hover:bg-violet-spec-2">Pesan uji dengar</Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-slate-deep px-6 text-lume">
      <div className="mx-auto grid max-w-6xl gap-10 py-14 md:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,1fr))]">
        <div>
          <p className="font-[family-name:var(--font-manrope)] text-xl font-extrabold">Luxe<span className="text-violet-light">Electro</span></p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-lume/80">Audio pribadi dengan spesifikasi yang ditulis lengkap: headphone, earphone, DAC, dan speaker meja dari lini Luxe.</p>
        </div>
        <nav aria-label="Produk">
          <p className="spec-label mb-4 text-violet-light">Lembar spesifikasi</p>
          <ul className="space-y-2.5 text-sm text-lume/80">
            {PRODUK.map((p) => <li key={p.slug}><Link href={`/produk/${p.slug}`} className="hover:text-lume">{p.nama} · {p.kategori}</Link></li>)}
          </ul>
        </nav>
        <nav aria-label="Halaman">
          <p className="spec-label mb-4 text-violet-light">Halaman</p>
          <ul className="space-y-2.5 text-sm text-lume/80">
            <li><Link href="/bandingkan" className="hover:text-lume">Bandingkan perangkat</Link></li>
            <li><Link href="/#perlindungan" className="hover:text-lume">Paket perlindungan</Link></li>
            <li><Link href="/#pesan" className="hover:text-lume">Pesan uji dengar</Link></li>
          </ul>
        </nav>
      </div>
      <p className="spec-label mx-auto max-w-6xl border-t border-lume/12 py-6 leading-[1.8] text-lume/70">
        © 2026 LuxeElectro · Produk, spesifikasi, dan harga adalah contoh untuk purwarupa desain. Foto headphone: Corey Blaz (CC0).
      </p>
    </footer>
  );
}
