"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBolt } from "react-icons/fa";

export default function CountdownTimer() {
  const targetDate = new Date("2025-07-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isClient, setIsClient] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "20px"
  });

  useEffect(() => {
    setIsClient(true);
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isClient) {
    return (
      <div 
        className="flex flex-col items-center justify-center bg-violet-spec/12 p-8 my-8 rounded-xl w-full max-w-lg mx-auto text-center"
        aria-hidden="true"
      >
        <div className="h-8 w-48 bg-violet-spec/12 rounded mb-4"></div>
        <div className="flex space-x-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-16 h-16 bg-violet-spec/12 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.section
      ref={ref}
      className="flex flex-col items-center justify-center bg-violet-spec/12 p-8 my-8 rounded-xl w-full max-w-lg mx-auto text-center relative overflow-hidden shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      aria-labelledby="countdown-heading"
    >
      <h2 
        id="countdown-heading" 
        className="text-violet-spec text-xl md:text-2xl font-semibold tracking-tight"
      >
        Promo Elektronik Unggul 
      </h2>
      <p className="text-violet-spec text-sm mt-1.5">
        Persiapkan diri Anda untuk peluncuran koleksi eksklusif!
      </p>

      <div 
        className="flex flex-wrap justify-center gap-3 mt-5" 
        role="timer" 
        aria-live="polite"
      >
        {Object.entries(timeLeft).map(([label, value], index) => (
          <motion.div
            key={label}
            className="flex flex-col items-center min-w-[4rem]"
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.15,
              ease: "backOut"
            }}
          >
            <div
              className="bg-violet-spec text-lume font-bold text-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg"
              aria-label={`${value} ${label}`}
            >
              {String(value).padStart(2, '0')}
            </div>
            <p className="text-xs mt-1.5 text-violet-spec font-medium uppercase tracking-wider">
              {label}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-5">
        <FaBolt 
          className="text-violet-spec text-3xl" 
          aria-hidden="true" 
        />
      </div>
    </motion.section>
  );
}