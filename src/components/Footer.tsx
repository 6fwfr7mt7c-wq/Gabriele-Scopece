import React from 'react';
import { Instagram, Facebook, ArrowUp, Code2, Sparkles, MessageCircle, Heart } from 'lucide-react';
import { SCHOOL_INFO } from '../data/danceData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#0c0e11] border-t border-white/5 pt-12 pb-8 text-[#a88a81]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          
          {/* Logo / Brand Name */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="font-['Montserrat',sans-serif] text-xl font-bold text-[#ffb59d] hover:text-white transition-colors duration-300"
            >
              La Vida Loca Crew
            </a>
            <span className="hidden sm:inline text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#e2e2e6]">
              Foggia
            </span>
          </div>

          {/* Nav & Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-sm">
            <a
              href="#schedule"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('schedule');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-[#ffb59d] transition-colors duration-300 cursor-pointer"
            >
              Orari Corsi
            </a>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#ffb59d] transition-colors duration-300 cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#ffb59d] transition-colors duration-300 cursor-pointer"
            >
              Terms of Service
            </button>
            <a
              href="https://www.instagram.com/la_vida_loca_latin_crew?igsi=dTd1enh5eGtjcXR0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ffb59d] transition-all duration-300 flex items-center gap-1.5 hover:scale-105"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/share/19GnetLF1L/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ffb59d] transition-all duration-300 flex items-center gap-1.5 hover:scale-105"
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </a>
          </div>

          {/* Copyright & Scroll-to-top */}
          <div className="flex items-center gap-4 text-xs sm:text-sm text-center md:text-right">
            <span>
              © {new Date().getFullYear()} La Vida Loca Crew.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#1e2023] hover:bg-[#ffb59d] hover:text-[#390c00] text-[#e2e2e6] border border-white/10 hover:border-[#ffb59d] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(255,181,157,0.4)] hover:-translate-y-0.5"
              aria-label="Torna all'inizio della pagina"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Dedicated Modern Credits Section / Banner */}
        <div className="mt-10 pt-8 border-t border-white/[0.08]">
          <div
            id="developer-credits-card"
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#14161a] via-[#1a1d24] to-[#14161a] border border-white/10 p-4 sm:p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-[#ffb59d]/30 group"
          >
            {/* Ambient subtle glow background */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#ffb59d]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#ffb59d]/15 transition-all duration-500" />
            <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-[#ffb59d]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
              
              {/* Left Side: Badge & Creator Info */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#ffb59d]/15 border border-[#ffb59d]/25 text-[#ffb59d] flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <Code2 className="w-5 h-5" />
                </div>
                
                <div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="text-[11px] uppercase tracking-wider font-semibold font-['Montserrat',sans-serif] text-[#ffb59d]">
                      Credits & Design
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70">
                      <Sparkles className="w-2.5 h-2.5 text-[#ffb59d]" /> Web Creator
                    </span>
                  </div>
                  
                  <p className="text-sm sm:text-base font-medium text-white/90 mt-0.5">
                    Designed & Developed by{' '}
                    <span className="font-semibold text-white group-hover:text-[#ffb59d] transition-colors duration-300">
                      Gabriele Scopece
                    </span>
                  </p>
                </div>
              </div>

              {/* Right Side: Proposal & Action Button */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <p className="text-xs sm:text-sm text-white/60 max-w-xs sm:max-w-sm">
                  Vuoi un sito web moderno e veloce per la tua attività?
                </p>
                
                <a
                  id="credits-whatsapp-btn"
                  href="https://wa.me/393894572730"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ffb59d] text-[#390c00] text-xs sm:text-sm font-bold font-['Montserrat',sans-serif] transition-all duration-300 hover:bg-white hover:text-[#0c0e11] hover:scale-105 shadow-md shadow-[#ffb59d]/20 active:scale-95 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Contattami su WhatsApp</span>
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
