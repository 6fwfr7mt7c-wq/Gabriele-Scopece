import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { SCHOOL_INFO } from '../data/danceData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#16181b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[80vh]"
        >
          {/* Header */}
          <div className="p-6 bg-[#1e2023] border-b border-white/5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#ffb59d]/10 text-[#ffb59d] flex items-center justify-center">
                {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-['Montserrat',sans-serif]">
                  {isPrivacy ? 'Informativa sulla Privacy (GDPR)' : 'Termini e Condizioni di Servizio'}
                </h3>
                <p className="text-xs text-[#a88a81]">
                  {SCHOOL_INFO.name} • {SCHOOL_INFO.fullAddress}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#a88a81] hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Chiudi finestra"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto space-y-4 text-sm text-[#e2e2e6] leading-relaxed">
            {isPrivacy ? (
              <>
                <p>
                  Ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR), La Vida Loca Crew, con sede in {SCHOOL_INFO.fullAddress}, informa che i dati personali forniti tramite i moduli del sito web vengono trattati esclusivamente per rispondere alle richieste di informazioni e per la gestione delle prenotazioni delle lezioni di prova gratuite.
                </p>
                <h4 className="font-bold text-white text-base pt-2">1. Finalità del trattamento</h4>
                <p>
                  I dati raccolti (nome, indirizzo email, recapito telefonico) sono utilizzati unicamente per l'organizzazione delle attività didattiche e sportive, per contattare l'utente in merito alla richiesta inoltrata e per aggiornamenti relativi ai corsi di danza.
                </p>
                <h4 className="font-bold text-white text-base pt-2">2. Modalità di conservazione</h4>
                <p>
                  I dati non vengono ceduti a terzi né profilati per scopi pubblicitari esterni. Sono custoditi con misure di sicurezza adeguate a prevenire accessi non autorizzati o dispersioni.
                </p>
                <h4 className="font-bold text-white text-base pt-2">3. Diritti dell'interessato</h4>
                <p>
                  L'utente può in qualsiasi momento richiedere l'accesso, la rettifica o la cancellazione dei propri dati inviando una comunicazione a <strong>{SCHOOL_INFO.email}</strong> o rivolgendosi direttamente presso la sede in Via Lucera 121, Foggia.
                </p>
              </>
            ) : (
              <>
                <p>
                  I presenti Termini disciplinano l'accesso ai servizi educativi e sportivi erogati da La Vida Loca Crew presso la sede di Foggia e tramite la presente piattaforma informativa.
                </p>
                <h4 className="font-bold text-white text-base pt-2">1. Lezione di Prova Gratuita</h4>
                <p>
                  La partecipazione alla prima lezione di prova è offerta a titolo gratuito e non comporta alcun obbligo di iscrizione successiva. Per partecipare è consigliato abbigliamento comodo e calzature idonee alla danza.
                </p>
                <h4 className="font-bold text-white text-base pt-2">2. Iscrizioni e Certificato Medico</h4>
                <p>
                  L'iscrizione ai corsi di danza sportiva o amatoriali richiede la presentazione del certificato medico di idoneità all'attività sportiva (non agonistica o agonistica a seconda del percorso prescelto).
                </p>
                <h4 className="font-bold text-white text-base pt-2">3. Regolamento delle Sale</h4>
                <p>
                  Gli allievi sono tenuti a rispettare gli orari stabiliti per le lezioni, la cura dei locali, delle sale da ballo e degli arredi della scuola di danza, mantenendo uno spirito di rispetto e collaborazione reciproca.
                </p>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 bg-[#111316] border-t border-white/5 flex justify-end shrink-0">
            <button
              onClick={onClose}
              className="bg-[#ffb59d] text-[#390c00] font-semibold text-xs px-5 py-2.5 rounded-full hover:bg-[#ffa588] transition-colors"
            >
              Ho capito
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
