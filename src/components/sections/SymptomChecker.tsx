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
      return <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />;
    case 'PowerOff':
      return <PowerOff className="w-3.5 h-3.5 text-rose-400" />;
    case 'Gauge':
      return <Gauge className="w-3.5 h-3.5 text-amber-400" />;
    case 'BatteryWarning':
      return <BatteryWarning className="w-3.5 h-3.5 text-amber-400" />;
    case 'Disc':
      return <Disc className="w-3.5 h-3.5 text-zinc-300" />;
    case 'Clock':
      return <Clock className="w-3.5 h-3.5 text-emerald-400" />;
    default:
      return <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />;
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

  return (
    <section id="sintomas" className="py-12 sm:py-16 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIAGNOSTICADOR DE FALLAS EN VIVO</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-zinc-50 tracking-tight">
            ¿Qué luz o falla tiene tu vehículo?
          </h2>
        </div>

        {/* Chips de Síntomas Horizontales e Interactivos */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {SYMPTOMS_DATA.map((symptom) => {
            const isSelected = selectedSymptom.id === symptom.id;
            return (
              <button
                key={symptom.id}
                onClick={() => handleSelect(symptom)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-emerald-500 text-zinc-950 font-bold shadow-md scale-105'
                    : 'bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800'
                }`}
              >
                {getSymptomIcon(symptom.iconName)}
                <span>{symptom.label.split('(')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Tarjeta de Diagnóstico Dinámico */}
        <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-7 backdrop-blur-sm space-y-4 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-zinc-800/80">
            <h3 className="font-heading font-bold text-sm sm:text-base text-zinc-100">
              {selectedSymptom.label}
            </h3>
            <span className={`font-mono text-[10px] uppercase px-2 py-0.5 rounded font-semibold ${
              selectedSymptom.urgency === 'critica'
                ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                : selectedSymptom.urgency === 'moderada'
                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
            }`}>
              {selectedSymptom.urgency === 'critica' ? 'Atención Inmediata' : selectedSymptom.urgency === 'moderada' ? 'Revisión Pronta' : 'Mantenimiento Preventivo'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
              <span className="text-[10px] font-mono uppercase text-emerald-400 font-semibold block">
                Causa técnica probable:
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {selectedSymptom.technicalDiagnosis}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
              <span className="text-[10px] font-mono uppercase text-zinc-400 font-semibold flex items-center gap-1">
                <ShieldAlert className="w-3 h-3 text-amber-400" />
                Consejo de Nacho:
              </span>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {selectedSymptom.initialAdvice}
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[11px] text-zinc-500 font-mono">
              * Precargamos esta falla directamente en el turnero
            </span>

            <button
              onClick={handleProceedToBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-xs transition-all shadow-sm active:scale-95"
            >
              <span>Pedir Turno para este Problema</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
