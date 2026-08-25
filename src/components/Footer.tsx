import React from 'react';
import { Instagram, Facebook, ArrowUp } from 'lucide-react';
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
      className="bg-[#0c0e11] border-t border-white/5 py-10 text-[#a88a81]"
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
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ffb59d] transition-all duration-300 flex items-center gap-1.5 hover:scale-105"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a
              href="https://facebook.com"
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
              © {new Date().getFullYear()} La Vida Loca Crew. Professional Ballroom Excellence in Foggia.
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

      </div>
    </footer>
  );
};
