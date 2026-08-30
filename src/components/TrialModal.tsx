import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, CheckCircle2, User, Mail, Phone, Calendar } from 'lucide-react';

export const TRIAL_DISCIPLINES = [
  'Somblera',
  'Total Body Dance',
  'Latin American Style',
  'Yoga',
  'Baby Dance',
  'Solo Latin',
] as const;

const resolveDefaultDiscipline = (input?: string): string => {
  if (!input) return TRIAL_DISCIPLINES[0];
  const exact = TRIAL_DISCIPLINES.find((d) => d.toLowerCase() === input.toLowerCase());
  if (exact) return exact;
  const partial = TRIAL_DISCIPLINES.find(
    (d) => d.toLowerCase().includes(input.toLowerCase()) || input.toLowerCase().includes(d.toLowerCase())
  );
  if (partial) return partial;
  if (input.toLowerCase().includes('latini') || input.toLowerCase().includes('latin')) return 'Latin American Style';
  if (input.toLowerCase().includes('somblera') || input.toLowerCase().includes('fitness')) return 'Somblera';
  if (input.toLowerCase().includes('total') || input.toLowerCase().includes('body')) return 'Total Body Dance';
  if (input.toLowerCase().includes('yoga')) return 'Yoga';
  if (input.toLowerCase().includes('baby') || input.toLowerCase().includes('kids')) return 'Baby Dance';
  if (input.toLowerCase().includes('solo') || input.toLowerCase().includes('synchro')) return 'Solo Latin';
  return TRIAL_DISCIPLINES[0];
};

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
    course: resolveDefaultDiscipline(defaultCourse),
    experience: 'beginner',
    preferredDay: defaultDay || 'Lunedì',
    notes: '',
  });

  React.useEffect(() => {
    if (isOpen) {
      if (defaultCourse || defaultDay) {
        setFormData((prev) => ({
          ...prev,
          course: defaultCourse ? resolveDefaultDiscipline(defaultCourse) : prev.course,
          preferredDay: defaultDay || prev.preferredDay,
        }));
      }
    }
  }, [isOpen, defaultCourse, defaultDay]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const courseChosen = formData.course || 'Danze Latino Americane';
    const waText = `Ciao! Vorrei prenotare una lezione di prova gratuita.
- Nome: ${formData.name.trim()}
- Telefono: ${formData.phone.trim() || 'Non specificato'}
- Corso scelto: ${courseChosen}`;

    const waUrl = `https://api.whatsapp.com/send?phone=393806859310&text=${encodeURIComponent(waText)}`;

    // Open WhatsApp directly in a new tab with secure parameters
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    
    onSuccess(`Apertura chat WhatsApp con la scuola per la lezione di prova di ${formData.name}!`);
    setTimeout(() => {
      onClose();
    }, 1000);
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
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#25D366] font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                La Vida Loca Crew • WhatsApp Diretto
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Montserrat',sans-serif]">
                Prenota la tua Lezione di Prova
              </h3>
              <p className="text-xs sm:text-sm text-[#a88a81] mt-1">
                Compila i campi per inviare la richiesta direttamente su WhatsApp.
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
                    id="trial-discipline-select"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full bg-[#282a2d] border border-[#59413a]/60 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ffb59d] text-sm cursor-pointer"
                  >
                    {TRIAL_DISCIPLINES.map((discipline) => (
                      <option key={discipline} value={discipline} className="bg-[#1e2023] text-white">
                        {discipline}
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
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-[#073619] hover:text-[#031e0d] font-bold text-base py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 cursor-pointer flex items-center justify-center gap-2 border border-[#52e486]/60 shadow-[0_4px_25px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_35px_rgba(37,211,102,0.65)]"
                  >
                    <Phone className="w-5 h-5 fill-current" />
                    <span>Prenota la Prova su WhatsApp (+39 380 685 9310)</span>
                  </button>
                  <p className="text-center text-xs text-[#a88a81] mt-2.5">
                    Nessuna carta richiesta • Prova gratuita senza impegno • Sede: Via Lucera 121, Foggia
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
