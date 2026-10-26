import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Check, 
  Calendar,
  Cpu,
  CircuitBoard,
  Binary,
  Zap,
  Wrench,
  Layers
} from 'lucide-react';
import { SERVICES_DATA } from '../../data/electroborrData';

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Cpu':
      return <Cpu className="w-6 h-6 text-emerald-400" />;
    case 'CircuitBoard':
      return <CircuitBoard className="w-6 h-6 text-emerald-400" />;
    case 'Binary':
      return <Binary className="w-6 h-6 text-emerald-400" />;
    case 'Zap':
      return <Zap className="w-6 h-6 text-emerald-400" />;
    case 'Wrench':
      return <Wrench className="w-6 h-6 text-emerald-400" />;
    default:
      return <Cpu className="w-6 h-6 text-emerald-400" />;
  }
};

export const ServicesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SERVICES_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === SERVICES_DATA.length - 1 ? 0 : prev + 1));
  };

  const currentService = SERVICES_DATA[currentIndex];

  return (
    <section id="carrusel-servicios" className="py-12 sm:py-16 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header con controles del Carrusel */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>TRABAJOS Y ESPECIALIDADES</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-zinc-50 tracking-tight">
              Nuestras 5 Áreas de Laboratorio & Mecánica
            </h2>
          </div>

          {/* Controles de Navegación del Carrusel */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <span className="font-mono text-xs text-zinc-400">
              0{currentIndex + 1} / 0{SERVICES_DATA.length}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={prevSlide}
                className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="Servicio anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="Siguiente servicio"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta del Carrusel Activo (Sleek, Compacta, Interactiva) */}
        <div className="rounded-3xl bg-zinc-900/70 border border-zinc-800 p-6 sm:p-10 backdrop-blur-sm relative overflow-hidden transition-all duration-300 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Izquierda: Info Principal */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                  {getServiceIcon(currentService.iconName)}
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-emerald-400">
                    {currentService.badge}
                  </span>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-zinc-100 mt-1">
                    {currentService.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm font-mono text-emerald-400">
                {currentService.tagline}
              </p>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {currentService.clientProfileSimple.summary}
              </p>

              {/* Botones de Acción */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to={`/servicios/${currentService.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium text-xs transition-colors border border-zinc-700/60"
                >
                  <span>Ver Ficha Técnica Completa</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </Link>

                <a
                  href="#turnero"
                  onClick={() => {
                    const el = document.getElementById('turnero');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-xs transition-all shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Pedir Turno para este Servicio</span>
                </a>
              </div>
            </div>

            {/* Derecha: Fallas Frecuentes Resueltas */}
            <div className="md:col-span-5 bg-zinc-950/60 rounded-2xl border border-zinc-800/80 p-5 space-y-3">
              <span className="text-[11px] font-mono uppercase text-zinc-400 font-semibold block">
                Fallas que resolvemos:
              </span>
              <ul className="space-y-2">
                {currentService.symptomsSolved.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {SERVICES_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentIndex 
                      ? 'w-6 bg-emerald-500' 
                      : 'w-1.5 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                  aria-label={`Ir al servicio ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <button onClick={prevSlide} className="hover:text-white transition-colors">← Anterior</button>
              <span>•</span>
              <button onClick={nextSlide} className="hover:text-white transition-colors">Siguiente →</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
