"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExclamationCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const PainSolution = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px"
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const problems = [
    "Perangkat tidak berfungsi optimal saat dibutuhkan",
    "Bingung memilih produk teknologi yang sesuai",
    "Tidak tahu fitur mana yang paling penting",
    "Khawatir beli produk tapi tidak tahan lama"
  ];

  const solutions = [
    "Rekomendasi produk berkualitas & bergaransi",
    "Panduan lengkap sebelum dan sesudah pembelian",
    "Dukungan pelanggan 24/7 untuk konsultasi",
    "Garansi pengembalian & penggantian cepat"
  ];

  return (
    <section 
      ref={ref}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-violet-spec/12"
      aria-labelledby="pain-solution-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.header
          className="text-center mb-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            id="pain-solution-heading"
            className="text-3xl sm:text-4xl font-bold text-violet-spec leading-tight"
            variants={itemVariants}
          >
            Masalah Umum & Solusinya
          </motion.h2>
          <motion.p 
            className="mt-4 text-lume-dim text-base sm:text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Pelanggan sering menghadapi kendala ini sebelum menemukan teknologi yang tepat. Kami hadir untuk mengatasinya.
          </motion.p>
        </motion.header>

        {/* Content */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Problems */}
          <motion.div
            className="bg-lume border-l-4 border-violet-spec/30 p-6 rounded-xl shadow-xs"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <ExclamationCircleIcon className="h-6 w-6 text-violet-spec mr-2" />
              <h3 className="text-xl font-semibold text-violet-spec">
                Masalah yang Umum Terjadi
              </h3>
            </div>
            <ul className="space-y-3">
              {problems.map((problem, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start text-slate-deep"
                  variants={itemVariants}
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-violet-spec mt-0.5 mr-2 flex-shrink-0" />
                  <span>{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            className="bg-lume border-l-4 border-violet-spec/30 p-6 rounded-xl shadow-xs"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <CheckCircleIcon className="h-6 w-6 text-violet-spec mr-2" />
              <h3 className="text-xl font-semibold text-violet-spec">
                Solusi yang Kami Tawarkan
              </h3>
            </div>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start text-slate-deep"
                  variants={itemVariants}
                >
                  <CheckCircleIcon className="h-5 w-5 text-violet-spec mt-0.5 mr-2 flex-shrink-0" />
                  <span>{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <a
            href="#produk"
            className="inline-block bg-violet-spec hover:bg-violet-spec text-lume px-6 py-3 rounded-lg font-medium shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-violet-spec focus:ring-offset-2"
            aria-label="Temukan Produk yang Tepat"
          >
            Temukan Produk yang Tepat
            <span aria-hidden="true" className="ml-2">🔍</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PainSolution;