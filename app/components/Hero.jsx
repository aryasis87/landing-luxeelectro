"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-violet-spec to-slate-deep pb-20">
      {/* Background Wave - Optimized with aria-hidden */}
      <div className="absolute top-0 left-0 w-full hidden md:block" aria-hidden="true">
        <svg viewBox="0 0 1440 320" className="w-full" focusable="false">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L80,208C160,192,320,160,480,144C640,128,800,128,960,144C1120,160,1280,192,1360,208L1440,224L1440,0L0,0Z"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Hero - Optimized image loading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="block md:hidden relative mb-6"
        >
          <div className="relative w-full aspect-video rounded-b-2xl overflow-hidden">
            <Image
              src="/images/sofa.jpg"
              alt="Promo Elektronik Ungu"
              width={600}
              height={400}
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent text-lume p-4">
              <h1 className="text-xl font-bold">Elektronik Mewah Ungu</h1>
              <p className="text-sm mt-1">Elegan, Canggih, dan Hemat Energi</p>
            </div>
          </div>
        </motion.div>

        {/* Mobile Text & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="md:hidden text-center mt-6"
        >
          <p className="text-slate-deep text-base">
            Jelajahi koleksi perangkat elektronik kami dengan sentuhan ungu yang menawan.
          </p>
          <button 
            className="mt-4 bg-violet-spec text-lume px-6 py-3 rounded-lg font-medium shadow-md hover:bg-violet-spec transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-violet-spec focus:ring-offset-2"
            aria-label="Lihat Koleksi Unggulan"
          >
            Lihat Koleksi Unggulan
          </button>
        </motion.div>

        {/* Desktop & Tablet Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center pt-24 lg:pt-32">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-3xl lg:text-5xl font-bold text-slate-deep leading-tight">
              Teknologi Ungu <br className="hidden lg:block" /> Untuk Hidup Lebih Mewah
            </h1>
            <p className="text-lume-dim lg:text-lg max-w-md">
              Dapatkan gadget dan home appliance pilihan dengan aksen ungu yang elegan.
            </p>
            <button 
              className="mt-4 bg-violet-spec text-lume px-6 py-3 rounded-lg font-medium shadow-md hover:bg-violet-spec transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-violet-spec focus:ring-offset-2"
              aria-label="Jelajahi Koleksi Sekarang"
            >
              Jelajahi Sekarang
            </button>
          </motion.div>

          {/* Image - Optimized with proper dimensions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-[4/3]"
          >
            <Image
              src="/images/sofa.jpg"
              alt="Showcase Elektronik Ungu"
              fill
              className="object-cover rounded-xl shadow-lg"
              priority
              sizes="(max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute bottom-4 right-4 bg-slate-deep/90 text-lume text-sm px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <p>300+ Produk Ungu Terpilih</p>
            </div>
          </motion.div>
        </div>

        {/* Info & About Section */}
        <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Stats Card - Improved contrast */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-violet-spec to-violet-spec text-lume p-6 lg:p-8 rounded-xl shadow-lg"
          >
            <p className="text-base lg:text-lg font-semibold">ELEKTRONIK PREMIUM</p>
            <div className="mt-4 space-y-4">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold">20.000+</h2>
                <p className="text-sm lg:text-base opacity-90">Unit Terjual</p>
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold">15+</h2>
                <p className="text-sm lg:text-base opacity-90">Merek Terpercaya</p>
              </div>
            </div>
          </motion.div>

          {/* About Us - Optimized image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-lume p-6 rounded-xl border border-slate-deep/12 shadow-sm flex flex-col sm:flex-row items-center gap-4 lg:gap-6"
          >
            <div className="relative w-20 h-20 lg:w-28 lg:h-28 overflow-hidden rounded-full border-2 border-violet-spec/30 shrink-0">
              <Image
                src="/images/sofa.jpg" // More appropriate image
                alt="Tim Elektronik Ungu"
                width={112}
                height={112}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl lg:text-2xl font-bold text-slate-deep">Tentang Kami</h3>
              <p className="text-lume-dim mt-2 text-sm lg:text-base">
                Kami ahli menyediakan elektronik berdesain elegan dengan kualitas terbaik dan layanan prima.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}