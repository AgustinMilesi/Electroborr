import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Clock, MapPin, ChevronDown } from 'lucide-react';
import { BLOG_POSTS_DATA } from '../../data/electroborrData';

export const LocalBlogSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedPosts = showAll ? BLOG_POSTS_DATA : BLOG_POSTS_DATA.slice(0, 2);

  return (
    <section id="blog" className="py-14 sm:py-20 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-2.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>GUÍAS TÉCNICAS PARA CONDUCTORES</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-zinc-50 tracking-tight">
              Consejos de Taller en Tres de Febrero
            </h2>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 self-start sm:self-auto transition-colors"
          >
            <span>{showAll ? 'Mostrar menos artículos' : 'Ver todos los artículos (4)'}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Grilla de Artículos Compacta */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {displayedPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl bg-zinc-900/50 border border-zinc-800 p-5 sm:p-6 flex flex-col justify-between hover:border-zinc-700 hover:bg-zinc-900/80 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-emerald-400 text-[10px]">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-zinc-500">
                    <Clock className="w-3 h-3 text-zinc-500" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base sm:text-lg text-zinc-100 group-hover:text-emerald-400 transition-colors leading-snug">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-2 text-xs text-zinc-400 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-500" />
                  {post.geoTarget.split('/')[0]}
                </span>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Leer guía</span>
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
