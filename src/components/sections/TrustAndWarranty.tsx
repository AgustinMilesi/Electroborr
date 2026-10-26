import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Copy, 
  Check, 
  MessageSquare
} from 'lucide-react';
import { WORKSHOP_DATA } from '../../data/electroborrData';

export const TrustAndWarranty: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(WORKSHOP_DATA.coupon.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleApplyCouponWhatsApp = () => {
    const waUrl = `https://wa.me/${WORKSHOP_DATA.contact.whatsappRaw}?text=${encodeURIComponent(WORKSHOP_DATA.coupon.whatsappPresetText)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="taller" className="py-14 sm:py-20 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-2.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>TRANSPARENCIA & GARANTÍA ESCRITA</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-zinc-50 tracking-tight">
            Por Qué Dejar Tu Auto en Electroborr
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Unimos la mecánica tradicional con un laboratorio de electrónica avanzada para darte diagnósticos con evidencia y respaldo documentado.
          </p>
        </div>

        {/* Grilla 3 Columnas: 1. La Historia de Nacho | 2. Garantía 90 Días | 3. Cupón Web */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Nacho & El Taller */}
          <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-800 text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-zinc-100">
                    Atendido por Nacho
                  </h3>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">
                    Florida 647, Loma Hermosa
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                &ldquo;La electrónica también es parte del motor&rdquo;. No cambiamos piezas al azar por intuición: invertimos en osciloscopios de 4 canales y bancos de prueba para mostrarte la señal real que justifica cada trabajo.
              </p>

              <div className="space-y-2 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Presupuesto cerrado antes de iniciar</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Laboratorio propio de microelectrónica</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Trabas de calado y torquímetro OEM</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-500">
              * Comunicación directa y fotos del proceso por WhatsApp.
            </div>
          </div>

          {/* Card 2: Garantía Escrita */}
          <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-800 text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-zinc-100">
                    Garantía Escrita 90 Días
                  </h3>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">
                    Respaldo en Mano de Obra y Módulos
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                Cada módulo o pieza intervenida sale con informe de prueba en banco simulado. Si realizás la distribución o frenos con nosotros, te entregamos los repuestos viejos en la caja del repuesto nuevo.
              </p>

              <div className="space-y-2 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Prueba con osciloscopio previa entrega</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Repuestos de calidad OEM (Gates, SKF, Bosch)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Constancia de kilometraje y fecha</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-500">
              * Certificado entregado al retirar tu vehículo.
            </div>
          </div>

          {/* Card 3: Cupón Digital Web */}
          <div className="rounded-2xl bg-zinc-900/80 border border-emerald-500/30 p-6 flex flex-col justify-between shadow-lg shadow-emerald-500/5">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-[9px] uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                  BENEFICIO WEB
                </span>
                <span className="font-mono text-[10px] text-zinc-500">
                  1 por vehículo
                </span>
              </div>

              <h3 className="font-heading font-bold text-base sm:text-lg text-zinc-50 leading-snug">
                {WORKSHOP_DATA.coupon.title}
              </h3>

              <div className="my-2.5 inline-block font-mono text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                100% Bonificado con tu servicio
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Prioridad en agenda técnica y chequeo computarizado de batería y alternador sin cargo al solicitar turno desde la web.
              </p>

              {/* Caja de Código */}
              <div className="p-3 rounded-xl bg-zinc-950 border border-dashed border-zinc-700 flex items-center justify-between gap-2 mb-4">
                <div>
                  <span className="text-[9px] font-mono uppercase text-zinc-500 block">Código:</span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-zinc-100">{WORKSHOP_DATA.coupon.code}</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Listo' : 'Copiar'}</span>
                </button>
              </div>
            </div>

            <button
              onClick={handleApplyCouponWhatsApp}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md active:scale-98"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-zinc-950" />
              <span>Canjear por WhatsApp</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
