import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUK, SITE, produkBySlug, rp } from '@/lib/produk';
import PanelSpek from '../../components/PanelSpek';
import Kurva from '../../components/Kurva';

export function generateStaticParams() {
  return PRODUK.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = produkBySlug(slug);
  if (!p) return {};
  return {
    title: `${p.nama} — ${p.kategori}`,
    description: `Lembar spesifikasi ${p.nama}: ${p.spek.driver}, ${p.spek.respons}, ${p.spek.berat}. ${p.ringkas}`,
    alternates: { canonical: `${SITE}/produk/${p.slug}` },
  };
}

export default async function Produk({ params }) {
  const { slug } = await params;
  const p = produkBySlug(slug);
  if (!p) notFound();
  const lain = PRODUK.filter((x) => x.slug !== p.slug);
  const ld = { '@context': 'https://schema.org', '@type': 'Product', name: p.nama, category: p.kategori, description: p.ringkas, brand: { '@type': 'Brand', name: 'Luxe' }, offers: { '@type': 'Offer', price: p.harga, priceCurrency: 'IDR' } };

  return (
    <main className="bg-slate-deep pt-16 text-lume">
      <header className="px-6 pt-16 pb-14">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <p className="spec-label text-violet-light"><Link href="/#lini" className="hover:underline">Lini Luxe</Link> · {p.kategori}</p>
            <h1 className="mt-4 text-5xl font-extrabold text-lume md:text-7xl">{p.nama}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-lume/85">{p.ringkas}</p>
          </div>
          <div className="text-left md:text-right">
            <p className="spec-num text-3xl text-lume">{rp(p.harga)}</p>
            <Link href={`/?produk=${p.slug}#pesan`} className="mt-4 inline-flex bg-violet-spec px-6 py-3.5 font-bold text-white hover:bg-violet-spec-2">Pesan uji dengar</Link>
          </div>
        </div>
      </header>

      <section aria-labelledby="spek" className="bg-slate-deep-2 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <h2 id="spek" className="spec-label mb-5 text-violet-light">Panel spesifikasi</h2>
            <PanelSpek spek={p.spek} />
          </div>
          <div>
            {p.kurva ? (
              <>
                <h2 className="spec-label mb-5 text-violet-light">Respons frekuensi</h2>
                <div className="border border-lume/12 p-6"><Kurva seri={[p]} judul={`Kurva respons frekuensi ${p.nama}`} /></div>
              </>
            ) : (
              <>
                <h2 className="spec-label mb-5 text-violet-light">Untuk perangkat mana</h2>
                <p className="border border-lume/12 p-6 leading-relaxed text-lume/85">{p.nama} tidak punya kurva respons sendiri — ia meneruskan sinyal serata mungkin (±0,5 dB). Yang berubah adalah daya dan kebersihan sinyal ke headphone Anda.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="spec-label mb-5 text-violet-light">Cocok untuk</h2>
            <ul className="space-y-3">{p.cocok.map((c) => <li key={c} className="flex gap-3 text-lg"><span aria-hidden="true" className="mt-2.5 h-1.5 w-4 shrink-0 bg-violet-light" />{c}</li>)}</ul>
          </div>
          <div>
            <h2 className="spec-label mb-5 text-violet-light">Isi kotak</h2>
            <ol className="space-y-2">{p.kotak.map((k, i) => <li key={k} className="flex gap-3 border-b border-lume/10 pb-2"><span className="spec-num text-violet-light">{String(i + 1).padStart(2, '0')}</span>{k}</li>)}</ol>
          </div>
        </div>
      </section>

      <nav aria-label="Perangkat lain" className="border-t border-lume/10 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <p className="spec-label text-violet-light">Perangkat lain</p>
            <Link href={`/bandingkan?a=${p.slug}&b=${lain[0].slug}`} className="spec-label border-b border-violet-light pb-1 text-violet-light">Bandingkan {p.nama} dengan {lain[0].nama}</Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3">
            {lain.map((x) => (
              <li key={x.slug}>
                <Link href={`/produk/${x.slug}`} className="flex items-center gap-4 border border-lume/12 p-5 hover:border-violet-light">
                  <span className="spec-num text-3xl text-violet-light">{x.kode}</span>
                  <span><span className="block font-bold">{x.nama}</span><span className="text-sm text-lume/80">{x.kategori}</span></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </main>
  );
}
