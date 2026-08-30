import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Heart, Sparkles, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      text: 'Insegnanti qualificati di alto livello',
      desc: 'Formazione tecnica certificata e continua esperienza agonistica.',
    },
    {
      text: 'Ambiente moderno ed elegante',
      desc: 'Ampie sale luminose e climatizzate, con specchi a tutta parete e spazi professionali.',
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
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          
          {/* Visual Column (6-Image Dynamic Collage Gallery with Ambient Glow) */}
          <div className="relative order-2 lg:order-1">
            {/* Glow blur element behind gallery */}
            <div className="absolute -inset-3 sm:-inset-5 bg-gradient-to-tr from-[#ffb59d]/20 via-transparent to-[#ffb59d]/10 rounded-2xl sm:rounded-3xl blur-2xl z-0 pointer-events-none" />
            
            {/* Gallery Collage Container */}
            <div className="relative z-10 w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#16181d]/85 p-3 sm:p-4 shadow-2xl backdrop-blur-sm">
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2.5 sm:gap-3">
                {/* 1. Main Featured Image (Large Left/Top focus) */}
                <div className="col-span-2 sm:col-span-4 sm:row-span-2 relative group overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-black/40 min-h-[220px] sm:min-h-[280px]">
                  <img
                    id="about-gallery-img-0"
                    src="/foto%20scuola%206.jpg"
                    alt="Insegnanti Marika & Michele - La Vida Loca Crew Foggia"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== '/foto%20scuola.jpg') {
                        target.src = '/foto%20scuola.jpg';
                      }
                    }}
                  />
                  
                  {/* Bottom gradient overlay for badge readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none" />

                  {/* Elegant Badge for Teachers */}
                  <div className="absolute bottom-2.5 left-2.5 sm:bottom-3.5 sm:left-3.5 right-2.5 sm:right-auto z-10">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#16181d]/90 backdrop-blur-md border border-[#ffb59d]/30 shadow-lg shadow-black/40 transition-all duration-300 group-hover:border-[#ffb59d]/60">
                      <span className="w-2 h-2 rounded-full bg-[#ffb59d] animate-pulse" />
                      <span className="text-xs sm:text-sm font-semibold font-['Montserrat',sans-serif] text-white tracking-wide">
                        Insegnanti <span className="text-[#ffb59d] font-bold">Marika & Michele</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2. Photo 1 */}
                <div className="col-span-1 sm:col-span-2 aspect-square relative group overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-black/40">
                  <img
                    id="about-gallery-img-1"
                    src="/foto%20scuola%201.jpg"
                    alt="La Vida Loca Crew - Esibizioni e saggio Foggia"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                </div>

                {/* 3. Photo 2 */}
                <div className="col-span-1 sm:col-span-2 aspect-square relative group overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-black/40">
                  <img
                    id="about-gallery-img-2"
                    src="/foto%20scuola%202.jpg"
                    alt="La Vida Loca Crew - Danza sportiva ed eventi"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                </div>

                {/* 4. Photo 3 */}
                <div className="col-span-1 sm:col-span-2 aspect-square relative group overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-black/40">
                  <img
                    id="about-gallery-img-3"
                    src="/foto%20scuola%203.jpg"
                    alt="La Vida Loca Crew - Gare ed emozioni"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                </div>

                {/* 5. Photo 4 */}
                <div className="col-span-1 sm:col-span-2 aspect-square relative group overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-black/40">
                  <img
                    id="about-gallery-img-4"
                    src="/foto%20scuola%204.jpg"
                    alt="La Vida Loca Crew - Ballo ed energia di gruppo"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                </div>

                {/* 6. Photo 5 */}
                <div className="col-span-2 sm:col-span-2 aspect-[2/1] sm:aspect-square relative group overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-black/40">
                  <img
                    id="about-gallery-img-5"
                    src="/foto%20scuola%205.jpg"
                    alt="La Vida Loca Crew - Passione e spettacoli"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
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
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#ffb59d] px-5 py-2.5 rounded-full border border-[#ffb59d]/40 hover:border-[#ffb59d] bg-[#ffb59d]/10 hover:bg-[#ffb59d] hover:text-[#390c00] transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 shadow-sm hover:shadow-[0_0_25px_rgba(255,181,157,0.4)] cursor-pointer group"
                >
                  <span>Vieni a conoscerci in sede</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
