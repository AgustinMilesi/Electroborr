import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Wrench, 
  Cpu, 
  CircuitBoard, 
  Binary, 
  Zap, 
  ArrowRight, 
  ShieldAlert, 
  Check, 
  Calendar,
  AlertTriangle,
  PowerOff,
  Gauge,
  BatteryWarning,
  Disc,
  Clock
} from 'lucide-react';
import { SERVICES_DATA, SYMPTOMS_DATA } from '../../data/electroborrData';
import { Symptom } from '../../types/electroborr';

interface InteractiveHubProps {
  onSelectSymptom: (symptom: Symptom) => void;
}

const getSymptomIcon = (iconName: string) => {
  switch (iconName) {
    case 'AlertTriangle':
      return <AlertTriangle className="w-4 h-4 text-amber-400" />;
    case 'PowerOff':
      return <PowerOff className="w-4 h-4 text-rose-400" />;
    case 'Gauge':
      return <Gauge className="w-4 h-4 text-amber-400" />;
    case 'BatteryWarning':
      return <BatteryWarning className="w-4 h-4 text-amber-400" />;
    case 'Disc':
      return <Disc className="w-4 h-4 text-zinc-300" />;
    case 'Clock':
      return <Clock className="w-4 h-4 text-emerald-400" />;
    default:
      return <AlertTriangle className="w-4 h-4 text-amber-400" />;
  }
};

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Cpu':
      return <Cpu className="w-5 h-5 text-emerald-400" />;
    case 'CircuitBoard':
      return <CircuitBoard className="w-5 h-5 text-emerald-400" />;
    case 'Binary':
      return <Binary className="w-5 h-5 text-emerald-400" />;
    case 'Zap':
      return <Zap className="w-5 h-5 text-emerald-400" />;
    case 'Wrench':
      return <Wrench className="w-5 h-5 text-emerald-400" />;
    default:
      return <Cpu className="w-5 h-5 text-emerald-400" />;
  }
};

export const InteractiveHub: React.FC<InteractiveHubProps> = ({ onSelectSymptom }) => {
  const [activeTab, setActiveTab] = useState<'sintomas' | 'servicios'>('sintomas');
  const [selectedSymptom, setSelectedSymptom] = useState<Symptom>(SYMPTOMS_DATA[0]);

  const handleSymptomClick = (symptom: Symptom) => {
    setSelectedSymptom(symptom);
    onSelectSymptom(symptom);
  };

  const handleProceedToBooking = () => {
    onSelectSymptom(selectedSymptom);
    const el = document.getElementById('turnero');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="interactivo" className="py-14 sm:py-20 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado con Switcher de Pestañas (Segmented Control) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-2.5">
              <span>CENTRAL OPERATIVA ELECTROBORR</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-zinc-50 tracking-tight">
              ¿Cómo podemos ayudarte hoy?
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-xl">
              Elegí según tu necesidad: podés diagnosticar una falla que estás sintiendo o explorar nuestras especialidades de laboratorio y mecánica.
            </p>
          </div>

          {/* Selector de Pestañas Tipo Pill Moderno */}
          <div className="inline-flex p-1.5 rounded-xl bg-zinc-900 border border-zinc-800 self-start md:self-auto shrink-0">
            <button
              onClick={() => setActiveTab('sintomas')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'sintomas'
                  ? 'bg-emerald-500 text-zinc-950 shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Identificar Falla</span>
            </button>

            <button
              onClick={() => setActiveTab('servicios')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'servicios'
                  ? 'bg-emerald-500 text-zinc-950 shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>5 Especialidades</span>
            </button>
          </div>
        </div>

        {/* CONTENIDO TAB 1: Diagnosticador de Síntomas Rápido */}
        {activeTab === 'sintomas' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start animate-in fade-in duration-200">
            
            {/* Lista de Fallas (Pills Compactos) */}
            <div className="lg:col-span-5 space-y-2">
              <span className="text-[11px] font-mono uppercase text-zinc-500 tracking-wider block mb-1">
                Tocá el síntoma que tiene tu auto:
              </span>
              
              {SYMPTOMS_DATA.map((symptom) => {
                const isSelected = selectedSymptom.id === symptom.id;
                return (
                  <button
                    key={symptom.id}
                    onClick={() => handleSymptomClick(symptom)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-zinc-900 border-emerald-500/60 shadow-md'
                        : 'bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-900/70 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-zinc-950 border border-zinc-800 shrink-0">
                        {getSymptomIcon(symptom.iconName)}
                      </div>
                      <span className={`text-xs font-medium ${isSelected ? 'text-white font-semibold' : 'text-zinc-300'}`}>
                        {symptom.label}
                      </span>
                    </div>

                    <div className="shrink-0">
                      <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-emerald-500' : 'bg-transparent'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Tarjeta de Diagnóstico y Acción Directa */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-7 backdrop-blur-sm space-y-5">
                
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-zinc-800">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800">
                      {getSymptomIcon(selectedSymptom.iconName)}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-zinc-100">
                        {selectedSymptom.label}
                      </h3>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">
                        Diagnóstico Orientativo
                      </span>
                    </div>
                  </div>

                  <span className={`font-mono text-[10px] uppercase px-2 py-0.5 rounded font-semibold ${
                    selectedSymptom.urgency === 'critica'
                      ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                      : selectedSymptom.urgency === 'moderada'
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    {selectedSymptom.urgency === 'critica' ? 'Atención Inmediata' : selectedSymptom.urgency === 'moderada' ? 'Revisión Pronta' : 'Preventivo'}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-[11px] font-mono uppercase text-emerald-400 font-semibold mb-1">
                      Causa técnica probable:
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-zinc-950/60 p-3.5 rounded-xl border border-zinc-800/80">
                      {selectedSymptom.technicalDiagnosis}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-200">
                      <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Consejo directo de Nacho:</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {selectedSymptom.initialAdvice}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-zinc-800">
                  <span className="text-[11px] text-zinc-500">
                    * Precarga este síntoma en el turnero web
                  </span>

                  <button
                    onClick={handleProceedToBooking}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
                  >
                    <span>Pedir Turno para esta Falla</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* CONTENIDO TAB 2: Las 5 Especialidades del Taller (Cards Limpias) */}
        {activeTab === 'servicios' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-in fade-in duration-200">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 p-5 flex flex-col justify-between hover:bg-zinc-900/90 transition-all group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-emerald-500/40 transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-[9px] uppercase px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-zinc-100 group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    {service.shortDescription}
                  </p>

                  <div className="mt-3 pt-3 border-t border-zinc-800/80">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">
                      Fallas resueltas:
                    </span>
                    <ul className="space-y-1">
                      {service.symptomsSolved.slice(0, 2).map((s, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                          <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span className="truncate">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                  <Link
                    to={`/servicios/${service.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-200 hover:text-emerald-400 transition-colors"
                  >
                    <span>Ficha técnica completa</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  <a
                    href="#turnero"
                    onClick={() => {
                      const el = document.getElementById('turnero');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                    title="Pedir turno"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
