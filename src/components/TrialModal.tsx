import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, CheckCircle2, User, Mail, Phone, Calendar } from 'lucide-react';
import { COURSES_DATA } from '../data/danceData';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
  defaultCourse?: string;
  defaultDay?: string;
}

export const TrialModal: React.FC<TrialModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  defaultCourse,
  defaultDay,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: defaultCourse || 'standard',
    experience: 'beginner',
    preferredDay: defaultDay || 'Lunedì',
    notes: '',
  });

  React.useEffect(() => {
    if (isOpen) {
      if (defaultCourse || defaultDay) {
        setFormData((prev) => ({
          ...prev,
          course: defaultCourse || prev.course,
          preferredDay: defaultDay || prev.preferredDay,
        }));
      }
    }
  }, [isOpen, defaultCourse, defaultDay]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const courseObj = COURSES_DATA.find((c) => c.id === formData.course);
    const courseTitle = courseObj ? courseObj.title : formData.course;

    const fullMessage = `Prenotazione Lezione di Prova Gratuita:
- Disciplina: ${courseTitle}
- Livello: ${formData.experience}
- Giorno preferito: ${formData.preferredDay}
- Note/Partner: ${formData.notes || 'Nessuna nota specificata'}`;

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: fullMessage,
        }),
      });
    } catch (err) {
      console.warn('Backend log note:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      onSuccess(`Prenotazione confermata per ${formData.name}! Ti aspettiamo in sede.`);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    }
  };

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
          className="relative w-full max-w-xl bg-[#16181b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header Bar */}
          <div className="p-6 sm:p-8 bg-[#1e2023] border-b border-white/5 flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#ffb59d] font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                La Vida Loca Crew • Foggia
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Montserrat',sans-serif]">
                Prenota la tua Lezione di Prova
              </h3>
              <p className="text-xs sm:text-sm text-[#a88a81] mt-1">
                La prima lezione è sempre gratuita e senza impegno.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#a88a81] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Chiudi finestra"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-[#ffb59d]/20 text-[#ffb59d] rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold font-['Montserrat',sans-serif] text-white mb-2">
                  Prenotazione Ricevuta!
                </h4>
                <p className="text-[#e2e2e6] text-sm max-w-sm mx-auto mb-4">
                  Ti aspettiamo in sede in <strong>Via Lucera, 121 (Foggia)</strong> per la tua lezione di prova gratuita.
                </p>
                <span className="text-xs text-[#a88a81]">Questa finestra si chiuderà automaticamente...</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Course Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#a88a81] mb-2">
                    Quale disciplina vorresti provare? *
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full bg-[#282a2d] border border-[#59413a]/60 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ffb59d] text-sm"
                  >
                    {COURSES_DATA.map((course) => (
                      <option key={course.id} value={course.id} className="bg-[#1e2023] text-white">
                        {course.title} ({course.level})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Experience Level & Day */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#a88a81] mb-2">
                      Livello di esperienza
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full bg-[#282a2d] border border-[#59413a]/60 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ffb59d] text-sm"
                    >
                      <option value="beginner" className="bg-[#1e2023]">Principiante assoluto</option>
                      <option value="intermediate" className="bg-[#1e2023]">Ho già ballato (Intermedio)</option>
                      <option value="advanced" className="bg-[#1e2023]">Agonista / Avanzato</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#a88a81] mb-2">
                      Giorno preferito
                    </label>
                    <select
                      value={formData.preferredDay}
                      onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
                      className="w-full bg-[#282a2d] border border-[#59413a]/60 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ffb59d] text-sm"
                    >
                      <option value="Lunedì" className="bg-[#1e2023]">Lunedì</option>
                      <option value="Martedì" className="bg-[#1e2023]">Martedì</option>
                      <option value="Mercoledì" className="bg-[#1e2023]">Mercoledì</option>
                      <option value="Giovedì" className="bg-[#1e2023]">Giovedì</option>
                      <option value="Venerdì" className="bg-[#1e2023]">Venerdì</option>
                      <option value="Sabato" className="bg-[#1e2023]">Sabato</option>
                    </select>
                  </div>
                </div>

                {/* Personal Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#a88a81] mb-2">
                      Nome e Cognome *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#a88a81] absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Mario Rossi"
                        className="w-full bg-[#282a2d] border border-[#59413a]/60 rounded-xl pl-10 pr-4 py-3 text-white placeholder-[#888] focus:outline-none focus:border-[#ffb59d] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#a88a81] mb-2">
                      Telefono WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#a88a81] absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+39 3XX XXXXXXX"
                        className="w-full bg-[#282a2d] border border-[#59413a]/60 rounded-xl pl-10 pr-4 py-3 text-white placeholder-[#888] focus:outline-none focus:border-[#ffb59d] text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#a88a81] mb-2">
                    Email per la conferma *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#a88a81] absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="mario.rossi@email.com"
                      className="w-full bg-[#282a2d] border border-[#59413a]/60 rounded-xl pl-10 pr-4 py-3 text-white placeholder-[#888] focus:outline-none focus:border-[#ffb59d] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#a88a81] mb-2">
                    Hai un partner o vieni da solo/a? (Opzionale)
                  </label>
                  <input
                    type="text"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Es. Vengo in coppia / Vengo da solo / Ballo già da 1 anno..."
                    className="w-full bg-[#282a2d] border border-[#59413a]/60 rounded-xl px-4 py-2.5 text-white placeholder-[#888] focus:outline-none focus:border-[#ffb59d] text-sm"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#ffb59d] hover:bg-[#ff9d7e] text-[#390c00] font-semibold text-base py-4 rounded-xl shadow-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(255,181,157,0.5)]"
                  >
                    {isSubmitting ? (
                      <span>Invio in corso...</span>
                    ) : (
                      <>
                        <span>Conferma Prenotazione Gratuita</span>
                        <CheckCircle2 className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-[#a88a81] mt-2.5">
                    Nessuna carta richiesta • Cancellazione libera • Sede: Via Lucera 121, Foggia
                  </p>
                </div>

              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
