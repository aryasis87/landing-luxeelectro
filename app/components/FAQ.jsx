"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    id: 1,
    question: "Apa manfaat utama dari produk ini?",
    answer: "Produk ini dirancang untuk meningkatkan produktivitas dan efisiensi Anda dengan fitur-fitur canggih yang mudah digunakan.",
  },
  {
    id: 2,
    question: "Apakah saya mendapatkan dukungan pelanggan?",
    answer: "Ya, kami menyediakan dukungan pelanggan 24/7 untuk membantu Anda dengan semua pertanyaan dan kebutuhan teknis Anda.",
  },
  {
    id: 3,
    question: "Bagaimana cara melakukan pembelian?",
    answer: "Anda dapat membeli produk ini langsung dari website kami dengan beberapa metode pembayaran yang tersedia.",
  },
  {
    id: 4,
    question: "Apakah ada jaminan uang kembali?",
    answer: "Ya, kami menawarkan jaminan uang kembali dalam 30 hari jika Anda tidak puas dengan produk kami.",
  },
  {
    id: 5,
    question: "Bisakah saya mengakses materi setelah pembelian?",
    answer: "Tentu! Setelah pembelian, Anda akan mendapatkan akses penuh ke materi dan pembaruan selamanya.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px"
  });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      ref={ref} 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-lume"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            id="faq-heading" 
            className="text-3xl sm:text-4xl font-bold text-violet-spec tracking-tight"
          >
            Pertanyaan Umum
          </h2>
          <p className="mt-3 text-lume-dim max-w-2xl mx-auto text-base sm:text-lg">
            Jawaban untuk pertanyaan yang sering diajukan tentang produk kami.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 space-y-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <div 
              key={faq.id}
              className="rounded-lg border border-slate-deep/12 bg-lume shadow-xs overflow-hidden transition-all hover:shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-${faq.id}`}
              >
                <span className="font-medium text-slate-deep text-base sm:text-lg">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-violet-spec ml-4 flex-shrink-0"
                >
                  <FaChevronDown aria-hidden="true" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-${faq.id}`}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { 
                        opacity: 1,
                        height: "auto",
                        transition: { duration: 0.3, ease: "easeOut" }
                      },
                      collapsed: { 
                        opacity: 0,
                        height: 0,
                        transition: { duration: 0.2, ease: "easeIn" }
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4">
                      <p className="text-slate-deep text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;