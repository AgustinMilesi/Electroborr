import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  CircuitBoard, 
  Binary, 
  Zap, 
  Wrench, 
  ArrowRight, 
  Check, 
  Calendar 
} from 'lucide-react';
import { SERVICES_DATA } from '../../data/electroborrData';

// Helper de mapeo de iconos dinámicos
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

export const ServicePagesGrid: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de Sección */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-3">
            <span>TEKMETRIC PILAR 2 • PÁGINAS DEDICADAS POR SERVICIO</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-zinc-50 tracking-tight">
            Especialidades de Laboratorio & Mecánica Quirúrgica
          </h2>
          <p className="mt-3 text-base text-zinc-400 leading-relaxed">
            No decimos simplemente &ldquo;arreglamos autos&rdquo;. Cada área técnica cuenta con su propio instrumental homologado, banco de simulación y procedimientos rigurosos para garantizar soluciones definitivas.
          </p>
        </div>

        {/* Grilla de 5 Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const isWide = index === 0 || index === 1;
            return (
              <div
                key={service.id}
                className={`group rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between hover:bg-zinc-900/90 relative ${
                  isWide ? 'lg:col-span-1' : ''
                }`}
              >
                <div>
                  
                  {/* Top Bar: Icono + Badge */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-emerald-500/40 group-hover:bg-zinc-900 transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800/80 text-zinc-400 group-hover:text-emerald-400 group-hover:border-emerald-500/20 transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  {/* Título y Tagline */}
                  <h3 className="font-heading font-bold text-xl text-zinc-100 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="mt-2 text-xs font-mono text-emerald-400/90">
                    {service.tagline}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Síntomas Frecuentes Resueltos */}
                  <div className="mt-6 pt-5 border-t border-zinc-800/80">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 block mb-2.5">
                      Fallas que resolvemos:
                    </span>
                    <ul className="space-y-1.5">
                      {service.symptomsSolved.slice(0, 3).map((symptom, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Footer de Tarjeta con Enlaces */}
                <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                  <Link
                    to={`/servicios/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-200 hover:text-emerald-400 transition-colors group/link"
                  >
                    <span>Ficha técnica completa</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={`#turnero`}
                    onClick={() => {
                      const el = document.getElementById('turnero');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                    title="Pedir turno para este servicio"
                  >
                    <Calendar className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
