import React from 'react';
import { 
  Cpu, 
  Wrench, 
  ShieldCheck, 
  Activity, 
  Layers 
} from 'lucide-react';
import { WORKSHOP_DATA } from '../../data/electroborrData';

export const OurStoryAndWorkshop: React.FC = () => {
  return (
    <section id="taller" className="py-20 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>TEKMETRIC PILAR 8 • LA HISTORIA DEL TALLER</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-zinc-50 tracking-tight">
            Nuestra Historia en Loma Hermosa
          </h2>
          <p className="mt-3 text-lg font-mono text-emerald-400/90">
            &ldquo;La electrónica también es parte del motor&rdquo;
          </p>
        </div>

        {/* Bloque Principal: Texto de Nacho + Showcase de Equipamiento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Texto Humano y Profesional */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-zinc-300 leading-relaxed">
            <p className="text-base sm:text-lg font-medium text-zinc-100 border-l-2 border-emerald-500 pl-4 py-1">
              {WORKSHOP_DATA.story.lead}
            </p>

            {WORKSHOP_DATA.story.body.map((paragraph, idx) => (
              <p key={idx} className="text-zinc-400">
                {paragraph}
              </p>
            ))}

            {/* Los 3 Pilares de Confianza */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {WORKSHOP_DATA.story.pillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <h3 className="font-heading font-bold text-xs text-zinc-100">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Showcase Técnico de Laboratorio (Estilo Anderson Auto Repair) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-zinc-900/70 border border-zinc-800 p-6 space-y-4 backdrop-blur-sm">
              
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs font-mono text-zinc-400">
                <span>ESTÁNDARES DE LABORATORIO</span>
                <span className="text-emerald-400">FLORIDA 647</span>
              </div>

              {/* Fichas de Instrumental del Taller */}
              <div className="space-y-3">
                
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400 shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-200">
                      Osciloscopio Automotriz 4 Canales
                    </h4>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      Captura microsegundo a microsegundo de pulsos de inyectores, señales de encendido y tramas de CAN-Bus.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400 shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-200">
                      ECU Bench & Simulador de Sensores
                    </h4>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      Prueba en banco con emulación de señales Hall e inductivas. Permite probar computadoras sin tener el auto presente.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400 shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-200">
                      Estación de Microsoldadura SMD/BGA
                    </h4>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      Intervención microscópica de drivers de potencia, memorias flash y reemplazo de microcontroladores dañados.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400 shrink-0">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-200">
                      Trabas de Calado y Torquímetros Homologados
                    </h4>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      Herramental específico para fijar levas y cigüeñal de cada fabricante durante el cambio de kit de distribución.
                    </p>
                  </div>
                </div>

              </div>

              {/* Tagline de Cierre */}
              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Tres de Febrero, BA</span>
                <span className="text-emerald-400 font-semibold">Cero improvisación</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
