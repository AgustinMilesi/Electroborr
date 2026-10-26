import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Activity, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Search
} from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-zinc-950 pt-12 pb-20 md:pt-20 md:pb-28 border-b border-zinc-800/80">
      
      {/* Background Architectural Grid Lines (Subtle) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fafafa 1px, transparent 1px), linear-gradient(to right, #fafafa 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Copywriting Tekmetric de Conversión */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill Quirúrgico */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Taller Abierto • Loma Hermosa, Tres de Febrero</span>
            </div>

            {/* Título Principal */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-zinc-50 leading-[1.1]">
              Electromecánica Integral & Laboratorio de <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-200 to-emerald-400">Electrónica Automotriz</span>
            </h1>

            {/* Bajada de Propuesta de Valor */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              La electrónica también es parte del motor. Diagnosticamos con equipamiento original, reparamos computadoras (ECUs) en banco y realizamos mecánica de alta precisión sin cambiar piezas al azar.
            </p>

            {/* Bullets de Confianza (Digital Handshake - Tekmetric) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Diagnóstico con evidencia y osciloscopio</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Presupuesto previo cerrado y transparente</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Atendido directamente por Nacho</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Garantía escrita en cada reparación</span>
              </div>
            </div>

            {/* CTAs Principales */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => scrollTo('turnero')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Turno Online</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={() => scrollTo('sintomas')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-medium text-sm transition-all hover:border-zinc-700"
              >
                <Search className="w-4 h-4 text-emerald-400" />
                <span>¿Qué falla tiene tu auto?</span>
              </button>
            </div>

            {/* Micro Nota de Garantía */}
            <p className="text-[11px] text-zinc-400 font-mono">
              * Turnos coordinados con recepción técnica programada en Florida 647.
            </p>

          </div>

          {/* Columna Derecha: Showcase Visual de Laboratorio (KARR / Anderson Style) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Contenedor de Ingeniería con Estilo Terminal / Laboratorio */}
              <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                
                {/* Header de la consola técnica */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="font-mono text-xs font-semibold text-zinc-200 tracking-wider">
                      LABORATORIO BENCH 01
                    </span>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-emerald-400 border border-zinc-700/60">
                    CAN 2.0B / UDS
                  </span>
                </div>

                {/* Métricas Técnicas y Osciloscopio Simulado */}
                <div className="space-y-4">
                  
                  {/* Tarjeta de Telemetría */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                      <div className="text-[10px] font-mono uppercase text-zinc-400">Tensión de Banco</div>
                      <div className="font-mono text-lg font-bold text-zinc-100 flex items-baseline gap-1 mt-0.5">
                        <span>14.20</span>
                        <span className="text-xs text-emerald-500">V CC</span>
                      </div>
                      <div className="text-[10px] text-zinc-400 mt-1">Fuente estabilizada</div>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                      <div className="text-[10px] font-mono uppercase text-zinc-400">Consumo Parásito</div>
                      <div className="font-mono text-lg font-bold text-emerald-400 flex items-baseline gap-1 mt-0.5">
                        <span>0.02</span>
                        <span className="text-xs text-zinc-400">A (Sleep)</span>
                      </div>
                      <div className="text-[10px] text-zinc-400 mt-1">Tolerancia óptima</div>
                    </div>
                  </div>

                  {/* Representación de Señal de Osciloscopio CKP / Inyección */}
                  <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span className="flex items-center gap-1.5 text-zinc-300">
                        <Activity className="w-3.5 h-3.5 text-emerald-400" />
                        CH1: Sensor Inductivo 60-2
                      </span>
                      <span className="text-emerald-400 font-mono">820 RPM</span>
                    </div>

                    {/* Gráfica Vectorial Minimalista de Onda */}
                    <div className="h-16 w-full flex items-center justify-center overflow-hidden bg-zinc-900/50 rounded-lg p-2 border border-zinc-800/60">
                      <svg className="w-full h-full stroke-emerald-400 fill-none" viewBox="0 0 300 40">
                        <path 
                          d="M0,20 Q10,5 20,20 T40,20 T60,20 T80,20 T100,20 T120,20 T140,20 T160,20 T180,20 T200,20 T210,20 T220,38 T230,2 T240,20 T260,20 T280,20 T300,20" 
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                      <span>Base de Tiempo: 2 ms/div</span>
                      <span>Amplitud: 5V/div</span>
                    </div>
                  </div>

                  {/* Módulos Soportados */}
                  <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Cpu className="w-4 h-4 text-emerald-400" />
                      <div>
                        <div className="text-xs font-semibold text-zinc-200">ECU • BCM • ABS • Cuadros</div>
                        <div className="text-[10px] text-zinc-400 font-mono">Clonación y virginización directa</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                      Plug & Play
                    </span>
                  </div>

                </div>

                {/* Footer del Showcase con Datos de Taller */}
                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Loma Hermosa, BA</span>
                  </span>
                  <span className="font-mono text-zinc-400">Instrumental 2026</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
