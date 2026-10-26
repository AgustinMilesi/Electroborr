import React from 'react';
import { Star, CheckCircle, ExternalLink, MessageCircle, MapPin } from 'lucide-react';
import { REVIEWS_DATA, WORKSHOP_DATA } from '../../data/electroborrData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-3">
              <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
              <span>TEKMETRIC PILAR 4 • PRUEBA SOCIAL VERIFICADA</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-zinc-50 tracking-tight">
              Opiniones de Conductores Reales
            </h2>
            <p className="mt-3 text-base text-zinc-400 leading-relaxed">
              La honestidad y la precisión técnica se reflejan en la experiencia de nuestros clientes en Loma Hermosa y Tres de Febrero.
            </p>
          </div>

          {/* Badge Resumen de Calificación */}
          <div className="shrink-0 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-4">
            <div className="text-center">
              <span className="font-mono text-3xl font-black text-zinc-100">4.9</span>
              <div className="flex items-center gap-0.5 mt-0.5 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                ))}
              </div>
            </div>
            <div className="text-xs text-zinc-400 border-l border-zinc-800 pl-4 space-y-0.5">
              <span className="font-semibold text-zinc-200 block">Google Reviews</span>
              <span>100% Calificaciones 5 Estrellas</span>
            </div>
          </div>
        </div>

        {/* Grilla de Reseñas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl bg-zinc-900/40 border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                
                {/* Header de Reseña: Estrellas + Fecha */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {review.date}
                  </span>
                </div>

                {/* Comentario */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 italic">
                  &ldquo;{review.comment}&rdquo;
                </p>

              </div>

              {/* Autor y Vehículo */}
              <div className="pt-4 border-t border-zinc-800/80">
                <div className="flex items-center justify-between">
                  <span className="font-heading font-semibold text-xs text-zinc-100">
                    {review.author}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                    <CheckCircle className="w-3 h-3" />
                    Verificado
                  </span>
                </div>

                <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
                  {review.carModel}
                </div>

                <div className="text-[10px] text-zinc-400 flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3 text-zinc-500" />
                  <span>{review.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTAs Externos a Google Maps */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs">
          <a
            href={WORKSHOP_DATA.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
          >
            <span>Ver perfil en Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={WORKSHOP_DATA.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Dejar una reseña en Google</span>
          </a>
        </div>

      </div>
    </section>
  );
};
