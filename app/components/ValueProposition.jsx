"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaDesktop, FaMobileAlt, FaShieldAlt, FaStar } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaDesktop className="h-10 w-10 text-violet-spec" />,
    title: "Desain Elegan & Modern",
    description: "Produk elektronik kami memiliki desain yang stylish dan futuristik, cocok untuk rumah dan kantor.",
  },
  {
    id: 2,
    icon: <FaMobileAlt className="h-10 w-10 text-violet-spec" />,
    title: "Kualitas Terbaik",
    description: "Menggunakan teknologi terkini dan material premium untuk ketahanan maksimal.",
  },
  {
    id: 3,
    icon: <FaShieldAlt className="h-10 w-10 text-violet-spec" />,
    title: "Keamanan Terjamin",
    description: "Setiap produk telah melalui uji ketahanan dan memenuhi standar keamanan tertinggi.",
  },
  {
    id: 4,
    icon: <FaStar className="h-10 w-10 text-violet-spec" />,
    title: "Paling Dipercaya",
    description: "Dipercaya oleh konsumen di seluruh dunia dan menjadi pilihan utama di industri elektronik.",
  },
];

const ValueProposition = () => {
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

  return (
    <section 
      ref={ref}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-lume"
      aria-labelledby="value-prop-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            id="value-prop-heading"
            className="text-3xl sm:text-4xl font-bold text-violet-spec leading-tight"
            variants={itemVariants}
          >
            Mengapa Memilih Produk Kami?
          </motion.h2>
          <motion.p
            className="mt-4 text-lume-dim text-base sm:text-lg"
            variants={itemVariants}
          >
            Kami tidak hanya menjual produk elektronik, tetapi juga pengalaman yang membawa inovasi ke ruang Anda.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-lume p-5 rounded-lg shadow-sm border border-slate-deep/12 text-center flex flex-col items-center hover:shadow-md transition-shadow duration-200"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="mb-3" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-deep">
                {feature.title}
              </h3>
              <p className="text-lume-dim mt-2 text-sm sm:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#cta"
            className="inline-block bg-violet-spec hover:bg-violet-spec text-lume px-6 py-3 rounded-lg font-medium shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-violet-spec focus:ring-offset-2"
            aria-label="Lihat koleksi produk kami"
          >
            Lihat Koleksi Kami
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;