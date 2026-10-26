import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Check, 
  MessageSquare, 
  Copy, 
  CheckCircle2 
} from 'lucide-react';
import { WORKSHOP_DATA } from '../../data/electroborrData';

export const WarrantyAndCoupons: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

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
    <section id="garantia" className="py-20 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>TEKMETRIC PILAR 7 • CASO HANSEN AUTO REPAIR (GARANTÍA & BENEFICIOS)</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-zinc-50 tracking-tight">
            Garantía Escrita & Beneficios Digitales
          </h2>
          <p className="mt-3 text-base text-zinc-400 leading-relaxed">
            La confianza se construye con hechos y respaldo por escrito. En ELECTROBORR cada trabajo sale probado en banco y respaldado formalmente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Tarjeta de Garantía Escrita */}
          <div className="lg:col-span-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-zinc-100">
                    {WORKSHOP_DATA.warranty.title}
                  </h3>
                  <span className="font-mono text-xs text-zinc-500 uppercase">
                    Respaldo Técnico Documentado
                  </span>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                {WORKSHOP_DATA.warranty.description}
              </p>

              <div className="space-y-3">
                {WORKSHOP_DATA.warranty.coveragePoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/80 text-xs text-zinc-500 font-mono">
              * {WORKSHOP_DATA.warranty.originalEquipmentProof}
            </div>
          </div>

          {/* Tarjeta de Cupón Digital Exclusivo Web */}
          <div className="lg:col-span-6 rounded-2xl bg-zinc-900/80 border border-emerald-500/30 p-8 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-emerald-500/5">
            
            {/* Ribbon Superior */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                {WORKSHOP_DATA.coupon.badge}
              </span>
              <span className="font-mono text-xs text-zinc-500">
                1 cupón por vehículo
              </span>
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-2xl text-zinc-50 tracking-tight">
                {WORKSHOP_DATA.coupon.title}
              </h3>

              <div className="my-3 inline-block font-mono text-xs sm:text-sm font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
                {WORKSHOP_DATA.coupon.highlight}
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                {WORKSHOP_DATA.coupon.description}
              </p>

              {/* Caja de Código de Cupón */}
              <div className="p-4 rounded-xl bg-zinc-950 border border-dashed border-zinc-700 flex items-center justify-between gap-3 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block">
                    Código de Promoción:
                  </span>
                  <span className="font-mono text-base sm:text-lg font-bold text-zinc-100 tracking-wider">
                    {WORKSHOP_DATA.coupon.code}
                  </span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleApplyCouponWhatsApp}
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-sm transition-all flex items-center justify-center gap-2.5 shadow-md active:scale-98"
              >
                <MessageSquare className="w-4 h-4 fill-zinc-950" />
                <span>Canjear Beneficio por WhatsApp</span>
              </button>

              <p className="text-[10px] text-zinc-500 font-mono text-center">
                * {WORKSHOP_DATA.coupon.terms}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
