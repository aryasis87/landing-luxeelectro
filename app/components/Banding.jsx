'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { KOLOM, PRODUK, rp } from '@/lib/produk';
import Kurva from './Kurva';

export default function Banding() {
  const [a, setA] = useState(PRODUK[0].slug);
  const [b, setB] = useState(PRODUK[1].slug);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const qa = q.get('a');
    const qb = q.get('b');
    if (qa && PRODUK.some((p) => p.slug === qa)) setA(qa);
    if (qb && PRODUK.some((p) => p.slug === qb)) setB(qb);
  }, []);

  const pa = PRODUK.find((p) => p.slug === a);
  const pb = PRODUK.find((p) => p.slug === b);
  const pilih = 'w-full border border-lume/25 bg-slate-deep-2 px-4 py-3 text-lume focus:border-violet-light focus:outline-none';

  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="a" className="spec-label mb-2 block text-violet-light">Perangkat pertama</label>
          <select id="a" value={a} onChange={(e) => setA(e.target.value)} className={pilih}>
            {PRODUK.map((p) => <option key={p.slug} value={p.slug}>{p.nama} — {p.kategori}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="b" className="spec-label mb-2 block text-[#f2c14e]">Perangkat kedua</label>
          <select id="b" value={b} onChange={(e) => setB(e.target.value)} className={pilih}>
            {PRODUK.map((p) => <option key={p.slug} value={p.slug}>{p.nama} — {p.kategori}</option>)}
          </select>
        </div>
      </div>

      <div className="mt-10 overflow-x-auto" tabIndex={0} role="region" aria-label="Tabel perbandingan, bisa digeser ke samping">
        <table className="w-full min-w-[36rem] border-collapse text-left">
          <caption className="sr-only">Perbandingan spesifikasi {pa.nama} dan {pb.nama}</caption>
          <thead>
            <tr className="border-b-2 border-lume/25">
              <th scope="col" className="spec-label py-3 pr-4 text-lume/80">Spesifikasi</th>
              <th scope="col" className="py-3 pr-4 text-xl font-extrabold text-violet-light">{pa.nama}</th>
              <th scope="col" className="py-3 text-xl font-extrabold text-[#f2c14e]">{pb.nama}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-lume/10">
              <th scope="row" className="spec-label py-4 pr-4 font-bold text-lume/80">Harga</th>
              <td className="spec-num py-4 pr-4">{rp(pa.harga)}</td>
              <td className="spec-num py-4">{rp(pb.harga)}</td>
            </tr>
            {KOLOM.map(([k, label]) => {
              const beda = pa.spek[k] !== pb.spek[k];
              return (
                <tr key={k} className="border-b border-lume/10">
                  <th scope="row" className="spec-label py-4 pr-4 font-bold text-lume/80">{label}</th>
                  <td className={`py-4 pr-4 ${beda ? 'text-lume' : 'text-lume/70'}`}>{pa.spek[k]}</td>
                  <td className={`py-4 ${beda ? 'text-lume' : 'text-lume/70'}`}>{pb.spek[k]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-12 border border-lume/12 p-6">
        {pa.kurva || pb.kurva ? (
          <Kurva seri={[pa, pb].filter((p, i, arr) => arr.findIndex((x) => x.slug === p.slug) === i)} judul={`Kurva respons frekuensi ${pa.nama} dan ${pb.nama}`} />
        ) : (
          <p className="text-lume/85">Kedua perangkat ini tidak punya kurva respons sendiri.</p>
        )}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link href={`/produk/${pa.slug}`} className="spec-label border border-violet-light px-5 py-3 text-violet-light hover:bg-violet-light hover:text-slate-deep">Lembar {pa.nama}</Link>
        <Link href={`/produk/${pb.slug}`} className="spec-label border border-[#f2c14e] px-5 py-3 text-[#f2c14e] hover:bg-[#f2c14e] hover:text-slate-deep">Lembar {pb.nama}</Link>
      </div>
    </div>
  );
}
