import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, ArrowUpRight, Sparkles } from 'lucide-react';

export function Social() {
  const socialLinks = [
    {
      id: 'social-card-instagram',
      platform: 'Instagram',
      handle: '@la_vida_loca_latin_crew',
      name: 'Instagram Oficial',
      description: 'Guarda i video delle lezioni, gli eventi e i retroscena della scuola in tempo reale.',
      url: 'https://www.instagram.com/la_vida_loca_latin_crew?igsi=dTd1enh5eGtjcXR0',
      buttonText: 'Seguici su Instagram',
      icon: Instagram,
      accentColor: 'from-[#f09433] via-[#dc2743] to-[#bc1888]',
      badgeBg: 'bg-[#dc2743]/15 text-[#ff8ba7] border-[#dc2743]/30',
      hoverBorder: 'hover:border-[#dc2743]/50',
      buttonStyle: 'bg-gradient-to-r from-[#e1306c] to-[#c13584] hover:from-[#d6245f] hover:to-[#b02a76] text-white shadow-lg shadow-[#dc2743]/20',
    },
    {
      id: 'social-card-facebook',
      platform: 'Facebook',
      handle: 'La Vida Loca Crew',
      name: 'Pagina Ufficiale',
      description: 'Scopri le ultime novità, le foto dei saggi, i workshop e gli aggiornamenti sui nostri corsi.',
      url: 'https://www.facebook.com/share/19GnetLF1L/?mibextid=wwXIfr',
      buttonText: 'Visita la Pagina Facebook',
      icon: Facebook,
      accentColor: 'from-[#1877f2] to-[#0d55b5]',
      badgeBg: 'bg-[#1877f2]/15 text-[#70b0ff] border-[#1877f2]/30',
      hoverBorder: 'hover:border-[#1877f2]/50',
      buttonStyle: 'bg-[#1877f2] hover:bg-[#166fe5] text-white shadow-lg shadow-[#1877f2]/20',
    },
  ];

  return (
    <section id="social" className="relative py-16 sm:py-24 bg-[#0e1013] overflow-hidden border-t border-white/[0.05]">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#ffb59d]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-[#ffb59d] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Community & Canali Ufficiali</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Seguici sui nostri Social
            </h2>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed">
              Rimani sempre aggiornato sulle nostre attività, guarda i video delle coreografie e unisciti alla nostra community latina.
            </p>
          </div>

          {/* Social Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  id={item.id}
                  className={`group relative bg-[#15181c]/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/[0.08] ${item.hoverBorder} transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:scale-105 hover:-translate-y-1`}
                >
                  {/* Top Section */}
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center p-3 text-white group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-bold text-white tracking-tight">
                              {item.platform}
                            </h3>
                          </div>
                          <p className="text-sm font-semibold text-[#ffb59d]">
                            {item.handle}
                          </p>
                        </div>
                      </div>

                      <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${item.badgeBg}`}>
                        {item.name}
                      </span>
                    </div>

                    <p className="text-sm text-white/70 leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`btn-open-${item.platform.toLowerCase()}`}
                      className={`w-full py-3 px-5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 active:scale-95 ${item.buttonStyle}`}
                    >
                      <span>{item.buttonText}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
