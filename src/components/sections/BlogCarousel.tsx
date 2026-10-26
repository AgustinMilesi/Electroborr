import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';
import { BLOG_POSTS_DATA } from '../../data/electroborrData';

export const BlogCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevBlog = () => {
    setCurrentIndex((prev) => (prev === 0 ? BLOG_POSTS_DATA.length - 1 : prev - 1));
  };

  const nextBlog = () => {
    setCurrentIndex((prev) => (prev === BLOG_POSTS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = BLOG_POSTS_DATA[currentIndex];

  return (
    <section id="blog" className="py-12 sm:py-16 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header con controles */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>GUÍAS TÉCNICAS & CONSEJOS LOCALES</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-zinc-50 tracking-tight">
              ¿Qué le pasa a tu auto? Guías Técnicas
            </h2>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="font-mono text-xs text-zinc-400">
              0{currentIndex + 1} / 0{BLOG_POSTS_DATA.length}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={prevBlog}
                className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
                aria-label="Guía anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextBlog}
                className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
                aria-label="Siguiente guía"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta del Carrusel de Guía Activa */}
        <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-8 backdrop-blur-sm relative transition-all duration-300 shadow-lg">
          
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
              {current.category}
            </span>
            <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-500" />
                {current.geoTarget.split('/')[0]}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-zinc-500" />
                {current.readTime}
              </span>
            </div>
          </div>

          <h3 className="font-heading font-extrabold text-lg sm:text-xl text-zinc-100 hover:text-emerald-400 transition-colors leading-snug">
            <Link to={`/blog/${current.slug}`}>
              {current.title}
            </Link>
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
            {current.excerpt}
          </p>

          <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400">
              Por {current.author}
            </span>

            <Link
              to={`/blog/${current.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-semibold text-xs transition-colors border border-zinc-700/60"
            >
              <span>Leer Guía Completa</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
            </Link>
          </div>

          {/* Dots Indicator */}
          <div className="mt-6 flex items-center justify-center gap-1.5">
            {BLOG_POSTS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentIndex 
                    ? 'w-6 bg-emerald-500' 
                    : 'w-1.5 bg-zinc-700 hover:bg-zinc-500'
                }`}
                aria-label={`Ir a la guía ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
