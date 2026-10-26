import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Cpu, 
  Wrench, 
  Calendar, 
  Activity, 
  MessageSquare, 
  FileCheck,
  Zap,
  CircuitBoard,
  Binary
} from 'lucide-react';
import { SERVICES_DATA, WORKSHOP_DATA } from '../data/electroborrData';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (service) {
      document.title = `${service.title} | ELECTROBORR Loma Hermosa`;
    }
  }, [slug, service]);

  if (!service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-heading font-bold text-zinc-100">Servicio no encontrado</h1>
        <p className="mt-2 text-zinc-400">El servicio solicitado no existe o fue reubicado.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 text-zinc-950 font-bold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al inicio</span>
        </Link>
      </div>
    );
  }

  const handleBookingRedirect = () => {
    navigate(`/#turnero?servicio=${service.slug}`);
    setTimeout(() => {
      const el = document.getElementById('turnero');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-8 h-8 text-emerald-400" />;
      case 'CircuitBoard':
        return <CircuitBoard className="w-8 h-8 text-emerald-400" />;
      case 'Binary':
        return <Binary className="w-8 h-8 text-emerald-400" />;
      case 'Zap':
        return <Zap className="w-8 h-8 text-emerald-400" />;
      case 'Wrench':
        return <Wrench className="w-8 h-8 text-emerald-400" />;
      default:
        return <Cpu className="w-8 h-8 text-emerald-400" />;
    }
  };

  return (
    <article className="py-12 sm:py-20 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back button */}
        <div className="mb-8">
          <Link
            to="/#servicios"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a todas las especialidades</span>
          </Link>
        </div>

        {/* Hero de Servicio */}
        <div className="rounded-3xl bg-zinc-900/70 border border-zinc-800 p-6 sm:p-12 relative overflow-hidden backdrop-blur-sm">
          {/* Imagen de fondo sutil */}
          <div className="absolute right-0 top-0 bottom-0 w-full sm:w-1/2 opacity-20 pointer-events-none overflow-hidden">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-full object-cover object-center filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-transparent" />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center">
              {getServiceIcon(service.iconName)}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
                {service.badge}
              </span>
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300">
                Loma Hermosa • Tres de Febrero
              </span>
            </div>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-zinc-50 tracking-tight">
            {service.title}
          </h1>

          <p className="mt-3 text-lg font-mono text-emerald-400">
            {service.tagline}
          </p>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl">
            {service.heroHighlight}
          </p>

          {/* Quick CTA inside Hero */}
          <div className="mt-8 pt-8 border-t border-zinc-800 flex flex-wrap items-center gap-4">
            <button
              onClick={handleBookingRedirect}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-sm transition-all shadow-md active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Solicitar Turno para {service.title}</span>
            </button>

            <a
              href={`https://wa.me/${WORKSHOP_DATA.contact.whatsappRaw}?text=${encodeURIComponent(`Hola! Quisiera consultar sobre el servicio de ${service.title}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium text-sm transition-colors border border-zinc-700/60"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Consultar con el Dueño por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Tekmetric Pilar 2: El Perfil Dual (Cliente Práctico vs Especificaciones de Ingeniería) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Perfil 1: Para el Conductor (Claridad y Comodidad) */}
          <div className="rounded-2xl bg-zinc-900/40 border border-zinc-800 p-8 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <h2 className="font-heading font-bold text-lg text-zinc-100">
                Para el Conductor: Claridad y Seguridad
              </h2>
            </div>
            
            <p className="text-sm text-zinc-300 leading-relaxed">
              {service.clientProfileSimple.summary}
            </p>

            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block">
                Beneficios Principales:
              </span>
              {service.clientProfileSimple.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Perfil 2: Ficha Técnica de Ingeniería (Rigor & Precisión) */}
          <div className="rounded-2xl bg-zinc-900/40 border border-zinc-800 p-8 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-400" />
              <h2 className="font-heading font-bold text-lg text-zinc-100">
                Ficha Técnica: Protocolos & Instrumental
              </h2>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block">
                Parámetros y Pruebas Ejecutadas:
              </span>
              {service.clientProfileTechnical.specifications.map((spec, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs font-mono text-zinc-300">
                  <span className="text-emerald-500 font-bold shrink-0">›</span>
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-zinc-800/80 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block">
                Instrumental Homologado:
              </span>
              <div className="flex flex-wrap gap-2">
                {service.clientProfileTechnical.equipmentUsed.map((eq, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-zinc-300"
                  >
                    {eq}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Síntomas Frecuentes que Resuelve */}
        <div className="mt-12 rounded-2xl bg-zinc-900/30 border border-zinc-800 p-8">
          <h3 className="font-heading font-bold text-xl text-zinc-100 mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-400" />
            <span>Síntomas y Códigos de Falla Resueltos en este Servicio</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.symptomsSolved.map((symptom, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 text-xs sm:text-sm text-zinc-300"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                <span>{symptom}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Proceso de Trabajo en 4 Pasos (Tekmetric Protocol) */}
        <div className="mt-12">
          <h3 className="font-heading font-bold text-2xl text-zinc-100 mb-8">
            Protocolo de Trabajo Paso a Paso
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {service.processSteps.map((step) => (
              <div
                key={step.stepNumber}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-black text-emerald-500/70 block mb-3">
                    0{step.stepNumber}
                  </span>
                  <h4 className="font-heading font-semibold text-sm text-zinc-100 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Entregables y Respaldo */}
        <div className="mt-12 rounded-2xl bg-zinc-900/40 border border-zinc-800 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="font-heading font-bold text-base text-zinc-100 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-400" />
              <span>Entregables con este Servicio</span>
            </h4>
            <ul className="text-xs text-zinc-300 space-y-1">
              {service.deliverables.map((deliv, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleBookingRedirect}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-sm transition-all"
          >
            Agendar con Presupuesto Previo
          </button>
        </div>

      </div>
    </article>
  );
};
