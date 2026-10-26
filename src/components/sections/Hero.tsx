import React, { useState } from 'react';
import { 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Wrench,
  Clock,
  Sparkles
} from 'lucide-react';
import { WORKSHOP_DATA } from '../../data/electroborrData';

export const Hero: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState('Volkswagen');
  const [selectedService, setSelectedService] = useState('Diagnóstico Computarizado');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickWhatsApp = () => {
    const text = `Hola Nacho! Te escribo desde la web de Electroborr para consultar por un turno para mi ${selectedBrand} por ${selectedService}.`;
    window.open(`https://wa.me/${WORKSHOP_DATA.contact.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-zinc-950 pt-8 pb-12 md:pt-14 md:pb-16 border-b border-zinc-800/80">
      
      {/* Background Architectural Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fafafa 1px, transparent 1px), linear-gradient(to right, #fafafa 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Columna Izquierda: Mensaje Claro y Humano */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Taller Abierto • Florida 647, Loma Hermosa</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-zinc-50 leading-[1.1]">
              Electromecánica Integral & Laboratorio <span className="text-emerald-400">Automotriz</span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed">
              Atendido directamente por <strong>Nacho</strong>. Diagnóstico computarizado original, reparación de computadoras de motor (ECUs), inyección y mecánica general en Tres de Febrero.
            </p>

            {/* Badges Rápidos de Confianza */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-xs text-zinc-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Presupuesto previo cerrado
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Garantía escrita 90 días
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Multimarca nacional e importada
              </span>
            </div>

            {/* Botones de Acción */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => scrollTo('turnero')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Pedir Turno Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('carrusel-servicios')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-medium text-xs sm:text-sm transition-all"
              >
                <Wrench className="w-4 h-4 text-emerald-400" />
                <span>Ver Trabajos y Servicios</span>
              </button>
            </div>

          </div>

          {/* Columna Derecha: Tarjeta Interactiva de Atención Inmediata (Sin voltaje ni cosas raras) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 p-6 shadow-xl backdrop-blur-sm space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-zinc-100">
                      Recepción Rápida
                    </h3>
                    <p className="text-[10px] text-zinc-400">Coordiná tu ingreso directo</p>
                  </div>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-zinc-950 text-emerald-400 border border-zinc-800">
                  Respuesta en minutos
                </span>
              </div>

              {/* Selector Rápido de Marca */}
              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                    Marca de tu auto:
                  </label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-emerald-500"
                  >
                    {WORKSHOP_DATA.supportedBrands.map((b) => (
                      <option key={b.name} value={b.name}>{b.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                    ¿Qué trabajo necesitás?
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Diagnóstico y Escaneo Computarizado">Diagnóstico y Escaneo Computarizado</option>
                    <option value="Reparación o Clonación de ECU / Computadora">Reparación o Clonación de ECU / Módulo</option>
                    <option value="Solución DPF / EGR / AdBlue Diésel">Solución DPF / EGR / AdBlue Diésel</option>
                    <option value="Electricidad y Batería / Alternador">Electricidad y Batería / Alternador</option>
                    <option value="Cambio de Distribución y Frenos">Cambio de Distribución y Frenos</option>
                  </select>
                </div>

                <button
                  onClick={handleQuickWhatsApp}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md active:scale-98"
                >
                  <Phone className="w-4 h-4 fill-zinc-950" />
                  <span>Consultar Turno por WhatsApp</span>
                </button>
              </div>

              {/* Info del taller en Loma Hermosa */}
              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Florida 647</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-zinc-500" />
                  <span>08:30 a 18:00 hs</span>
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
