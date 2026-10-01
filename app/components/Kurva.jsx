/* Kurva respons frekuensi: sumbu X logaritmik 20 Hz–20 kHz, sumbu Y ±12 dB.
   Satu atau dua kurva (untuk halaman banding). */
const W = 640;
const H = 260;
const PAD = { l: 44, r: 16, t: 16, b: 34 };
const x = (hz) => PAD.l + ((Math.log10(hz) - Math.log10(20)) / (Math.log10(20000) - Math.log10(20))) * (W - PAD.l - PAD.r);
const y = (db) => PAD.t + ((12 - db) / 24) * (H - PAD.t - PAD.b);
const jalur = (titik) => titik.map(([hz, db], i) => `${i ? 'L' : 'M'}${x(hz).toFixed(1)},${y(db).toFixed(1)}`).join(' ');

const WARNA = ['#b9a7ff', '#f2c14e'];

export default function Kurva({ seri, judul }) {
  return (
    <figure>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={judul}>
        {[-12, -6, 0, 6, 12].map((db) => (
          <g key={db}>
            <line x1={PAD.l} x2={W - PAD.r} y1={y(db)} y2={y(db)} stroke="rgb(242 240 247 / 0.14)" strokeDasharray={db === 0 ? '' : '3 4'} />
            <text x={PAD.l - 8} y={y(db) + 4} textAnchor="end" fontSize="11" fill="rgb(242 240 247 / 0.7)">{db > 0 ? `+${db}` : db}</text>
          </g>
        ))}
        {[20, 100, 1000, 10000, 20000].map((hz, i, arr) => (
          <g key={hz}>
            <line x1={x(hz)} x2={x(hz)} y1={PAD.t} y2={H - PAD.b} stroke="rgb(242 240 247 / 0.1)" />
            <text x={x(hz)} y={H - PAD.b + 18} textAnchor={i === 0 ? "start" : i === arr.length - 1 ? "end" : "middle"} fontSize="11" fill="rgb(242 240 247 / 0.7)">{hz >= 1000 ? `${hz / 1000} kHz` : `${hz} Hz`}</text>
          </g>
        ))}
        {seri.map((s, i) => s.kurva && (
          <path key={s.nama} d={jalur(s.kurva)} fill="none" stroke={WARNA[i]} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        ))}
      </svg>
      <figcaption className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-lume/80">
        {seri.map((s, i) => s.kurva && (
          <span key={s.nama} className="flex items-center gap-2">
            <span aria-hidden="true" className="h-0.5 w-6" style={{ background: WARNA[i] }} />{s.nama}
          </span>
        ))}
        <span>Pengukuran contoh untuk purwarupa desain; 0 dB pada 1 kHz.</span>
      </figcaption>
    </figure>
  );
}
