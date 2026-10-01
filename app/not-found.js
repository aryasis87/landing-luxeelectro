import Link from "next/link";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center bg-slate-deep px-6 pt-20 text-lume">
      <div className="mx-auto max-w-2xl">
        <p className="spec-label text-violet-light">404 · Tidak ada sinyal</p>
        <h1 className="mt-4 text-4xl font-extrabold text-lume md:text-5xl">Lembar spesifikasi ini tidak ada</h1>
        <p className="mt-4 leading-relaxed text-lume/85">Alamatnya mungkin salah, atau perangkatnya sudah tidak dijual.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="bg-violet-spec px-6 py-3.5 font-bold text-white hover:bg-violet-spec-2">Ke beranda</Link>
          <Link href="/bandingkan" className="border border-lume/30 px-6 py-3.5 font-bold text-lume hover:border-lume">Bandingkan perangkat</Link>
        </div>
      </div>
    </main>
  );
}
