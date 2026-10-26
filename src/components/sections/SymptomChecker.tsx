import React, { useState } from 'react';
import { 
  AlertTriangle, 
  PowerOff, 
  Gauge, 
  BatteryWarning, 
  Disc, 
  Clock, 
  ArrowRight, 
  ShieldAlert, 
  Sparkles
} from 'lucide-react';
import { SYMPTOMS_DATA } from '../../data/electroborrData';
import { Symptom } from '../../types/electroborr';

interface SymptomCheckerProps {
  onSelectSymptom?: (symptom: Symptom) => void;
}

const getSymptomIcon = (iconName: string) => {
  switch (iconName) {
    case 'AlertTriangle':
      return <AlertTriangle className="w-5 h-5 text-amber-400" />;
    case 'PowerOff':
      return <PowerOff className="w-5 h-5 text-rose-400" />;
    case 'Gauge':
      return <Gauge className="w-5 h-5 text-amber-400" />;
    case 'BatteryWarning':
      return <BatteryWarning className="w-5 h-5 text-amber-400" />;
    case 'Disc':
      return <Disc className="w-5 h-5 text-zinc-300" />;
    case 'Clock':
      return <Clock className="w-5 h-5 text-emerald-400" />;
    default:
      return <AlertTriangle className="w-5 h-5 text-amber-400" />;
  }
};

export const SymptomChecker: React.FC<SymptomCheckerProps> = ({ onSelectSymptom }) => {
  const [selectedSymptom, setSelectedSymptom] = useState<Symptom>(SYMPTOMS_DATA[0]);

  const handleSelect = (symptom: Symptom) => {
    setSelectedSymptom(symptom);
    if (onSelectSymptom) {
      onSelectSymptom(symptom);
    }
  };

  const handleProceedToBooking = () => {
    if (onSelectSymptom) {
      onSelectSymptom(selectedSymptom);
    }
    const el = document.getElementById('turnero');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getUrgencyBadge = (urgency: Symptom['urgency']) => {
    switch (urgency) {
      case 'critica':
        return (
          <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 font-semibold">
            Atención Inmediata
          </span>
        );
      case 'moderada':
        return (
          <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold">
            Revisión Pronta
          </span>
        );
      case 'preventiva':
        return (
          <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
            Mantenimiento Preventivo
          </span>
        );
    }
  };

  return (
    <section id="sintomas" className="py-20 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIAGNOSTICADOR INTERACTIVO 24/7</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-zinc-50 tracking-tight">
            ¿Qué falla o síntoma presenta tu vehículo?
          </h2>
          <p className="mt-3 text-base text-zinc-400 leading-relaxed">
            Seleccioná lo que estás experimentando al volante para recibir una evaluación técnica preliminar, precauciones de seguridad y pasar directo al turnero con tu caso cargado.
          </p>
        </div>

        {/* Layout en 2 Columnas: Lista de Síntomas vs Diagnóstico Detallado */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Columna Izquierda: Botones de Síntomas */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 pb-2">
              Seleccioná un síntoma recurrente:
            </div>
            
            {SYMPTOMS_DATA.map((symptom) => {
              const isSelected = selectedSymptom.id === symptom.id;
              return (
                <button
                  key={symptom.id}
                  onClick={() => handleSelect(symptom)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                    isSelected 
                      ? 'bg-zinc-900 border-emerald-500/60 shadow-lg shadow-emerald-500/5' 
                      : 'bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-900/70 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 shrink-0">
                      {getSymptomIcon(symptom.iconName)}
                    </div>
                    <span className={`text-xs sm:text-sm font-medium ${isSelected ? 'text-white font-semibold' : 'text-zinc-300'}`}>
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

          {/* Columna Derecha: Tarjeta de Diagnóstico Técnico Tranquilizador */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
              
              {/* Header de la tarjeta */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800">
                    {getSymptomIcon(selectedSymptom.iconName)}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-zinc-100">
                      {selectedSymptom.label}
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-500 uppercase">
                      Diagnóstico Preliminar
                    </span>
                  </div>
                </div>
                {getUrgencyBadge(selectedSymptom.urgency)}
              </div>

              {/* Explicación Técnica de la Falla */}
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
                    Qué está ocurriendo a nivel electrónico o mecánico:
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed bg-zinc-950/60 p-4 rounded-xl border border-zinc-800/80">
                    {selectedSymptom.technicalDiagnosis}
                  </p>
                </div>

                {/* Consejo de Seguridad Inmediato */}
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
                    <ShieldAlert className="w-4 h-4 text-emerald-400" />
                    <span>Recomendación Inmediata de Nacho:</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {selectedSymptom.initialAdvice}
                  </p>
                </div>

                {/* Acción de Reserva con Síntoma Precargado */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-zinc-800">
                  <div className="text-xs text-zinc-500">
                    * Al presionar, cargamos este síntoma en el turnero web.
                  </div>

                  <button
                    onClick={handleProceedToBooking}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
                  >
                    <span>Agendar Turno para esta Falla</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
