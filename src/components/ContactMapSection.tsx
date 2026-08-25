import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  Navigation,
  Sparkles,
  AlertCircle,
  MessageSquare,
  User,
  ExternalLink
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/danceData';

interface ContactMapSectionProps {
  onSuccessToast: (message: string) => void;
}

interface SubmissionDetails {
  referenceId: string;
  recipient: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  timestamp: string;
}

export const ContactMapSection: React.FC<ContactMapSectionProps> = ({ onSuccessToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submissionResult, setSubmissionResult] = useState<SubmissionDetails | null>(null);
  const [activeMapView, setActiveMapView] = useState<'stylized' | 'interactive'>('stylized');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation: All 4 fields must be filled
    if (!formData.name.trim()) {
      setErrorMessage('Inserisci il tuo Nome Completo.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Inserisci un indirizzo Email valido.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Inserisci un recapito Telefonico valido.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Inserisci il tuo Messaggio o richiesta di informazioni.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Si è verificato un errore durante l\'invio.');
      }

      const resultDetails: SubmissionDetails = {
        referenceId: data.details?.referenceId || `LVL-${Date.now().toString(36).toUpperCase()}`,
        recipient: data.details?.recipient || 'gabrielescopecefg@gmail.com',
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        timestamp: new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }),
      };

      setSubmissionResult(resultDetails);
      onSuccessToast(`Messaggio inviato con successo! Ti risponderemo a breve.`);
      
      // Clear form inputs
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err: any) {
      console.error('Errore invio form:', err);
      setErrorMessage(
        err.message || 'Non è stato possibile recapitare il messaggio. Verifica la connessione e riprova.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmissionResult(null);
    setErrorMessage(null);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#16181b] relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1e2023]/60 border border-white/5 hover:border-[#ffb59d]/30 transition-all duration-300">
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
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1e2023]/60 border border-white/5 hover:border-[#ffb59d]/30 transition-all duration-300">
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
                    Richiedi Informazioni
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a88a81] mt-1">
                    Tutti i campi contrassegnati con <span className="text-[#ffb59d] font-bold">*</span> sono obbligatori
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffb59d]/10 text-[#ffb59d] text-xs font-semibold border border-[#ffb59d]/20">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Notifica Diretta</span>
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

              {/* Success Confirmation View */}
              {submissionResult ? (
                <div className="p-6 sm:p-8 rounded-xl bg-[#1e2023] border border-[#ffb59d]/50 text-center py-8 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#ffb59d]/20 text-[#ffb59d] flex items-center justify-center mx-auto mb-4 border border-[#ffb59d]/40 shadow-[0_0_20px_rgba(255,181,157,0.3)]">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  
                  <h4 className="text-xl sm:text-2xl font-bold text-white font-['Montserrat',sans-serif] mb-2">
                    Messaggio Ricevuto con Successo!
                  </h4>
                  
                  <p className="text-sm text-[#e2e2e6] max-w-md mx-auto mb-6 leading-relaxed">
                    Grazie <strong className="text-white">{submissionResult.name}</strong>, la tua richiesta è stata inoltrata al titolare della scuola. Ti risponderemo a breve al numero <strong className="text-[#ffb59d]">{submissionResult.phone}</strong> o via email.
                  </p>

                  {/* Summary of sent data */}
                  <div className="bg-[#111316] rounded-xl p-4 sm:p-5 text-left border border-white/5 max-w-md mx-auto space-y-2.5 text-xs text-[#e2e2e6] mb-6">
                    <div className="flex justify-between items-center text-[#a88a81] border-b border-white/5 pb-2">
                      <span>Codice Ricevuta:</span>
                      <span className="font-mono text-[#ffb59d] font-semibold">{submissionResult.referenceId}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#a88a81]">Nome:</span>
                      <span className="font-medium text-white">{submissionResult.name}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#a88a81]">Email mittente:</span>
                      <span className="font-medium">{submissionResult.email}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#a88a81]">Telefono:</span>
                      <span className="font-medium text-[#ffb59d]">{submissionResult.phone}</span>
                    </div>
                    <div className="pt-2 border-t border-white/5">
                      <span className="text-[#a88a81] block mb-1">Messaggio inviato:</span>
                      <p className="italic text-[#a88a81] bg-[#1e2023] p-2.5 rounded-lg border border-white/5">
                        "{submissionResult.message}"
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleResetForm}
                      className="w-full sm:w-auto text-xs sm:text-sm font-semibold text-[#390c00] bg-[#ffb59d] hover:bg-[#ff9d7e] px-6 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(255,181,157,0.4)] cursor-pointer"
                    >
                      Invia un altro messaggio
                    </button>
                    <a
                      href={SCHOOL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto text-xs sm:text-sm font-medium text-[#25D366] hover:text-white px-5 py-2.5 rounded-full border border-[#25D366]/40 hover:border-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366] hover:text-[#073619] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Scrivici su WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  
                  {/* Nome Completo (Required) */}
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#a88a81] mb-2"
                    >
                      Nome Completo <span className="text-[#ffb59d]">*</span>
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

                  {/* Email & Telefono (Both strictly required) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="form-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#a88a81] mb-2"
                      >
                        Indirizzo Email <span className="text-[#ffb59d]">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#a88a81] absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          id="form-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="mario.rossi@email.com"
                          className="w-full bg-[#282a2d] border border-[#59413a]/60 rounded-xl pl-10 pr-4 py-3 text-white placeholder-[#888] focus:outline-none focus:border-[#ffb59d] focus:ring-1 focus:ring-[#ffb59d] transition-all text-sm sm:text-base hover:border-[#ffb59d]/50"
                        />
                      </div>
                    </div>

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
                  </div>

                  {/* Messaggio (Strictly required) */}
                  <div>
                    <label
                      htmlFor="form-message"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#a88a81] mb-2"
                    >
                      Messaggio <span className="text-[#ffb59d]">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-[#a88a81] absolute left-3.5 top-3.5 pointer-events-none" />
                      <textarea
                        id="form-message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Come possiamo aiutarti? (Es. vorrei informazioni sul corso di Danze Standard o prenotare una prova per principianti...)"
                        className="w-full bg-[#282a2d] border border-[#59413a]/60 rounded-xl pl-10 pr-4 py-3 text-white placeholder-[#888] focus:outline-none focus:border-[#ffb59d] focus:ring-1 focus:ring-[#ffb59d] transition-all resize-none text-sm sm:text-base hover:border-[#ffb59d]/50"
                      />
                    </div>
                  </div>

                  {/* Submit button with glow and loading state */}
                  <div className="pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#ffb59d] hover:bg-[#ff9d7e] text-[#390c00] hover:text-[#200500] font-semibold text-sm sm:text-base px-6 py-4 rounded-xl transition-all duration-300 ease-out active:scale-[0.99] cursor-pointer shadow-[0_0_20px_rgba(255,181,157,0.3)] hover:shadow-[0_0_35px_rgba(255,181,157,0.6)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group border border-transparent hover:border-[#ffe0d6] disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin w-4 h-4 border-2 border-[#390c00] border-t-transparent rounded-full" />
                          <span>Inoltro messaggio al titolare...</span>
                        </span>
                      ) : (
                        <>
                          <span>Invia Richiesta al Titolare</span>
                          <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-center text-xs text-[#a88a81] mt-3">
                      I dati inviati saranno trasmessi via protocollo sicuro alla direzione di La Vida Loca Crew.
                    </p>
                  </div>
                </form>
              )}
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

      </div>
    </section>
  );
};
