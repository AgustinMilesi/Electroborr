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
    <section className="relative overflow-hidden bg-zinc-950 pt-6 pb-12 sm:pt-12 sm:pb-16 border-b border-zinc-800/80 w-full max-w-full">
      
      {/* Background Architectural Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fafafa 1px, transparent 1px), linear-gradient(to right, #fafafa 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Imagen de fondo sutil con overlay de alta gama automotriz */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-15 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80"
          alt="Taller electromecánico de alta precisión"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Columna Izquierda: Mensaje Claro y Humano */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="truncate">Taller Abierto • Florida 647, Loma Hermosa</span>
            </div>

            <h1 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-zinc-50 leading-tight sm:leading-[1.1] break-words">
              Electromecánica Integral & Laboratorio <span className="text-emerald-400">Automotriz</span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed">
              Atendido directamente por <strong>Nacho</strong>. Diagnóstico computarizado original, reparación de computadoras de motor (ECUs), inyección y mecánica general en Tres de Febrero.
            </p>

            {/* Badges Rápidos de Confianza */}
            <div className="flex flex-wrap gap-x-4 sm:gap-x-5 gap-y-2 pt-1 text-xs text-zinc-300">
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
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Pedir Turno Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('carrusel-servicios')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-medium text-xs sm:text-sm transition-all"
              >
                <Wrench className="w-4 h-4 text-emerald-400" />
                <span>Ver Trabajos y Servicios</span>
              </button>
            </div>

          </div>

          {/* Columna Derecha: Tarjeta Interactiva con Imagen Real de Reparación */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 p-5 sm:p-6 shadow-xl backdrop-blur-sm space-y-4 relative overflow-hidden">
              
              {/* Imagen en Cabecera de la Tarjeta */}
              <div className="relative h-28 sm:h-32 w-full rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=800&q=80"
                  alt="Escaneo y diagnóstico computarizado automotriz"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-zinc-200">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    Recepción de Vehículos
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/40 text-[10px]">
                    Atención en el día
                  </span>
                </div>
              </div>

              {/* Selector Rápido de Marca */}
              <div className="space-y-3 pt-1">
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
                  <span>Consultar Turno a Nacho por WhatsApp</span>
                </button>
              </div>

              {/* Info del taller en Loma Hermosa */}
              <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Florida 647</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
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
