import { KOLOM } from '@/lib/produk';

/* Panel spesifikasi bergaya panel instrumen: label kecil di atas, nilai
   tebal di bawah, dipisah garis tipis seperti sel pada alat ukur. */
export default function PanelSpek({ spek, gelap = true }) {
  const isi = KOLOM.filter(([k]) => spek[k] && spek[k] !== '—');
  return (
    <dl className={`grid gap-px sm:grid-cols-2 ${gelap ? 'bg-lume/12' : 'bg-slate-deep/12'}`}>
      {isi.map(([k, label]) => (
        <div key={k} className={gelap ? 'bg-slate-deep-2 p-5' : 'bg-white p-5'}>
          <dt className={`spec-label ${gelap ? 'text-violet-light' : 'text-violet-spec'}`}>{label}</dt>
          <dd className={`spec-num mt-2 text-lg ${gelap ? 'text-lume' : 'text-slate-deep'}`}>{spek[k]}</dd>
        </div>
      ))}
    </dl>
  );
}
