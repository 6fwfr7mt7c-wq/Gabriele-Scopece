import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Heart, Sparkles, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      text: 'Insegnanti qualificati di alto livello',
      desc: 'Formazione tecnica certificata e continua esperienza agonistica.',
    },
    {
      text: 'Ambiente moderno ed elegante',
      desc: 'Sale spaziose con parquet professionale ammortizzato e specchi a tutta parete.',
    },
    {
      text: 'Corsi per tutti i livelli ed età',
      desc: 'Dai primissimi passi per principianti assoluti fino ai percorsi per atleti competitori.',
    },
  ];

  const scrollToContact = () => {
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

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[#111316] relative border-t border-white/5 overflow-hidden"
    >
      {/* Background subtle radial ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#ffb59d]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column (Studio Image with Ambient Glow) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            {/* Glow blur element behind image */}
            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-[#ffb59d]/25 via-transparent to-[#ffb59d]/10 rounded-2xl sm:rounded-3xl blur-xl z-0 pointer-events-none" />
            
            {/* Studio Image Container */}
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                id="about-studio-img"
                src="https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?q=80&w=1200&auto=format&fit=crop"
                alt="Dance Studio La Vida Loca Crew con parquet in legno e specchi"
                className="w-full h-auto aspect-[4/5] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e11]/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl bg-[#1e2023]/90 backdrop-blur-md border border-white/10 flex items-center justify-between transition-all duration-300 hover:border-[#ffb59d]/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#ffb59d]/20 text-[#ffb59d] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-['Montserrat',sans-serif] text-white">
                      Sala Ballo Professionale
                    </h4>
                    <p className="text-xs text-[#a88a81]">
                      Parquet elastico e acustica studiata
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center text-xs font-semibold text-[#ffb59d] px-2.5 py-1 rounded-full bg-[#ffb59d]/10 border border-[#ffb59d]/20">
                  Foggia, Via Lucera 121
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#ffb59d] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Chi Siamo & La Nostra Filosofia
            </div>

            <h2
              id="about-headline"
              className="font-['Montserrat',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-3"
            >
              L'eccellenza incontra la passione
            </h2>

            {/* Accent Gold/Peach Bar */}
            <div className="w-20 h-1.5 bg-[#ffb59d] mb-6 rounded-full" />

            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-base sm:text-lg text-[#e2e2e6] mb-5 leading-relaxed">
              Alla <strong>La Vida Loca Crew</strong>, crediamo che la danza sia molto più di un semplice movimento. È un'espressione di eleganza, rigore tecnico e calore umano. I nostri fondatori, <span className="text-[#ffb59d] font-semibold">Marika</span> e <span className="text-[#ffb59d] font-semibold">Michele</span>, sono professionisti altamente preparati che portano l'atmosfera d'élite della danza sportiva direttamente nella tua comunità.
            </p>

            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#a88a81] mb-8 leading-relaxed">
              Offriamo un ambiente dove l'alta qualità dell'insegnamento si fonde con un'accoglienza calorosa. Che tu stia muovendo i primi passi o che tu stia cercando di perfezionare la tua tecnica per le competizioni, qui troverai una famiglia pronta a guidarti verso l'eccellenza.
            </p>

            {/* Checklist items with interactive hover */}
            <ul id="about-checklist" className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 group"
                >
                  <div className="mt-0.5 shrink-0 text-[#ffb59d] group-hover:scale-110 transition-transform duration-200">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-white font-medium text-base block group-hover:text-[#ffb59d] transition-colors duration-200">
                      {item.text}
                    </span>
                    <span className="text-xs sm:text-sm text-[#a88a81] block mt-0.5 group-hover:text-[#e2e2e6] transition-colors duration-200">
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Quote badge from Founders & Direct Action Button */}
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-[#1e2023]/60 border-l-4 border-[#ffb59d] border-t border-r border-b border-white/5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ffb59d] mb-1">
                  <Heart className="w-3.5 h-3.5 fill-[#ffb59d]" />
                  Il messaggio dei maestri Marika & Michele
                </div>
                <p className="text-xs sm:text-sm italic text-[#e1bfb5]">
                  "La danza è per tutti: non conta l'età o il punto di partenza, ma la voglia di mettersi in gioco e condividere emozioni autentiche."
                </p>
              </div>

              <div>
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#ffb59d] hover:text-white px-5 py-2.5 rounded-full border border-[#ffb59d]/30 hover:border-[#ffb59d] bg-[#ffb59d]/10 hover:bg-[#ffb59d] hover:text-[#390c00] transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(255,181,157,0.3)] cursor-pointer group"
                >
                  <span>Vieni a conoscerci in sede</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
