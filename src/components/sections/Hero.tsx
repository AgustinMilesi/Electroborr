import React from 'react';
import { 
  Activity, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Search,
  ShieldCheck
} from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-zinc-950 pt-10 pb-16 md:pt-16 md:pb-20 border-b border-zinc-800/80">
      
      {/* Background Architectural Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fafafa 1px, transparent 1px), linear-gradient(to right, #fafafa 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Columna Izquierda: Copywriting Quirúrgico y Directo */}
          <div className="lg:col-span-7 space-y-5">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Taller & Laboratorio • Loma Hermosa, Tres de Febrero</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-zinc-50 leading-[1.1]">
              Electromecánica Integral & Laboratorio de <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-200 to-emerald-400">ECUs Automotrices</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
              La electrónica también es parte del motor. Diagnóstico con instrumental original, reparación de computadoras en banco y mecánica de precisión sin cambiar piezas a ciegas.
            </p>

            {/* Badges de Confianza Rápidos */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1 text-xs text-zinc-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Presupuesto previo cerrado
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Atendido por Nacho
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Garantía escrita 90 días
              </span>
            </div>

            {/* CTAs Principales con foco de UX */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => scrollTo('turnero')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/10 active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Turno Online</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={() => scrollTo('interactivo')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-medium text-sm transition-all hover:border-zinc-700"
              >
                <Search className="w-4 h-4 text-emerald-400" />
                <span>¿Qué falla presenta tu auto?</span>
              </button>
            </div>

          </div>

          {/* Columna Derecha: Tarjeta de Telemetría Compacta */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-5 shadow-2xl backdrop-blur-sm space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs font-mono">
                <span className="flex items-center gap-2 text-zinc-200 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  BENCH 01 • ESTADO OPERATIVO
                </span>
                <span className="text-emerald-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                  CAN-Bus Active
                </span>
              </div>

              {/* Tensión & Consumo */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800/80">
                  <div className="text-[10px] font-mono uppercase text-zinc-500">Tensión en Banco</div>
                  <div className="font-mono text-base font-bold text-zinc-100 mt-0.5">
                    14.20 <span className="text-xs text-emerald-400 font-normal">V CC</span>
                  </div>
                  <div className="text-[10px] text-zinc-500">Regulada y limpia</div>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800/80">
                  <div className="text-[10px] font-mono uppercase text-zinc-500">Consumo Parásito</div>
                  <div className="font-mono text-base font-bold text-emerald-400 mt-0.5">
                    0.02 <span className="text-xs text-zinc-400 font-normal">A</span>
                  </div>
                  <div className="text-[10px] text-zinc-500">Reposo de red normal</div>
                </div>
              </div>

              {/* Osciloscopio mini */}
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800/80 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    Oscilograma CKP / Inyección
                  </span>
                  <span className="text-emerald-400">820 RPM</span>
                </div>
                <div className="h-12 w-full flex items-center justify-center bg-zinc-900/60 rounded-lg p-1.5 border border-zinc-800/60">
                  <svg className="w-full h-full stroke-emerald-400 fill-none" viewBox="0 0 300 30">
                    <path 
                      d="M0,15 Q10,2 20,15 T40,15 T60,15 T80,15 T100,15 T120,15 T140,15 T160,15 T180,15 T200,15 T210,15 T220,28 T230,2 T240,15 T260,15 T280,15 T300,15" 
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Footer de Tarjeta */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Florida 647, Loma Hermosa</span>
                </span>
                <span className="text-zinc-500">Multimarca OEM</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
