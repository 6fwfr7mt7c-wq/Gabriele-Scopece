import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Phone } from 'lucide-react';
import { SCHOOL_INFO } from '../data/danceData';

interface NavbarProps {
  onOpenTrialModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrialModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string, focusInput = false) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
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
    } else if (onOpenTrialModal) {
      onOpenTrialModal();
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg py-3'
          : 'bg-[#0c0e11]/85 backdrop-blur-md border-b border-white/5 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="nav-logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="font-['Montserrat',sans-serif] text-xl sm:text-2xl font-bold tracking-tight text-[#ffb59d] group-hover:text-white transition-all duration-300 group-hover:scale-[1.02] drop-shadow-sm">
              La Vida Loca Crew
            </span>
          </a>

          {/* Desktop Nav Links with animated hover highlight */}
          <div className="hidden md:flex items-center space-x-7 lg:space-x-8">
            <button
              id="nav-link-schedule"
              onClick={() => scrollToSection('schedule')}
              className="text-[#e2e2e6] hover:text-[#ffb59d] font-medium text-sm lg:text-base transition-colors duration-200 cursor-pointer relative group py-1"
            >
              <span>Orari Corsi</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ffb59d] transition-all duration-300 group-hover:w-full rounded-full" />
            </button>
            <button
              id="nav-link-about"
              onClick={() => scrollToSection('about')}
              className="text-[#e2e2e6] hover:text-[#ffb59d] font-medium text-sm lg:text-base transition-colors duration-200 cursor-pointer relative group py-1"
            >
              <span>Chi Siamo</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ffb59d] transition-all duration-300 group-hover:w-full rounded-full" />
            </button>
            <button
              id="nav-link-reviews"
              onClick={() => scrollToSection('reviews')}
              className="text-[#e2e2e6] hover:text-[#ffb59d] font-medium text-sm lg:text-base transition-colors duration-200 cursor-pointer relative group py-1"
            >
              <span>Recensioni</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ffb59d] transition-all duration-300 group-hover:w-full rounded-full" />
            </button>
            <button
              id="nav-link-contact"
              onClick={() => scrollToSection('contact')}
              className="text-[#e2e2e6] hover:text-[#ffb59d] font-medium text-sm lg:text-base transition-colors duration-200 cursor-pointer relative group py-1"
            >
              <span>Contatti</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ffb59d] transition-all duration-300 group-hover:w-full rounded-full" />
            </button>
          </div>

          {/* Desktop CTA Button with rich hover effect */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="nav-book-trial-btn"
              onClick={() => scrollToSection('contact', true)}
              className="bg-[#ffb59d] hover:bg-[#ff9d7e] text-[#390c00] hover:text-[#200500] font-semibold text-sm px-6 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 ease-out active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(255,181,157,0.25)] hover:shadow-[0_0_25px_rgba(255,181,157,0.5)] hover:-translate-y-0.5 group border border-transparent hover:border-[#ffe0d6]"
            >
              <span>Prenota Prova</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#e2e2e6] hover:text-[#ffb59d] hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Apri menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="md:hidden bg-[#111316] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-2"
        >
          <button
            id="mobile-nav-schedule"
            onClick={() => scrollToSection('schedule')}
            className="w-full text-left px-3 py-2.5 rounded-md text-[#e2e2e6] hover:bg-white/5 hover:text-[#ffb59d] font-medium transition-colors"
          >
            Orari Corsi
          </button>
          <button
            id="mobile-nav-about"
            onClick={() => scrollToSection('about')}
            className="w-full text-left px-3 py-2.5 rounded-md text-[#e2e2e6] hover:bg-white/5 hover:text-[#ffb59d] font-medium transition-colors"
          >
            Chi Siamo
          </button>
          <button
            id="mobile-nav-reviews"
            onClick={() => scrollToSection('reviews')}
            className="w-full text-left px-3 py-2.5 rounded-md text-[#e2e2e6] hover:bg-white/5 hover:text-[#ffb59d] font-medium transition-colors"
          >
            Recensioni
          </button>
          <button
            id="mobile-nav-contact"
            onClick={() => scrollToSection('contact')}
            className="w-full text-left px-3 py-2.5 rounded-md text-[#e2e2e6] hover:bg-white/5 hover:text-[#ffb59d] font-medium transition-colors"
          >
            Contatti
          </button>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              id="mobile-nav-book-trial"
              onClick={() => scrollToSection('contact', true)}
              className="w-full bg-[#ffb59d] hover:bg-[#ff9d7e] text-[#390c00] font-semibold py-3 px-4 rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(255,181,157,0.4)] transition-all duration-300"
            >
              <span>Prenota Prova</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              id="mobile-nav-phone"
              href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full text-center py-2 text-xs text-[#a88a81] hover:text-[#ffb59d] flex items-center justify-center gap-1.5 transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5" /> Chiamaci al {SCHOOL_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
