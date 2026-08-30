import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  Sparkles,
  AlertCircle,
  User,
  ExternalLink,
  ChevronDown,
  HelpCircle,
  MessageCircle
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/danceData';

interface ContactMapSectionProps {
  onSuccessToast: (message: string) => void;
}

export const ContactMapSection: React.FC<ContactMapSectionProps> = ({ onSuccessToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: 'Danze Latino Americane',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [activeMapView, setActiveMapView] = useState<'stylized' | 'interactive'>('stylized');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqList = [
    {
      question: 'Come funziona la prima lezione di prova?',
      answer: 'La prima lezione di prova è completamente gratuita e senza alcun impegno. Ti basta prenotare qui sul sito o via WhatsApp, venire con abiti comodi e scarpe pulite. Potrai conoscere i maestri, la struttura e vivere l\'energia del gruppo!'
    },
    {
      question: 'Non ho mai ballato prima d\'ora: posso iniziare lo stesso?',
      answer: 'Certamente! I nostri corsi di livello Base e Primi Passi partono da zero assoluto (ritmo musicale, postura, passi base e coordinazione). I nostri maestri certificati seguono ogni allievo passo dopo passo con pazienza ed entusiasmo.'
    },
    {
      question: 'Qual è l\'abbigliamento o le scarpe consigliate per le prime lezioni?',
      answer: 'Per iniziare consigliamo un abbigliamento comodo e traspirante (t-shirt, pantaloni morbidi o leggings) e scarpe da ginnastica pulite con suola flessibile. In seguito i docenti ti consiglieranno eventuali calzature da ballo specifiche.'
    },
    {
      question: 'È possibile iscriversi a corsi già avviati durante l\'anno?',
      answer: 'Sì! Accogliamo nuovi iscritti durante tutto l\'anno accademico. In caso di inserimento a corso già avviato, i maestri e gli assistenti ti dedicheranno un supporto personalizzato per metterti subito a tuo agio.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.name.trim()) {
      setErrorMessage('Inserisci il tuo Nome Completo.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Inserisci un recapito Telefonico valido.');
      return;
    }

    const waText = `Ciao! Vorrei prenotare una lezione di prova gratuita.
- Nome: ${formData.name.trim()}
- Telefono: ${formData.phone.trim()}
- Corso scelto: ${formData.course || 'Danze Latino Americane'}`;

    const waUrl = `https://api.whatsapp.com/send?phone=393806859310&text=${encodeURIComponent(waText)}`;

    // Open WhatsApp in a new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    onSuccessToast(`Apertura chat WhatsApp con la direzione per la prenotazione di ${formData.name}!`);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#16181b] relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
        
        {/* Section Headline */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#ffb59d] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Contatti & Sede Ufficiale
          </div>
          <motion.h2
            id="contact-headline"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-['Montserrat',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Vieni a trovarci
          </motion.h2>
          <p className="text-sm sm:text-base text-[#a88a81] mt-2 max-w-2xl">
            Ti aspettiamo nella nostra sede di Foggia per conoscerci di persona, provare i corsi o richiedere qualsiasi informazione.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Info + Form (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Contact Info Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Indirizzo */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1e2023]/60 border border-white/5 hover:border-[#ffb59d]/40 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 shadow-md">
                <div className="w-11 h-11 rounded-full bg-[#37393d] border border-white/10 flex items-center justify-center shrink-0 text-[#ffb59d]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Montserrat',sans-serif] font-semibold text-sm text-white mb-1">
                    Indirizzo Sede
                  </h4>
                  <p className="text-sm text-[#e2e2e6] leading-snug">
                    {SCHOOL_INFO.address}<br />
                    <span className="text-[#a88a81]">{SCHOOL_INFO.capCity}</span>
                  </p>
                </div>
              </div>

              {/* Orari di Apertura */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1e2023]/60 border border-white/5 hover:border-[#ffb59d]/40 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 shadow-md">
                <div className="w-11 h-11 rounded-full bg-[#37393d] border border-white/10 flex items-center justify-center shrink-0 text-[#ffb59d]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Montserrat',sans-serif] font-semibold text-sm text-white mb-1">
                    Orari di Segreteria
                  </h4>
                  <p className="text-sm text-[#e2e2e6] leading-snug">
                    {SCHOOL_INFO.hours.split('dalle')[0]}<br />
                    <span className="text-[#ffb59d] font-medium">dalle 17:00</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Contact Form Card */}
            <div className="bg-[#111316] rounded-2xl p-6 sm:p-8 border border-white/5 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div>
                  <h3 className="font-['Montserrat',sans-serif] text-xl sm:text-2xl font-bold text-white">
                    Prenota la tua Lezione di Prova
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a88a81] mt-1">
                    Compila i campi per inviare direttamente la richiesta su WhatsApp alla scuola
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366]/10 text-[#25D366] text-xs font-semibold border border-[#25D366]/20">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Diretto</span>
                </div>
              </div>

              {/* Error Notification Banner */}
              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-sm flex items-start gap-3 animate-in fade-in duration-200">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-red-100">Attenzione:</span>
                    <span>{errorMessage}</span>
                  </div>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Nome Completo (Required) */}
                <div>
                  <label
                    htmlFor="form-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#a88a81] mb-2"
                  >
                    Nome e Cognome <span className="text-[#ffb59d]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#a88a81] absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Es. Mario Rossi"
                      className="w-full bg-[#282a2d] border border-[#59413a]/60 rounded-xl pl-10 pr-4 py-3 text-white placeholder-[#888] focus:outline-none focus:border-[#ffb59d] focus:ring-1 focus:ring-[#ffb59d] transition-all text-sm sm:text-base hover:border-[#ffb59d]/50"
                    />
                  </div>
                </div>

                {/* Telefono & Corso Scelto */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="form-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#a88a81] mb-2"
                    >
                      Numero di Telefono <span className="text-[#ffb59d]">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#a88a81] absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        id="form-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+39 3XX XXXXXXX"
                        className="w-full bg-[#282a2d] border border-[#59413a]/60 rounded-xl pl-10 pr-4 py-3 text-white placeholder-[#888] focus:outline-none focus:border-[#ffb59d] focus:ring-1 focus:ring-[#ffb59d] transition-all text-sm sm:text-base hover:border-[#ffb59d]/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="form-course"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#a88a81] mb-2"
                    >
                      Corso Selezionato <span className="text-[#ffb59d]">*</span>
                    </label>
                    <select
                      id="form-course"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full bg-[#282a2d] border border-[#59413a]/60 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ffb59d] transition-all text-sm sm:text-base hover:border-[#ffb59d]/50"
                    >
                      <option value="Danze Latino Americane (Samba, Cha Cha, Rumba, Paso, Jive)">Danze Latino Americane</option>
                      <option value="Danze Standard (Valzer, Tango, Slow Fox, Quickstep)">Danze Standard</option>
                      <option value="Caraibici (Salsa, Bachata, Merengue)">Caraibici (Salsa, Bachata)</option>
                      <option value="Liscio Unificato & Ballo da Sala">Liscio Unificato & Ballo da Sala</option>
                      <option value="Syncro Latin & Coreografico di Gruppo">Syncro Latin & Coreografico</option>
                      <option value="Ballo Sociale & Primi Passi Adulti">Ballo Sociale & Primi Passi</option>
                    </select>
                  </div>
                </div>

                {/* Submit button opening WhatsApp */}
                <div className="pt-2">
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-[#073619] hover:text-[#031e0d] font-bold text-sm sm:text-base px-6 py-4 rounded-xl transition-all duration-300 ease-out active:scale-95 cursor-pointer shadow-[0_4px_25px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_35px_rgba(37,211,102,0.65)] hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2 group border border-[#52e486]/60"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Prenota la Prova su WhatsApp (+39 380 685 9310)</span>
                  </button>
                  
                  <p className="text-center text-xs text-[#a88a81] mt-3">
                    Ti si aprirà automaticamente WhatsApp con il messaggio precompilato pronto all'invio.
                  </p>
                </div>
              </form>
            </div>

          </div>

          {/* Right Column: Map Area (5 cols on desktop) */}
          <div className="lg:col-span-5 h-full">
            <div className="sticky top-28 space-y-3">
              {/* Map switcher pills */}
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-semibold text-[#a88a81] uppercase tracking-wider">
                  Mappa & Indicazioni
                </span>
                <div className="flex items-center gap-1 bg-[#1e2023] p-1 rounded-lg border border-white/5 text-xs">
                  <button
                    onClick={() => setActiveMapView('stylized')}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      activeMapView === 'stylized'
                        ? 'bg-[#ffb59d] text-[#390c00] font-semibold'
                        : 'text-[#a88a81] hover:text-white'
                    }`}
                  >
                    Design Scuro
                  </button>
                  <button
                    onClick={() => setActiveMapView('interactive')}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      activeMapView === 'interactive'
                        ? 'bg-[#ffb59d] text-[#390c00] font-semibold'
                        : 'text-[#a88a81] hover:text-white'
                    }`}
                  >
                    Mappa Live
                  </button>
                </div>
              </div>

              {/* Map Container */}
              <div
                id="map-container"
                className="h-[420px] sm:h-[460px] lg:h-[500px] w-full bg-[#1e2023] rounded-xl overflow-hidden relative border border-white/10 shadow-2xl flex items-center justify-center group"
              >
                {activeMapView === 'stylized' ? (
                  <>
                    {/* Abstract Stylized Map Background & Grid */}
                    <div
                      className="absolute inset-0 bg-[#111316]"
                      style={{
                        backgroundImage: `radial-gradient(circle at center, rgba(55,57,61,0.6) 0%, rgba(17,19,22,0.95) 75%)`,
                      }}
                    />

                    {/* Street pattern grid lines */}
                    <div className="absolute inset-0 grid grid-cols-12 gap-2 opacity-20 pointer-events-none">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="col-span-1 border-r border-white/15 h-full" />
                      ))}
                    </div>
                    <div className="absolute inset-0 grid grid-rows-12 gap-2 opacity-15 pointer-events-none">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="row-span-1 border-b border-white/15 w-full" />
                      ))}
                    </div>

                    {/* Foggia road diagonal lines representation */}
                    <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0" y1="20%" x2="100%" y2="80%" stroke="#ffb59d" strokeWidth="2" strokeDasharray="6,6" />
                      <line x1="20%" y1="0" x2="80%" y2="100%" stroke="#e2e2e6" strokeWidth="1.5" />
                      <circle cx="50%" cy="50%" r="90" stroke="#ffb59d" strokeWidth="1" opacity="0.3" fill="none" />
                      <circle cx="50%" cy="50%" r="150" stroke="#ffb59d" strokeWidth="1" opacity="0.15" fill="none" />
                    </svg>

                    {/* Center Location Pin Badge */}
                    <div className="relative z-10 text-center flex flex-col items-center p-6">
                      {/* Pulsing Pin Ring */}
                      <div className="relative mb-4">
                        <div className="w-16 h-16 bg-[#ffb59d]/20 rounded-full flex items-center justify-center animate-pulse">
                          <div className="w-10 h-10 bg-[#ffb59d]/40 rounded-full flex items-center justify-center">
                            <MapPin className="w-6 h-6 text-[#ffb59d] fill-[#ffb59d]" />
                          </div>
                        </div>
                      </div>

                      <h3 className="font-['Montserrat',sans-serif] text-2xl font-bold text-white mb-1.5 tracking-tight">
                        Foggia, IT
                      </h3>
                      <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-[#a88a81] mb-6">
                        Via Lucera, 121 • 71121 Foggia
                      </p>

                      <a
                        id="open-in-maps-btn"
                        href={SCHOOL_INFO.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-[#ffb59d] text-[#ffb59d] hover:bg-[#ffb59d] hover:text-[#390c00] font-['Montserrat',sans-serif] font-semibold text-xs uppercase tracking-wider px-7 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(255,181,157,0.5)] hover:scale-105 inline-flex items-center gap-2 cursor-pointer active:scale-95 group"
                      >
                        <span>Apri in Maps</span>
                        <Navigation className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45" />
                      </a>
                    </div>
                  </>
                ) : (
                  /* Interactive OpenStreetMap Embed */
                  <iframe
                    title="Mappa La Vida Loca Crew Via Lucera 121 Foggia"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=15.5300%2C41.4550%2C15.5600%2C41.4750&amp;layer=mapnik&amp;marker=41.4650%2C15.5450"
                    className="w-full h-full border-0 filter invert-[0.88] hue-rotate-180 contrast-[1.1]"
                  />
                )}
              </div>

              {/* Direct Directions Helper Card */}
              <div className="p-3.5 rounded-lg bg-[#111316] border border-white/5 flex items-center justify-between text-xs text-[#a88a81]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Facile parcheggio su Via Lucera
                </span>
                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="text-[#ffb59d] hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" /> Info rapide
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* FAQ Accordion Block */}
        <div id="faq" className="mt-20 pt-16 border-t border-white/5 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffb59d]/10 border border-[#ffb59d]/20 text-xs font-semibold text-[#ffb59d] uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Domande Frequenti</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-['Montserrat',sans-serif] text-white tracking-tight">
              Tutto quello che vuoi sapere
            </h3>
            <p className="text-xs sm:text-sm text-[#a88a81] mt-2 max-w-lg mx-auto">
              Hai curiosità o dubbi prima di prenotare la tua prova? Ecco le risposte alle domande più frequenti.
            </p>
          </div>

          <div className="space-y-3.5" id="faq-accordion-container">
            {faqList.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  id={`faq-item-${index}`}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#1a1d22] border-[#ffb59d]/40 shadow-lg shadow-black/40'
                      : 'bg-[#16181c]/70 hover:bg-[#1a1d22]/80 border-white/5 hover:border-white/15'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer group"
                    aria-expanded={isOpen}
                    id={`faq-button-${index}`}
                  >
                    <span className="text-base sm:text-lg font-semibold text-white group-hover:text-[#ffb59d] transition-colors pr-2 flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 text-xs flex items-center justify-center text-[#ffb59d] font-bold shrink-0">
                        {index + 1}
                      </span>
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen ? 'bg-[#ffb59d] text-[#390c00]' : 'bg-white/5 text-[#a88a81] group-hover:text-white group-hover:bg-white/10'
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ease-out ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-sm sm:text-base text-[#c7b4ad] leading-relaxed border-t border-white/5">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        </motion.div>
      </div>
    </section>
  );
};
