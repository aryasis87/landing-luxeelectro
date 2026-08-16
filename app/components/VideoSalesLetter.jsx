"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const VideoSalesLetter = () => {
  const [isClient, setIsClient] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px"
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const containerVariants = {
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
      aria-labelledby="video-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            id="video-heading"
            className="text-3xl sm:text-4xl font-bold text-violet-spec leading-tight"
          >
            Tonton Video Ini dan Temukan Rahasia Produk Elektronik Eksklusif!
          </motion.h2>
          <motion.p
            className="mt-4 text-lume-dim text-base sm:text-lg"
            transition={{ delay: 0.1 }}
          >
            Video ini akan mengungkapkan bagaimana Anda bisa memiliki produk elektronik premium yang meningkatkan kualitas hidup Anda.
          </motion.p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          className="mt-8 relative rounded-lg overflow-hidden shadow-md aspect-video bg-slate-deep-2"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ delay: 0.2 }}
        >
          {isClient && (
            <>
              {/* Thumbnail placeholder for better CLS */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play video"
                >
                  <div className="w-16 h-16 bg-violet-spec rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-lume" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                    </svg>
                  </div>
                </div>
              )}
              
              {/* Lazy-loaded iframe */}
              {isPlaying && (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/qK31qpUJC-A?rel=0&autoplay=1&mute=1`}
                  title="Video Sales Letter"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              )}
            </>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-10"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#cta"
            className="inline-block bg-violet-spec hover:bg-violet-spec text-lume px-6 py-3 rounded-lg font-medium shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-violet-spec focus:ring-offset-2"
            aria-label="Dapatkan koleksi eksklusif sekarang"
          >
            Dapatkan Koleksi Eksklusif Sekarang
            <span aria-hidden="true" className="ml-2">🏠✨</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSalesLetter;