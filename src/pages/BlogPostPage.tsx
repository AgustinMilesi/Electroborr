import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  MapPin, 
  User, 
  Calendar, 
  AlertCircle, 
  MessageSquare, 
  ChevronRight
} from 'lucide-react';
import { BLOG_POSTS_DATA, WORKSHOP_DATA } from '../data/electroborrData';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);
  const relatedPosts = BLOG_POSTS_DATA.filter((p) => p.slug !== slug).slice(0, 2);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (post) {
      document.title = `${post.title} | Blog ELECTROBORR`;
    }
  }, [slug, post]);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-heading font-bold text-zinc-100">Artículo no encontrado</h1>
        <p className="mt-2 text-zinc-400">El artículo solicitado no existe o fue actualizado.</p>
        <Link
          to="/#blog"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 text-zinc-950 font-bold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al blog</span>
        </Link>
      </div>
    );
  }

  return (
    <article className="py-12 sm:py-20 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back button */}
        <div className="mb-8">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a las guías técnicas</span>
          </Link>
        </div>

        {/* Encabezado del Post */}
        <header className="space-y-4 pb-8 border-b border-zinc-800">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
              {post.geoTarget}
            </span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-zinc-500" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-zinc-50 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-mono">
            {post.subtitle}
          </p>

          <div className="pt-2 flex items-center justify-between text-xs text-zinc-500 font-mono">
            <span className="flex items-center gap-2 text-zinc-300">
              <User className="w-3.5 h-3.5 text-emerald-400" />
              {post.author}
            </span>
            <span>{post.date}</span>
          </div>
        </header>

        {/* Intro destacada */}
        <div className="py-8">
          <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-medium bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800">
            {post.intro}
          </p>
        </div>

        {/* Secciones del Artículo */}
        <div className="space-y-10 text-sm sm:text-base text-zinc-300 leading-relaxed">
          {post.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-zinc-100">
                {section.heading}
              </h2>

              <p className="text-zinc-300 leading-relaxed">
                {section.body}
              </p>

              {section.technicalCallout && (
                <div className="p-4 sm:p-5 rounded-xl bg-zinc-900/80 border-l-4 border-emerald-500 border-zinc-800 text-xs sm:text-sm text-zinc-200 space-y-1">
                  <div className="flex items-center gap-2 font-mono text-emerald-400 font-semibold text-xs uppercase">
                    <AlertCircle className="w-4 h-4" />
                    <span>Nota Técnica de Laboratorio</span>
                  </div>
                  <p>{section.technicalCallout}</p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Conclusión Local y CTA de Consulta Directa */}
        <div className="mt-12 rounded-2xl bg-zinc-900/70 border border-zinc-800 p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <MapPin className="w-4 h-4" />
            <span>Atención en Loma Hermosa y Tres de Febrero</span>
          </div>

          <p className="text-sm text-zinc-300 leading-relaxed">
            {post.localTakeaway}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={`https://wa.me/${WORKSHOP_DATA.contact.whatsappRaw}?text=${encodeURIComponent(`Hola Nacho! Leí el artículo sobre "${post.title}" y quisiera consultar por mi vehículo.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-sm transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-zinc-950" />
              <span>Consultar este caso con Nacho por WhatsApp</span>
            </a>

            <Link
              to="/#turnero"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium text-sm transition-colors border border-zinc-700/60"
            >
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>Agendar Escaneo en Taller</span>
            </Link>
          </div>
        </div>

        {/* Artículos Relacionados */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-zinc-800">
            <h3 className="font-heading font-bold text-lg text-zinc-100 mb-6">
              Otras Guías Técnicas para Conductores
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/blog/${rel.slug}`}
                  className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80 transition-colors group"
                >
                  <span className="text-[10px] font-mono text-emerald-400 block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="font-heading font-semibold text-sm text-zinc-200 group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                  <div className="mt-3 flex items-center gap-1 text-xs text-zinc-500 group-hover:text-zinc-300">
                    <span>Leer</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
};
