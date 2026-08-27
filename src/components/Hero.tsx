import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, MessageCircle, Compass } from 'lucide-react';
import { SCHOOL_INFO } from '../data/danceData';

interface HeroProps {
  onOpenCoursesModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCoursesModal }) => {
  const scrollToAnchor = (id: string, focusInput = false) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });

      if (focusInput) {
        setTimeout(() => {
          const inputEl = document.getElementById('form-name');
          if (inputEl) {
            inputEl.focus();
            inputEl.classList.add('ring-2', 'ring-[#ffb59d]');
            setTimeout(() => {
              inputEl.classList.remove('ring-2', 'ring-[#ffb59d]');
            }, 2000);
          }
        }, 600);
      }
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden pt-20 pb-16 md:py-28"
    >
      {/* Background Image Layer with Atmospheric Lighting & Gradient Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Background Image from official URL */}
        <img
          src="https://www.instagram.com/p/DMKzFY1NioB/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA=="
          alt="La Vida Loca Crew Sfondo"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.1]"
          referrerPolicy="no-referrer"
        />

        {/* Ambient Dark Gradient Overlays for optimal contrast & text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e11] via-[#0c0e11]/75 to-[#0c0e11]/55" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0c0e11]/50 to-[#0c0e11]/95" />
        
        {/* Subtle warm glow highlights behind title */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#ffb59d]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6 md:mt-10">
        {/* Small floating tag badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#ffb59d] text-xs sm:text-sm font-medium mb-6 backdrop-blur-md hover:bg-white/10 hover:border-[#ffb59d]/40 transition-all duration-300"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#ffb59d]" />
          <span>Scuola di Danza e Danza Sportiva a Foggia</span>
        </motion.div>

        {/* Big Main Title */}
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-['Montserrat',sans-serif] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-md leading-[1.12]"
        >
          La Vida Loca Crew
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          id="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-['Plus_Jakarta_Sans',sans-serif] text-base sm:text-lg md:text-xl text-[#e1bfb5] max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Passione, professionalità e divertimento a due passi da casa tua. Entra a far parte della nostra famiglia!
        </motion.p>

        {/* CTA Buttons Row - smooth anchor scrolling & WhatsApp click to chat */}
        <motion.div
          id="hero-cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-4 max-w-md sm:max-w-none mx-auto"
        >
          {/* Primary CTA - Anchor to Contact Form */}
          <button
            id="hero-primary-cta"
            onClick={() => scrollToAnchor('contact', true)}
            className="w-full sm:w-auto bg-[#ffb59d] hover:bg-[#ff9d7e] text-[#390c00] hover:text-[#200500] font-semibold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 ease-out active:scale-95 cursor-pointer shadow-[0_0_20px_rgba(255,181,157,0.3)] hover:shadow-[0_0_35px_rgba(255,181,157,0.6)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group border border-transparent hover:border-[#ffe0d6]"
          >
            <span>Prenota una lezione di prova</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>

          {/* Secondary WhatsApp Click-to-Chat Button (Official Green #25D366) */}
          <a
            id="hero-whatsapp-cta"
            href={SCHOOL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-[#073619] hover:text-[#031e0d] font-semibold text-sm sm:text-base px-7 py-4 rounded-full transition-all duration-300 ease-out active:scale-95 cursor-pointer shadow-[0_0_22px_rgba(37,211,102,0.35)] hover:shadow-[0_0_35px_rgba(37,211,102,0.65)] hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group border border-[#52e486]/50 hover:border-white/50"
            aria-label="Contatta la scuola direttamente su WhatsApp"
          >
            <MessageCircle className="w-5 h-5 text-[#073619] group-hover:scale-110 transition-transform duration-300 fill-current" />
            <span>Chatta su WhatsApp</span>
          </a>

          {/* Tertiary CTA - Schedule */}
          <button
            id="hero-secondary-cta"
            onClick={() => scrollToAnchor('schedule')}
            className="w-full sm:w-auto border border-indigo-500/30 hover:border-indigo-400 bg-indigo-950/40 hover:bg-indigo-900/50 text-[#e2e2e6] hover:text-indigo-200 font-semibold text-sm sm:text-base px-6 py-4 rounded-full transition-all duration-300 ease-out active:scale-95 cursor-pointer backdrop-blur-sm shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
          >
            <Compass className="w-4 h-4 text-indigo-400 transition-transform duration-300 group-hover:rotate-45" />
            <span>Orari dei Corsi</span>
          </button>
        </motion.div>

        {/* Quick Highlights ribbon on mobile/desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 pt-8 border-t border-white/10 max-w-3xl mx-auto grid grid-cols-3 gap-2 sm:gap-6 text-center"
        >
          <button
            onClick={() => scrollToAnchor('reviews')}
            className="flex flex-col items-center group cursor-pointer p-2 rounded-xl hover:bg-white/5 transition-all duration-300"
          >
            <span className="text-xl sm:text-2xl font-bold font-['Montserrat',sans-serif] text-[#ffb59d] group-hover:scale-105 transition-transform duration-300">4.6 ★</span>
            <span className="text-xs text-[#a88a81] group-hover:text-[#ffb59d] transition-colors duration-300">Google Reviews</span>
          </button>
          <button
            onClick={() => scrollToAnchor('about')}
            className="flex flex-col items-center border-x border-white/10 px-2 group cursor-pointer p-2 rounded-xl hover:bg-white/5 transition-all duration-300"
          >
            <span className="text-xl sm:text-2xl font-bold font-['Montserrat',sans-serif] text-white group-hover:text-[#ffb59d] transition-colors duration-300">Marika & Michele</span>
            <span className="text-xs text-[#a88a81] group-hover:text-white transition-colors duration-300">Maestri Fondatori</span>
          </button>
          <button
            onClick={() => scrollToAnchor('contact')}
            className="flex flex-col items-center group cursor-pointer p-2 rounded-xl hover:bg-white/5 transition-all duration-300"
          >
            <span className="text-xl sm:text-2xl font-bold font-['Montserrat',sans-serif] text-white group-hover:text-[#ffb59d] transition-colors duration-300">100%</span>
            <span className="text-xs text-[#a88a81] group-hover:text-white transition-colors duration-300">Passione & Tecnica</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
