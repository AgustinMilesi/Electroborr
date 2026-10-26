import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Clock, MapPin } from 'lucide-react';
import { BLOG_POSTS_DATA } from '../../data/electroborrData';

export const LocalBlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>TEKMETRIC PILAR 6 • GUÍAS TÉCNICAS & SEO LOCAL TRES DE FEBRERO</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-zinc-50 tracking-tight">
            Consejos de Taller & Respuestas Técnicas
          </h2>
          <p className="mt-3 text-base text-zinc-400 leading-relaxed">
            Artículos explicados por Nacho para conductores y talleres de Loma Hermosa, Caseros, San Martín y zona noroeste del GBA.
          </p>
        </div>

        {/* Grilla de Artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS_DATA.map((post) => (
            <article
              key={post.id}
              className="group rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700 hover:bg-zinc-900/80 transition-all"
            >
              <div>
                
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-emerald-400">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-zinc-500" />
                      {post.readTime}
                    </span>
                  </div>

                  <span className="flex items-center gap-1 text-[11px] text-zinc-400">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    {post.geoTarget}
                  </span>
                </div>

                {/* Título y Bajada */}
                <h3 className="font-heading font-bold text-lg sm:text-xl text-zinc-100 group-hover:text-emerald-400 transition-colors leading-snug">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

              </div>

              {/* Footer con Link de Lectura */}
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-400">
                  Por {post.author}
                </span>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Leer artículo completo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
