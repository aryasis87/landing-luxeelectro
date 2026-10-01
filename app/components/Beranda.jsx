import Image from 'next/image';
import Link from 'next/link';
import { FAQ as DAFTAR, LAYANAN, PERLINDUNGAN, PRODUK, rp } from '@/lib/produk';
import PanelSpek from './PanelSpek';
import Kurva from './Kurva';

const H1 = PRODUK[0];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-deep px-6 pt-32 pb-20 text-lume md:pt-40 md:pb-28">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_30%,rgb(106_74_224/0.28),transparent_70%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <p className="spec-label text-violet-light">Lini Luxe · audio pribadi</p>
          <h1 className="mt-5 text-[2.6rem] leading-[1.04] font-extrabold text-lume sm:text-5xl lg:text-[3.6rem]">
            Angkanya ditulis lengkap. Suaranya silakan diuji di rumah.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-lume/85">
            Headphone, earphone, DAC, dan speaker meja dengan lembar spesifikasi yang tidak menyembunyikan apa pun —
            dan 14 hari untuk mendengarnya sendiri sebelum memutuskan.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href={`/produk/${H1.slug}`} className="inline-flex justify-center bg-violet-spec px-7 py-4 font-bold text-white hover:bg-violet-spec-2">
              Lembar spesifikasi {H1.nama}
            </Link>
            <Link href="/bandingkan" className="inline-flex justify-center border border-lume/30 px-7 py-4 font-bold text-lume hover:border-lume">
              Bandingkan perangkat
            </Link>
          </div>
        </div>
        <figure className="relative">
          <Image src="/images/headphones.jpg" alt="Headphone over-ear hitam tergeletak di atas meja kayu gelap" width={960} height={641} priority className="h-auto w-full" />
          <figcaption className="absolute right-4 bottom-4 left-4 grid grid-cols-3 gap-px bg-lume/15 sm:left-auto sm:w-80">
            {[['Driver', '50 mm'], ['Impedansi', '32 Ω'], ['Sensitivitas', '103 dB']].map(([k, v]) => (
              <span key={k} className="bg-slate-deep/90 p-3 backdrop-blur-sm">
                <span className="spec-label block text-violet-light">{k}</span>
                <span className="spec-num mt-1 block text-lume">{v}</span>
              </span>
            ))}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Spesifikasi() {
  return (
    <section id="spesifikasi" className="scroll-mt-16 bg-slate-deep-2 px-6 py-20 text-lume md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="spec-label text-violet-light">Panel spesifikasi · {H1.nama}</p>
            <h2 className="mt-4 text-[2rem] leading-[1.1] font-extrabold text-lume md:text-[2.7rem]">Tidak ada “suara premium”. Ada angka, dan cara membacanya.</h2>
          </div>
          <p className="spec-num text-3xl text-lume">{rp(H1.harga)}</p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <PanelSpek spek={H1.spek} />
          <div className="border border-lume/12 p-6">
            <Kurva seri={[H1]} judul={`Kurva respons frekuensi ${H1.nama}`} />
            <p className="mt-5 leading-relaxed text-lume/85">
              Bas naik sedikit di bawah 100 Hz, rata di nada tengah, dan puncak lembut di 3 kHz yang membuat vokal terdengar di depan.
              Nada tinggi turun pelan sesudah 8 kHz supaya tidak melelahkan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Lini() {
  return (
    <section id="lini" className="scroll-mt-16 bg-lume px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="spec-label text-violet-spec">Lini Luxe</p>
        <h2 className="mt-4 max-w-2xl text-[2rem] leading-[1.1] font-extrabold text-slate-deep md:text-[2.7rem]">Empat perangkat, satu lembar spesifikasi masing-masing</h2>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUK.map((p) => (
            <li key={p.slug}>
              <Link href={`/produk/${p.slug}`} className="group flex h-full flex-col border border-slate-deep/12 bg-white p-6 transition-colors hover:border-violet-spec">
                <span className="spec-num text-5xl text-violet-spec">{p.kode}</span>
                <h3 className="mt-4 text-xl font-extrabold text-slate-deep">{p.nama}</h3>
                <span className="spec-label mt-1 text-lume-dim">{p.kategori}</span>
                <span className="mt-4 text-sm leading-relaxed text-lume-dim">{p.ringkas}</span>
                <span className="spec-num mt-auto pt-6 text-lg text-slate-deep">{rp(p.harga)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Layanan() {
  return (
    <section className="bg-white px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {LAYANAN.map(([j, d], i) => (
          <div key={j} className="border-t-2 border-violet-spec pt-5">
            <span className="spec-label text-violet-spec">0{i + 1}</span>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-deep">{j}</h2>
            <p className="mt-3 leading-relaxed text-lume-dim">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Perlindungan() {
  return (
    <section id="perlindungan" className="scroll-mt-16 bg-lume px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="spec-label text-violet-spec">Paket perlindungan</p>
        <h2 className="mt-4 max-w-2xl text-[2rem] leading-[1.1] font-extrabold text-slate-deep md:text-[2.7rem]">Garansi bawaan dua tahun. Tambahan, kalau perlu.</h2>
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {PERLINDUNGAN.map((p) => (
            <li key={p.nama} className={`flex flex-col p-7 ${p.unggulan ? 'bg-slate-deep text-lume' : 'border border-slate-deep/12 bg-white'}`}>
              <h3 className={`text-xl font-extrabold ${p.unggulan ? 'text-lume' : 'text-slate-deep'}`}>{p.nama}</h3>
              <p className={`spec-num mt-3 text-3xl ${p.unggulan ? 'text-lume' : 'text-slate-deep'}`}>{rp(p.harga)}</p>
              <ul className={`mt-6 space-y-2.5 border-t pt-6 text-sm ${p.unggulan ? 'border-lume/15 text-lume/85' : 'border-slate-deep/12 text-lume-dim'}`}>
                {p.dapat.map((d) => <li key={d}>— {d}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <p className="spec-label text-violet-spec">Pertanyaan</p>
          <h2 className="mt-4 text-[2rem] leading-[1.1] font-extrabold text-slate-deep md:text-[2.6rem]">Sebelum membaca lembar spesifikasi</h2>
        </div>
        <div className="border-t-2 border-slate-deep">
          {DAFTAR.map((f) => (
            <details key={f.t} className="group border-b border-slate-deep/12">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-bold text-slate-deep [&::-webkit-details-marker]:hidden">
                {f.t}
                <span aria-hidden="true" className="text-violet-spec transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 leading-relaxed text-lume-dim">{f.j}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
