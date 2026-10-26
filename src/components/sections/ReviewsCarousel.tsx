import React, { useState } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  MapPin, 
  ShieldCheck
} from 'lucide-react';
import { REVIEWS_DATA, WORKSHOP_DATA } from '../../data/electroborrData';

export const ReviewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = REVIEWS_DATA[currentIndex];

  return (
    <section className="py-12 sm:py-16 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header con Badge de Google */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
              ))}
            </div>
            <span className="font-heading font-extrabold text-xl text-zinc-100">
              4.9 en Google Reviews
            </span>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="font-mono text-xs text-zinc-400">
              0{currentIndex + 1} / 0{REVIEWS_DATA.length}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={prevReview}
                className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
                aria-label="Opinión anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextReview}
                className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
                aria-label="Siguiente opinión"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta del Carrusel de Opinión */}
        <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-8 backdrop-blur-sm relative transition-all duration-300 shadow-lg">
          
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
              {current.serviceCategory}
            </span>
            <span className="text-xs font-mono text-zinc-400">{current.date}</span>
          </div>

          {/* Cita de Reseña */}
          <blockquote className="text-sm sm:text-base text-zinc-200 leading-relaxed italic mb-6">
            &ldquo;{current.comment}&rdquo;
          </blockquote>

          {/* Datos del Cliente y Vehículo */}
          <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700/80 flex items-center justify-center font-bold text-xs text-emerald-400">
                {current.author.charAt(0)}
              </div>
              <div>
                <div className="font-heading font-semibold text-xs sm:text-sm text-zinc-100 flex items-center gap-1.5">
                  <span>{current.author}</span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-0.5">
                    <ShieldCheck className="w-3 h-3" />
                    Cliente Real
                  </span>
                </div>
                <div className="text-xs text-zinc-400 font-mono">
                  {current.carModel}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                {current.location}
              </span>
              <a
                href={WORKSHOP_DATA.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-[11px]"
              >
                <span>Ver en Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="mt-6 flex items-center justify-center gap-1.5">
            {REVIEWS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentIndex 
                    ? 'w-6 bg-emerald-500' 
                    : 'w-1.5 bg-zinc-700 hover:bg-zinc-500'
                }`}
                aria-label={`Ir a la opinión ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
