import { FAQ, Hero, Layanan, Lini, Perlindungan, Spesifikasi } from "./components/Beranda";
import Pesan from "./components/Pesan";

export default function Home() {
  return (
    <main>
      <Hero />
      <Spesifikasi />
      <Lini />
      <Layanan />
      <Perlindungan />
      <FAQ />
      <Pesan />
    </main>
  );
}
