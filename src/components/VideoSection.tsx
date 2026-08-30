import React from 'react';
import { motion } from 'motion/react';
import { Play, Sparkles, Film } from 'lucide-react';

export const VideoSection: React.FC = () => {
  return (
    <section
      id="video-section"
      className="py-16 md:py-24 bg-[#0c0e11] relative border-t border-white/5 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-r from-[#ffb59d]/10 via-[#e0533c]/10 to-[#ffb59d]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffb59d]/10 text-[#ffb59d] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#ffb59d]/20">
            <Film className="w-3.5 h-3.5" />
            <span>Guarda la nostra energia</span>
          </div>

          <h2 className="font-['Montserrat',sans-serif] text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Vivi l'atmosfera di <span className="text-[#ffb59d] italic">La Vida Loca</span>
          </h2>

          <p className="text-sm sm:text-base text-[#a88a81] leading-relaxed max-w-2xl mx-auto">
            Guarda i nostri allievi e maestri in azione. Scopri la passione, il ritmo e l'emozione che rendono unica la nostra scuola di ballo a Foggia.
          </p>
        </motion.div>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Subtle Ambient Glow around the video player */}
          <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-[#ffb59d]/20 via-[#ff9d7e]/10 to-[#ffb59d]/20 rounded-3xl blur-2xl z-0 pointer-events-none opacity-70" />

          {/* Video Frame */}
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-white/15 bg-[#111316]">
            <video
              id="school-video"
              controls
              playsInline
              preload="metadata"
              poster="/foto%20scuola%206.jpg"
              className="w-full aspect-video object-cover rounded-2xl bg-black"
            >
              <source src="/videoclip.mp4" type="video/mp4" />
              <source src="/videoclip.mp4.mp4" type="video/mp4" />
              Il tuo browser non supporta la riproduzione di video HTML5.
            </video>
          </div>

          {/* Quick Sub-caption */}
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-[#a88a81]">
            <Sparkles className="w-3.5 h-3.5 text-[#ffb59d]" />
            <span>Riprese delle attività e delle lezioni presso la nostra sede in Via Lucera 121, Foggia</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
