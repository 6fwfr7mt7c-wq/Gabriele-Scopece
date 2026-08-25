import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data/danceData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      id="floating-whatsapp-widget"
      aria-label="Contatto rapido WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center group"
    >
      {/* Tooltip on desktop hover */}
      <span className="hidden sm:block mr-3 px-3.5 py-1.5 rounded-full bg-[#1e2023] border border-white/10 text-xs font-semibold text-white shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
        Chatta con noi su WhatsApp
      </span>

      {/* Floating Button */}
      <a
        href={SCHOOL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Apri chat WhatsApp al +39 380 685 9310"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-[#073619] hover:text-[#031e0d] flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_35px_rgba(37,211,102,0.75)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border border-[#52e486]/60"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </aside>
  );
};
