import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ExternalLink, ChevronDown } from 'lucide-react';
import { REVIEWS_DATA, SCHOOL_INFO } from '../data/danceData';

export const ReviewsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? REVIEWS_DATA : REVIEWS_DATA.slice(0, 2);

  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-[#0c0e11] relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <motion.h2
            id="reviews-headline"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-['Montserrat',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Cosa dicono di noi
          </motion.h2>

          {/* Star Rating Group */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-1.5 text-[#fbbc00] mb-3"
            aria-label="Valutazione 4.6 su 5 stelle"
          >
            <Star className="w-7 h-7 sm:w-8 sm:h-8 fill-[#fbbc00]" />
            <Star className="w-7 h-7 sm:w-8 sm:h-8 fill-[#fbbc00]" />
            <Star className="w-7 h-7 sm:w-8 sm:h-8 fill-[#fbbc00]" />
            <Star className="w-7 h-7 sm:w-8 sm:h-8 fill-[#fbbc00]" />
            <div className="relative">
              <Star className="w-7 h-7 sm:w-8 sm:h-8 text-[#fbbc00]/30" />
              <div className="absolute inset-0 overflow-hidden w-[60%]">
                <Star className="w-7 h-7 sm:w-8 sm:h-8 fill-[#fbbc00] text-[#fbbc00]" />
              </div>
            </div>
          </motion.div>

          {/* Subtitle / Google Reviews count */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#a88a81]"
          >
            4.6 / 5 BASATO SU 22 RECENSIONI GOOGLE
          </motion.p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <AnimatePresence>
            {displayedReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1e2023] rounded-xl p-6 sm:p-8 border border-white/5 hover:border-[#ffb59d]/40 transition-all duration-300 relative overflow-hidden group shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Subtle Quote Watermark */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#ffb59d] opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                  <Quote className="w-14 h-14 sm:w-16 sm:h-16" />
                </div>

                {/* Author Info Header */}
                <div className="flex items-center gap-4 mb-5 relative z-10">
                  {/* Avatar Circle */}
                  <div className="w-12 h-12 rounded-full bg-[#37393d] border border-white/10 flex items-center justify-center text-[#ffb59d] font-bold font-['Montserrat',sans-serif] text-lg shrink-0 shadow-inner">
                    {review.initial}
                  </div>

                  <div>
                    <h3 className="font-semibold text-white text-base font-['Montserrat',sans-serif]">
                      {review.name}
                    </h3>
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-[#fbbc00] mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#fbbc00]" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#e2e2e6] italic relative z-10 leading-relaxed">
                  "{review.comment}"
                </p>

                {/* Card footer date/badge */}
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#a88a81] relative z-10">
                  <span>{review.date || 'Recensione verificata'}</span>
                  <span className="inline-flex items-center gap-1 text-[#ffb59d]/80">
                    Google Review
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Action button to expand or view on Google */}
        <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs sm:text-sm font-semibold text-[#ffb59d] hover:text-[#390c00] px-6 py-3 rounded-full border border-[#ffb59d]/40 hover:border-[#ffb59d] bg-[#16181b] hover:bg-[#ffb59d] transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(255,181,157,0.35)] group"
          >
            <span>{showAll ? 'Mostra meno recensioni' : 'Leggi altre recensioni degli allievi'}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
          </button>
          
          <a
            href={SCHOOL_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-[#a88a81] hover:text-[#ffb59d] transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 flex items-center gap-1.5 py-2.5 px-4 rounded-full border border-white/5 hover:border-white/15 bg-white/[0.02] hover:bg-white/5"
          >
            <span>Apri recensioni su Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        </motion.div>
      </div>
    </section>
  );
};
