"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCouch } from "react-icons/fa";

const pricingPlans = [
  {
    id: 1,
    name: "Basic",
    price: "Rp 199.000",
    features: ["Desain Dasar", "Konsultasi Online", "Support via Email"],
    buttonText: "Pilih Paket",
  },
  {
    id: 2,
    name: "Pro",
    price: "Rp 499.000",
    features: [
      "Desain Eksklusif",
      "Konsultasi 3x/Bulan",
      "Support Prioritas",
      "Bonus Katalog Furnitur",
    ],
    buttonText: "Paket Terpopuler",
    popular: true,
  },
  {
    id: 3,
    name: "Premium",
    price: "Rp 999.000",
    features: [
      "Desain Premium",
      "Konsultasi 1-on-1",
      "Rekomendasi Material",
      "Akses Eksklusif ke Supplier",
    ],
    buttonText: "Gabung Sekarang",
  },
];

const Pricing = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      ref={ref}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-violet-spec/12 relative overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      {/* Background Pattern - Optimized */}
      <div 
        className="absolute inset-0 wood-texture opacity-10 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl font-bold text-violet-spec leading-tight"
            variants={itemVariants}
          >
            Pilih Paket Desain Furnitur Anda
          </motion.h2>
          <motion.p
            className="mt-4 text-slate-deep text-base sm:text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Rancang ruang impian Anda dengan layanan desain furnitur eksklusif kami.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              className="relative p-6 sm:p-8 rounded-xl bg-lume border border-violet-spec/30 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.span
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs font-bold bg-violet-spec text-lume rounded-full whitespace-nowrap"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  Best Seller ⭐
                </motion.span>
              )}

              <h3 className="text-xl font-semibold text-violet-spec text-center">
                {plan.name}
              </h3>

              {/* Price */}
              <motion.p
                className="text-3xl font-bold mt-3 text-violet-spec text-center"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
              >
                {plan.price}
              </motion.p>

              {/* Features */}
              <ul className="mt-6 space-y-3 flex-grow">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={`${plan.id}-${i}`}
                    className="flex items-start text-slate-deep text-sm sm:text-base"
                    variants={featureVariants}
                    transition={{ delay: i * 0.05 + 0.2 }}
                  >
                    <FaCouch className="text-violet-spec mt-0.5 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Button */}
              <motion.a
                href="#checkout"
                className={`mt-8 px-6 py-3 text-lume font-medium rounded-lg ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-violet-spec to-violet-spec shadow-md' 
                    : 'bg-violet-spec'
                } hover:bg-violet-spec transition-colors duration-200 text-center`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`Pilih paket ${plan.name}`}
              >
                {plan.buttonText}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;