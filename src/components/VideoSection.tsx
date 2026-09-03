import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Film } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  src: string;
  fallbackSrc?: string;
  poster: string;
  caption: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: 'video-solo-latin-1',
    title: 'Solo Latin - Energia e Passione',
    src: '/videoclip.mp4',
    fallbackSrc: '/videoclip.mp4.mp4',
    poster: '/foto%20scuola%206.jpg',
    caption: "L'energia e la passione del nostro Solo Latin",
  },
  {
    id: 'video-solo-latin-2',
    title: 'Solo Latin - Tecnica e Ritmo',
    src: '/videoballo2.mp4',
    poster: '/foto%20scuola%205.jpg',
    caption: 'Tecnica, ritmo ed espressività Solo Latin',
  },
];

export const VideoSection: React.FC = () => {
  return (
    <section
      id="video-section"
      className="py-16 md:py-24 bg-[#0c0e11] relative border-t border-white/5 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-gradient-to-r from-[#ffb59d]/10 via-[#e0533c]/10 to-[#ffb59d]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffb59d]/10 text-[#ffb59d] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#ffb59d]/20">
            <Film className="w-3.5 h-3.5" />
            <span>Disciplina Solo Latin</span>
          </div>

          <h2 className="font-['Montserrat',sans-serif] text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            L'energia, la tecnica e la passione del nostro{' '}
            <span className="text-[#ffb59d] italic">Solo Latin</span>
          </h2>

          <p className="text-sm sm:text-base text-[#a88a81] leading-relaxed max-w-2xl mx-auto">
            Guarda i nostri video in azione. Scopri la precisione tecnica, la carica emotiva e il ritmo travolgente che caratterizzano le lezioni e le coreografie di Solo Latin a La Vida Loca.
          </p>
        </motion.div>

        {/* Clean 2-Column Responsive Video Reel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto items-start">
          {VIDEOS.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.96, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative flex flex-col items-center group w-full"
            >
              {/* Subtle Ambient Glow around each reel */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-[#ffb59d]/20 via-[#ff9d7e]/10 to-[#ffb59d]/20 rounded-3xl blur-2xl z-0 pointer-events-none opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

              {/* Reel Card (Vertical 9:16) */}
              <div className="relative z-10 w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-xl border border-white/15 bg-black">
                <video
                  id={`video-player-${video.id}`}
                  controls
                  playsInline
                  preload="metadata"
                  poster={video.poster}
                  className="w-full h-full object-cover rounded-2xl bg-black"
                >
                  <source src={video.src} type="video/mp4" />
                  {video.fallbackSrc && (
                    <source src={video.fallbackSrc} type="video/mp4" />
                  )}
                  Il tuo browser non supporta la riproduzione di video HTML5.
                </video>
              </div>

              {/* Individual Caption */}
              <div className="flex items-center justify-center gap-2 mt-4 text-xs sm:text-sm font-medium text-[#ffb59d] text-center px-2">
                <Sparkles className="w-4 h-4 text-[#ffb59d] shrink-0" />
                <span>{video.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
