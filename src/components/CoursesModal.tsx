import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Clock, Users, ArrowRight } from 'lucide-react';
import { COURSES_DATA } from '../data/danceData';

interface CoursesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourseForTrial: (courseId: string) => void;
}

export const CoursesModal: React.FC<CoursesModalProps> = ({
  isOpen,
  onClose,
  onSelectCourseForTrial,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#16181b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[85vh]"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 bg-[#1e2023] border-b border-white/5 flex items-center justify-between shrink-0">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#ffb59d] font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                Anno Accademico • Corsi & Discipline
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Montserrat',sans-serif]">
                I Corsi di Danza La Vida Loca Crew
              </h3>
              <p className="text-xs sm:text-sm text-[#a88a81] mt-1">
                Direzione artistica e tecnica: Marika e Michele (Foggia)
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#a88a81] hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Chiudi finestra"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body List */}
          <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-4">
            {COURSES_DATA.map((course) => {
              const isPopular = course.id === 'latini';
              return (
                <div
                  key={course.id}
                  id={`course-card-${course.id}`}
                  className={`relative p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group ${
                    isPopular
                      ? 'bg-gradient-to-br from-[#241a1e] via-[#1c1d24] to-[#16181d] border-[#ffb59d]/50 shadow-xl shadow-[#ffb59d]/10 hover:border-[#ffb59d] hover:shadow-[0_0_30px_rgba(255,181,157,0.25)]'
                      : 'bg-[#181a1e]/80 hover:bg-[#1e2026] border-white/5 hover:border-white/20 shadow-md'
                  } hover:scale-[1.01] hover:-translate-y-0.5`}
                >
                  {/* "Più Richiesto" Glowing & Pulsing Badge for Danze Latino-Americane */}
                  {isPopular && (
                    <div className="sm:absolute sm:-top-3 sm:right-6 self-start sm:self-auto mb-2 sm:mb-0 z-10">
                      <div className="relative inline-flex items-center">
                        {/* Glowing backdrop halo with pulse effect */}
                        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400 via-[#ffb59d] to-rose-500 opacity-80 blur-sm animate-pulse" />
                        
                        {/* Core Badge */}
                        <span className="relative inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-extrabold font-['Montserrat',sans-serif] bg-gradient-to-r from-[#ff825c] via-[#ffb59d] to-[#ffa380] text-[#340900] shadow-lg border border-white/60 tracking-wider uppercase">
                          <Sparkles className="w-3.5 h-3.5 fill-[#340900]" />
                          <span>Più Richiesto</span>
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2 max-w-xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-lg sm:text-xl font-bold text-white font-['Montserrat',sans-serif] group-hover:text-[#ffb59d] transition-colors">
                        {course.title}
                      </h4>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#ffb59d]/15 text-[#ffb59d] border border-[#ffb59d]/30 font-semibold">
                        {course.level}
                      </span>
                    </div>
                    
                    <p className="text-xs font-semibold text-[#e1bfb5]">
                      {course.subtitle}
                    </p>
                    
                    <p className="text-xs sm:text-sm text-[#a88a81] leading-relaxed">
                      {course.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-xs text-[#a88a81] pt-1">
                      <span className="flex items-center gap-1.5 text-[#e2e2e6] font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#ffb59d]" /> {course.schedule}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#ffb59d]" /> Docenti: {course.instructor}
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 flex sm:flex-col justify-end pt-2 sm:pt-0">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectCourseForTrial(course.id);
                      }}
                      className={`w-full sm:w-auto font-semibold text-xs sm:text-sm px-5 py-3 rounded-full transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:scale-105 hover:-translate-y-0.5 active:scale-95 cta-shimmer-sweep ${
                        isPopular
                          ? 'bg-[#ffb59d] hover:bg-white text-[#390c00] shadow-[0_0_20px_rgba(255,181,157,0.35)]'
                          : 'bg-white/10 hover:bg-[#ffb59d] text-white hover:text-[#390c00] border border-white/10 hover:border-transparent'
                      }`}
                    >
                      <span>Prenota Prova</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="p-4 sm:p-5 bg-[#111316] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#a88a81] shrink-0">
            <span>Tutti i corsi si tengono presso la nostra sede in Via Lucera 121, Foggia.</span>
            <span className="text-[#ffb59d] font-medium">Lezioni individuali & di gruppo disponibili</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
