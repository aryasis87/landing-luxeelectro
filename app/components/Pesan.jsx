'use client';

import { useEffect, useState } from 'react';
import { PERLINDUNGAN, PRODUK, rp } from '@/lib/produk';

export default function Pesan() {
  const [produk, setProduk] = useState(PRODUK[0].slug);
  const [lindung, setLindung] = useState('');
  const [selesai, setSelesai] = useState(false);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('produk');
    if (p && PRODUK.some((x) => x.slug === p)) setProduk(p);
  }, []);

  const pilih = PRODUK.find((p) => p.slug === produk);
  const tambah = PERLINDUNGAN.find((p) => p.nama === lindung);
  const input = 'w-full border border-slate-deep/20 bg-white px-4 py-3 text-slate-deep focus:border-violet-spec focus:outline-none';

  return (
    <section id="pesan" className="scroll-mt-16 bg-slate-deep px-6 py-20 text-lume md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <p className="spec-label text-violet-light">Uji dengar 14 hari</p>
          <h2 className="mt-4 text-[2rem] leading-[1.1] font-extrabold text-lume md:text-[2.7rem]">Kirim ke rumah, dengar dua minggu, baru putuskan</h2>
          <p className="mt-5 leading-relaxed text-lume/85">Deposit sebesar harga perangkat dikembalikan penuh bila unit dikembalikan lengkap dalam 14 hari.</p>
        </div>
        <div className="bg-white p-6 text-slate-deep sm:p-8">
          {selesai ? (
            <div role="status" className="py-8">
              <p className="spec-label text-violet-spec">Tercatat · {pilih.nama}</p>
              <p className="mt-4 text-2xl font-extrabold">Terima kasih. Selamat mendengarkan.</p>
              <p className="mt-3 leading-relaxed text-lume-dim">Ini purwarupa desain: tidak ada pesanan, deposit, atau pengiriman yang benar-benar terjadi.</p>
              <button type="button" onClick={() => setSelesai(false)} className="spec-label mt-6 border border-slate-deep/25 px-4 py-3 hover:border-violet-spec">Isi ulang</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSelesai(true); }} className="space-y-5">
              <fieldset>
                <legend className="spec-label mb-3">Perangkat</legend>
                <div className="grid gap-2 sm:grid-cols-2">
                  {PRODUK.map((p) => (
                    <label key={p.slug} className={`flex cursor-pointer items-center justify-between gap-3 border px-4 py-3 ${produk === p.slug ? 'border-violet-spec bg-violet-spec/8' : 'border-slate-deep/15'}`}>
                      <input type="radio" name="produk" value={p.slug} checked={produk === p.slug} onChange={() => setProduk(p.slug)} className="sr-only" />
                      <span className="font-semibold">{p.nama}</span>
                      <span className="spec-num text-sm text-lume-dim">{rp(p.harga)}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <div>
                <label htmlFor="lindung" className="spec-label mb-2 block">Perlindungan tambahan</label>
                <select id="lindung" value={lindung} onChange={(e) => setLindung(e.target.value)} className={input}>
                  <option value="">Tidak, garansi bawaan saja</option>
                  {PERLINDUNGAN.map((p) => <option key={p.nama} value={p.nama}>{p.nama} — {rp(p.harga)}</option>)}
                </select>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nama" className="spec-label mb-2 block">Nama</label>
                  <input id="nama" name="nama" required autoComplete="name" className={input} />
                </div>
                <div>
                  <label htmlFor="kota" className="spec-label mb-2 block">Kota pengiriman</label>
                  <input id="kota" name="kota" required autoComplete="address-level2" className={input} />
                </div>
              </div>
              <div>
                <label htmlFor="surel" className="spec-label mb-2 block">Surel</label>
                <input id="surel" name="surel" type="email" required autoComplete="email" className={input} />
              </div>
              <p className="flex justify-between border-t border-slate-deep/12 pt-4"><span>Deposit (dikembalikan)</span><span className="spec-num">{rp(pilih.harga + (tambah ? tambah.harga : 0))}</span></p>
              <button type="submit" className="w-full bg-violet-spec py-4 font-bold text-white hover:bg-violet-spec-2">Pesan uji dengar {pilih.nama}</button>
              <p className="text-xs leading-relaxed text-lume-dim">Purwarupa desain — formulir ini tidak mengirim data ke mana pun.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
