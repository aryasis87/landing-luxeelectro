"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Kim Ji-soo",
    role: "CEO Beauty Startup",
    image: "/images/pp1.png",
    quote: "Produk ini benar-benar luar biasa! Saya mengalami peningkatan omzet hingga 200% dalam 3 bulan pertama.",
  },
  {
    id: 2,
    name: "Park Min-young",
    role: "Digital Marketer",
    image: "/images/pp3.png",
    quote: "Sangat puas dengan layanan ini! Strategi pemasaran yang diberikan sangat efektif dan mudah diterapkan.",
  },
  {
    id: 3,
    name: "Lee Ji-eun",
    role: "Entrepreneur",
    image: "/images/pp5.png",
    quote: "Tidak pernah menyangka bisnis saya bisa berkembang secepat ini. Benar-benar investasi terbaik!",
  },
];

const Testimonials = () => {
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
        staggerChildren: 0.1,
        delayChildren: 0.3
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
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold text-violet-spec leading-tight"
            variants={itemVariants}
          >
            Apa Kata Mereka?
          </motion.h2>
          <motion.p
            className="mt-4 text-lume-dim text-base sm:text-lg"
            variants={itemVariants}
          >
            Ribuan pelanggan telah merasakan manfaat luar biasa dari layanan kami.
          </motion.p>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          className="mt-10"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active'
            }}
            loop={true}
            className="swiper-container"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-lume p-6 sm:p-8 rounded-lg shadow-sm border border-slate-deep/12 text-center flex flex-col items-center">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4">
                    <img
                      src={testimonial.image}
                      alt={`Foto ${testimonial.name}`}
                      className="w-full h-full rounded-full object-cover border-2 border-violet-spec/30"
                      width={96}
                      height={96}
                      loading="lazy"
                    />
                  </div>
                  <blockquote className="text-slate-deep italic text-base sm:text-lg max-w-2xl mx-auto">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-violet-spec">
                      {testimonial.name}
                    </h3>
                    <p className="text-lume-dim text-sm sm:text-base">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#cta"
            className="inline-block bg-violet-spec hover:bg-violet-spec text-lume px-6 py-3 rounded-lg font-medium shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-violet-spec focus:ring-offset-2"
            aria-label="Bergabung sekarang"
          >
            Bergabung Sekarang
            <span aria-hidden="true" className="ml-2">🚀</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;