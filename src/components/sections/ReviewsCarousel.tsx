import React, { useRef, useState, useEffect } from 'react';
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 360;
    const scrollAmount = direction === 'left' ? -(cardWidth + 16) : (cardWidth + 16);
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const scrollToReview = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cards = scrollContainerRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.firstElementChild?.clientWidth || 360;
      const newIndex = Math.round(scrollLeft / (cardWidth + 16));
      setActiveIndex(Math.min(Math.max(newIndex, 0), REVIEWS_DATA.length - 1));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="opiniones" className="py-12 sm:py-16 bg-zinc-950 border-b border-zinc-800/80 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header con Calificación y Controles Deslizables */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                ))}
              </div>
              <span className="font-heading font-extrabold text-lg sm:text-xl text-zinc-100">
                4.9 en Google Reviews
              </span>
            </div>
            <p className="text-xs text-zinc-400">
              Deslizá horizontalmente para leer opiniones de clientes de Loma Hermosa y Tres de Febrero
            </p>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <span className="font-mono text-xs text-zinc-400">
              0{activeIndex + 1} / 0{REVIEWS_DATA.length}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scroll('left')}
                className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors active:scale-95"
                aria-label="Deslizar a la izquierda"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors active:scale-95"
                aria-label="Deslizar a la derecha"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carrusel Deslizable Horizontal Táctil (Swipe Rail) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 touch-pan-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {REVIEWS_DATA.map((review, idx) => (
            <div
              key={review.id}
              className={`w-[85vw] sm:w-[380px] md:w-[420px] shrink-0 snap-center rounded-3xl p-6 sm:p-7 backdrop-blur-sm border transition-all duration-300 flex flex-col justify-between shadow-lg ${
                idx === activeIndex 
                  ? 'bg-zinc-900/80 border-emerald-500/40 shadow-emerald-500/5' 
                  : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700/80'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
                    {review.serviceCategory}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">{review.date}</span>
                </div>

                {/* Comentario */}
                <blockquote className="text-sm text-zinc-200 leading-relaxed italic mb-6">
                  &ldquo;{review.comment}&rdquo;
                </blockquote>
              </div>

              {/* Pie de tarjeta con autor y auto */}
              <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700/80 flex items-center justify-center font-bold text-xs text-emerald-400 shrink-0">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-xs sm:text-sm text-zinc-100 flex items-center gap-1.5">
                      <span>{review.author}</span>
                      <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-0.5">
                        <ShieldCheck className="w-3 h-3" />
                        Verificado
                      </span>
                    </div>
                    <div className="text-xs text-zinc-400 font-mono">
                      {review.carModel}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-zinc-500" />
                    {review.location}
                  </span>
                  <a
                    href={WORKSHOP_DATA.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-[11px]"
                  >
                    <span>Google</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores de posición clicables */}
        <div className="mt-4 flex items-center justify-center gap-1.5">
          {REVIEWS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToReview(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === activeIndex 
                  ? 'w-6 bg-emerald-500' 
                  : 'w-1.5 bg-zinc-700 hover:bg-zinc-500'
              }`}
              aria-label={`Ir a reseña ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
