import { SITE } from '@/lib/produk';
import Banding from '../components/Banding';

export const metadata = {
  title: 'Bandingkan Perangkat',
  description: 'Bandingkan dua perangkat Luxe berdampingan: driver, impedansi, sensitivitas, respons frekuensi, koneksi, berat, harga, dan kurvanya.',
  alternates: { canonical: `${SITE}/bandingkan` },
};

export default function Bandingkan() {
  return (
    <main className="bg-slate-deep px-6 pt-32 pb-24 text-lume">
      <div className="mx-auto max-w-5xl">
        <p className="spec-label text-violet-light">Bandingkan</p>
        <h1 className="mt-4 text-[2.6rem] leading-[1.04] font-extrabold text-lume md:text-6xl">Dua perangkat, satu tabel, tanpa kata sifat</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-lume/85">Baris yang berbeda dicetak lebih terang. Kurvanya ditumpuk supaya selisihnya terlihat.</p>
        <div className="mt-12">
          <Banding />
        </div>
      </div>
    </main>
  );
}
