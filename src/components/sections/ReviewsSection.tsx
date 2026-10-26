import React from 'react';
import { Star, ExternalLink, MapPin } from 'lucide-react';
import { REVIEWS_DATA, WORKSHOP_DATA } from '../../data/electroborrData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-2.5">
              <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
              <span>RESEÑAS REALES DE GOOGLE</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-zinc-50 tracking-tight">
              Opiniones de Clientes en Tres de Febrero
            </h2>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <span className="font-mono text-2xl font-black text-zinc-100">4.9</span>
            <div className="border-l border-zinc-800 pl-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-emerald-400 text-emerald-400" />
                ))}
              </div>
              <span className="text-[10px] text-zinc-400 font-mono mt-0.5 block">100% Calificaciones 5 Estrellas</span>
            </div>
          </div>
        </div>

        {/* Grilla de 3 Reseñas Más Destacadas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {REVIEWS_DATA.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="rounded-2xl bg-zinc-900/40 border border-zinc-800 p-5 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-emerald-400 text-emerald-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">{review.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4 italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <span className="font-heading font-semibold text-xs text-zinc-100 block">
                    {review.author}
                  </span>
                  <span className="text-[11px] text-zinc-400 font-mono">
                    {review.carModel}
                  </span>
                </div>
                <div className="text-[10px] text-zinc-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-zinc-500" />
                  <span>{review.location.split(',')[0]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={WORKSHOP_DATA.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-400 transition-colors font-medium"
          >
            <span>Ver más opiniones en Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
