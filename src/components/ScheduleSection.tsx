import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  Clock,
  Sparkles,
  ArrowRight,
  Filter,
  Layers,
  Table as TableIcon,
  MessageCircle,
  Award,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { SCHEDULE_DAYS_DATA, SCHEDULE_CATEGORIES, SCHOOL_INFO } from '../data/danceData';
import { DayOfWeek, ScheduleCategory, ScheduleItem } from '../types';

interface ScheduleSectionProps {
  onOpenTrialModal?: (courseName?: string, day?: string) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onOpenTrialModal }) => {
  const [selectedDay, setSelectedDay] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<ScheduleCategory>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  // Filter slots based on day and category
  const filteredDays = useMemo(() => {
    return SCHEDULE_DAYS_DATA.map((dayData) => {
      if (selectedDay !== 'all' && dayData.day !== selectedDay) {
        return null;
      }

      const matchingSlots = dayData.slots.filter((slot) => {
        if (selectedCategory === 'all') return true;
        return slot.category === selectedCategory;
      });

      if (matchingSlots.length === 0 && selectedCategory !== 'all') {
        return null;
      }

      return {
        ...dayData,
        slots: matchingSlots,
      };
    }).filter(Boolean) as typeof SCHEDULE_DAYS_DATA;
  }, [selectedDay, selectedCategory]);

  // Flattened items for the weekly table view
  const allFilteredSlots = useMemo(() => {
    const list: ScheduleItem[] = [];
    filteredDays.forEach((dayData) => {
      dayData.slots.forEach((slot) => {
        list.push(slot);
      });
    });
    return list;
  }, [filteredDays]);

  const totalSlotsCount = useMemo(() => {
    return SCHEDULE_DAYS_DATA.reduce((acc, curr) => acc + curr.slots.length, 0);
  }, []);

  const handleBooking = (courseName?: string, day?: string) => {
    if (onOpenTrialModal) {
      onOpenTrialModal(courseName, day);
      return;
    }
    const element = document.getElementById('contact');
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
      setTimeout(() => {
        const inputEl = document.getElementById('form-name');
        if (inputEl) {
          inputEl.focus();
        }
      }, 600);
    }
  };

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'fitness':
        return {
          pill: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/25',
          dot: 'bg-cyan-400',
          borderHover: 'hover:border-cyan-500/40',
        };
      case 'latin':
        return {
          pill: 'bg-violet-500/10 text-violet-300 border-violet-500/25',
          dot: 'bg-violet-400',
          borderHover: 'hover:border-violet-500/40',
        };
      case 'baby':
        return {
          pill: 'bg-amber-500/10 text-amber-300 border-amber-500/25',
          dot: 'bg-amber-400',
          borderHover: 'hover:border-amber-500/40',
        };
      case 'yoga':
        return {
          pill: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25',
          dot: 'bg-emerald-400',
          borderHover: 'hover:border-emerald-500/40',
        };
      case 'private':
        return {
          pill: 'bg-rose-500/10 text-rose-300 border-rose-500/25',
          dot: 'bg-rose-400',
          borderHover: 'hover:border-rose-500/40',
        };
      default:
        return {
          pill: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/25',
          dot: 'bg-indigo-400',
          borderHover: 'hover:border-indigo-500/40',
        };
    }
  };

  return (
    <section
      id="schedule"
      className="py-20 md:py-28 bg-[#0c0e11] relative border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background glows for high-contrast luxury feel */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs sm:text-sm font-medium mb-4 backdrop-blur-md"
          >
            <Calendar className="w-3.5 h-3.5 text-indigo-400" />
            <span>Planning Ufficiale Settimanale • Stagione 2026/2027</span>
          </motion.div>

          <motion.h2
            id="schedule-headline"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-['Montserrat',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            Orari dei Corsi
          </motion.h2>

          {/* Accent Indigo/Violet Gradient Bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-[#ffb59d] mx-auto mb-6 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-['Plus_Jakarta_Sans',sans-serif] text-base sm:text-lg text-[#e1bfb5] leading-relaxed"
          >
            Consulta gli orari completi di tutte le discipline: dal fitness mattutino alla danza per bambini, fino ai corsi di balli latini e lezioni private.
          </motion.p>
        </div>

        {/* Filter & View Switcher Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#16181c] p-4 sm:p-5 rounded-2xl border border-white/10 shadow-xl mb-10 backdrop-blur-md"
        >
          {/* Top Row: Day Selector Tabs & View Mode Switcher */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-white/5">
            
            {/* Days Horizontal Scroll / Tabs */}
            <div className="w-full lg:w-auto flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-thin scrollbar-thumb-white/10">
              <button
                id="filter-day-all"
                onClick={() => setSelectedDay('all')}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 flex items-center gap-1.5 cursor-pointer ${
                  selectedDay === 'all'
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-white/5 text-[#e2e2e6] hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>Tutta la settimana</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/30 text-white/90">
                  {totalSlotsCount}
                </span>
              </button>

              {SCHEDULE_DAYS_DATA.map((dayData) => {
                const isActive = selectedDay === dayData.day;
                return (
                  <button
                    key={dayData.day}
                    id={`filter-day-${dayData.shortDay.toLowerCase()}`}
                    onClick={() => setSelectedDay(dayData.day)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-white/5 text-[#e2e2e6] hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span>{dayData.day}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/30 text-white/80 font-mono">
                      {dayData.slots.length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle (Cards vs Table) */}
            <div className="flex items-center gap-1 bg-[#0c0e11] p-1 rounded-xl border border-white/5 shrink-0 self-end lg:self-auto">
              <button
                id="schedule-view-cards-btn"
                onClick={() => setViewMode('cards')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                  viewMode === 'cards'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-[#a88a81] hover:text-white hover:bg-white/5'
                }`}
                title="Vista a schede giornaliere"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Schede</span>
              </button>
              <button
                id="schedule-view-table-btn"
                onClick={() => setViewMode('table')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                  viewMode === 'table'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-[#a88a81] hover:text-white hover:bg-white/5'
                }`}
                title="Vista a tabella completa"
              >
                <TableIcon className="w-3.5 h-3.5" />
                <span>Tabella</span>
              </button>
            </div>

          </div>

          {/* Bottom Row: Category Chips Filter */}
          <div className="pt-3 flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 text-xs text-[#a88a81] mr-1 shrink-0 font-medium">
              <Filter className="w-3.5 h-3.5 text-indigo-400" />
              <span>Filtra per disciplina:</span>
            </div>

            {SCHEDULE_CATEGORIES.map((cat) => {
              const isCatActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`filter-cat-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id as ScheduleCategory)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer border ${
                    isCatActive
                      ? 'bg-indigo-500/20 border-indigo-400 text-indigo-200 shadow-sm'
                      : 'bg-white/[0.03] border-white/5 text-[#a88a81] hover:text-white hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* View Mode: Cards View (Default & Mobile Friendly) */}
        {viewMode === 'cards' && (
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              {filteredDays.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#16181c] rounded-2xl p-12 text-center border border-white/5 max-w-lg mx-auto"
                >
                  <p className="text-base text-[#e2e2e6] mb-3">
                    Nessuna lezione trovata con i filtri selezionati.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedDay('all');
                      setSelectedCategory('all');
                    }}
                    className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold underline underline-offset-4 cursor-pointer"
                  >
                    Reimposta tutti i filtri
                  </button>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDays.map((dayData, dayIdx) => (
                    <motion.div
                      key={dayData.day}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: dayIdx * 0.08 }}
                      className={`bg-[#16181c] rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all duration-300 overflow-hidden shadow-xl flex flex-col justify-between group ${
                        dayData.day === 'Sabato' ? 'bg-gradient-to-b from-[#1c1926] to-[#16181c]' : ''
                      }`}
                    >
                      {/* Day Header */}
                      <div className="p-5 sm:p-6 border-b border-white/5 bg-gradient-to-r from-white/[0.03] to-transparent">
                        <div className="flex items-center justify-between gap-3 mb-1.5">
                          <h3 className="font-['Montserrat',sans-serif] text-xl font-bold text-white flex items-center gap-2">
                            <span>{dayData.day}</span>
                            {dayData.day === 'Sabato' && (
                              <span className="text-[11px] font-semibold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-md border border-rose-500/20">
                                Special
                              </span>
                            )}
                          </h3>
                          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
                            {dayData.shortDay}
                          </span>
                        </div>
                        <p className="text-xs text-[#a88a81] leading-snug">
                          {dayData.tagline}
                        </p>
                      </div>

                      {/* Day Time Slots List */}
                      <div className="p-4 sm:p-5 space-y-3.5 flex-grow">
                        {dayData.slots.map((slot) => {
                          const catStyles = getCategoryStyles(slot.category);
                          return (
                            <div
                              key={slot.id}
                              className={`p-3.5 rounded-xl bg-[#1e2025]/80 hover:bg-[#23262c] border border-white/5 ${catStyles.borderHover} transition-all duration-200 flex flex-col gap-2 group/slot`}
                            >
                              <div className="flex items-start justify-between gap-3">
                                {/* Time Badge */}
                                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-white px-2.5 py-1 rounded-md bg-white/10 border border-white/10 shrink-0">
                                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                                  <span>{slot.time}</span>
                                </div>

                                {/* Category Tag */}
                                <span
                                  className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${catStyles.pill}`}
                                >
                                  {slot.categoryLabel}
                                </span>
                              </div>

                              {/* Course Name */}
                              <div>
                                <h4 className="font-['Montserrat',sans-serif] text-sm sm:text-base font-bold text-white group-hover/slot:text-indigo-300 transition-colors duration-200">
                                  {slot.courseName}
                                </h4>
                                {slot.description && (
                                  <p className="text-xs text-[#a88a81] mt-0.5 line-clamp-2">
                                    {slot.description}
                                  </p>
                                )}
                              </div>

                              {/* Instructor & Level Meta */}
                              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-[#a88a81]">
                                <span>{slot.instructor}</span>
                                <span className="text-white/60">{slot.level}</span>
                              </div>

                              {/* Quick Booking Button */}
                              <button
                                onClick={() => handleBooking(slot.courseName, slot.day)}
                                className="mt-1 w-full py-1.5 px-3 rounded-lg text-xs font-semibold bg-white/5 hover:bg-indigo-600 text-[#e2e2e6] hover:text-white transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer group/btn border border-white/5 hover:border-indigo-500"
                              >
                                <span>Prenota prova</span>
                                <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover/btn:translate-x-1" />
                              </button>
                            </div>
                          );
                        })}
                      </div>

                      {/* Day Card Footer */}
                      <div className="px-5 py-3 border-t border-white/5 bg-black/20 text-center">
                        <span className="text-[11px] text-[#a88a81]">
                          {dayData.slots.length} {dayData.slots.length === 1 ? 'attività' : 'attività in programma'}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* View Mode: Weekly Matrix Table View */}
        {viewMode === 'table' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-[#16181c] rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-white/10 bg-[#1e2025] text-xs font-semibold uppercase tracking-wider text-indigo-300">
                    <th className="py-4 px-5">Giorno</th>
                    <th className="py-4 px-4">Orario</th>
                    <th className="py-4 px-5">Corso / Disciplina</th>
                    <th className="py-4 px-4">Categoria</th>
                    <th className="py-4 px-4">Livello & Maestro</th>
                    <th className="py-4 px-5 text-right">Azione</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {allFilteredSlots.map((slot) => {
                    const catStyles = getCategoryStyles(slot.category);
                    return (
                      <tr
                        key={slot.id}
                        className="hover:bg-white/[0.03] transition-colors duration-150 group"
                      >
                        <td className="py-3.5 px-5 font-medium text-white font-['Montserrat',sans-serif]">
                          <span className="inline-flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                            {slot.day}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-mono font-semibold text-white">
                          <span className="px-2 py-0.5 rounded bg-white/10 border border-white/10 text-xs inline-block">
                            {slot.time}
                          </span>
                        </td>
                        <td className="py-3.5 px-5">
                          <span className="font-bold text-white group-hover:text-indigo-300 transition-colors block">
                            {slot.courseName}
                          </span>
                          {slot.description && (
                            <span className="text-xs text-[#a88a81] line-clamp-1 block mt-0.5">
                              {slot.description}
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-4">
                          <span
                            className={`text-xs font-semibold px-2 py-0.5 rounded-md border inline-block ${catStyles.pill}`}
                          >
                            {slot.categoryLabel}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-xs text-[#a88a81]">
                          <span className="block text-white/80 font-medium">{slot.instructor}</span>
                          <span className="block text-[11px] text-[#a88a81]">{slot.level}</span>
                        </td>
                        <td className="py-3.5 px-5 text-right">
                          <button
                            onClick={() => handleBooking(slot.courseName, slot.day)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-300 hover:text-white px-3 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-600 border border-indigo-500/20 hover:border-indigo-500 transition-all duration-200 cursor-pointer"
                          >
                            <span>Prenota</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Saturday / Private Coaching Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1b1728] via-[#16181c] to-[#20171a] border border-indigo-500/30 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-indigo-500/10 via-violet-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/25 text-indigo-300 text-xs font-semibold mb-3">
                <Award className="w-3.5 h-3.5 text-indigo-400" />
                <span>Sabato • Percorsi Personalizzati & Agonismo</span>
              </div>
              <h3 className="font-['Montserrat',sans-serif] text-xl sm:text-2xl font-bold text-white mb-2">
                Cerchi lezioni individuali, ballo sposi o preparazione gare?
              </h3>
              <p className="text-sm sm:text-base text-[#e1bfb5] leading-relaxed">
                Il sabato è dedicato alle <strong>Ore Private</strong> con i maestri <strong>Marika & Michele</strong>. Corsi su misura per singoli o coppie con orario flessibile concordato in base alle tue esigenze.
              </p>
              
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-[#a88a81]">
                <span className="flex items-center gap-1 text-[#e2e2e6]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Ballo per Sposi (Wedding Dance)
                </span>
                <span className="flex items-center gap-1 text-[#e2e2e6]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Preparazione Competizioni FIDS
                </span>
                <span className="flex items-center gap-1 text-[#e2e2e6]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Perfezionamento Tecnico 1-to-1
                </span>
              </div>
            </div>

            {/* Actions for Private Lesson */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
              <button
                id="schedule-book-private-btn"
                onClick={() => handleBooking('Ore Private & Personal Coaching', 'Sabato')}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 cursor-pointer"
              >
                <span>Richiedi Lezione Privata</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="schedule-whatsapp-private-btn"
                href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Ciao! Vorrei prenotare o avere informazioni sulle Ore Private del Sabato.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 text-[#e2e2e6] hover:text-white border border-white/10 hover:border-white/20 font-semibold text-sm px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Info veloci WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Booking CTA Ribbon */}
        <div className="mt-14 text-center">
          <p className="text-sm text-[#a88a81] mb-4">
            Hai dubbi su quale corso sia più adatto al tuo livello?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              id="schedule-bottom-trial-btn"
              onClick={() => handleBooking()}
              className="bg-[#ffb59d] hover:bg-[#ff9d7e] text-[#390c00] font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,181,157,0.3)] hover:shadow-[0_0_35px_rgba(255,181,157,0.6)] cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Prenota la tua Prova Gratuita</span>
            </button>

            <a
              id="schedule-bottom-phone-btn"
              href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`}
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-300"
            >
              <PhoneCall className="w-4 h-4 text-indigo-400" />
              <span>Chiamaci: {SCHOOL_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
