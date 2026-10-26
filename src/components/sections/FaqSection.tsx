import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { FAQS_DATA, WORKSHOP_DATA } from '../../data/electroborrData';

export const FaqSection: React.FC = () => {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-8 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Barra Mini Desplegable */}
        <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700/80 transition-all overflow-hidden shadow-lg">
          <button
            onClick={() => setIsSectionOpen(!isSectionOpen)}
            className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left group"
            aria-expanded={isSectionOpen}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-emerald-400 shrink-0 group-hover:border-emerald-500/40 transition-colors">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-sm sm:text-base text-zinc-100">
                    Preguntas Frecuentes
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {FAQS_DATA.length} dudas
                  </span>
                </div>
                <p className="text-xs text-zinc-400 truncate mt-0.5">
                  Turnos, diagnósticos, formas de trabajo y tiempo de escaneo
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <span className="text-xs font-semibold text-emerald-400 hidden sm:inline">
                {isSectionOpen ? 'Ocultar' : 'Tocar para desplegar'}
              </span>
              <div className={`p-2 rounded-lg bg-zinc-800 text-zinc-200 transition-transform duration-200 ${isSectionOpen ? 'rotate-180 bg-emerald-500/20 text-emerald-400' : 'group-hover:bg-zinc-700'}`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </button>

          {/* Contenido que se despliega si se toca */}
          {isSectionOpen && (
            <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-zinc-800/80 space-y-3 animate-in fade-in duration-200">
              <div className="space-y-2 pt-2">
                {FAQS_DATA.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={faq.id}
                      className="rounded-xl bg-zinc-950/80 border border-zinc-800/80 overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-3.5 text-left flex items-center justify-between gap-3 hover:bg-zinc-900/50 transition-colors"
                      >
                        <span className="font-heading font-medium text-xs sm:text-sm text-zinc-200">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 shrink-0 ${
                            isOpen ? 'transform rotate-180 text-emerald-400' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-3.5 pb-3.5 pt-1 text-xs text-zinc-300 leading-relaxed border-t border-zinc-800/60 bg-zinc-900/30">
                          <p className="pt-1">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Botón WhatsApp Directo */}
              <div className="pt-4 mt-2 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-zinc-400 text-center sm:text-left">
                  ¿Tenés una falla puntual? El dueño te responde directamente.
                </span>
                <a
                  href={WORKSHOP_DATA.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs font-semibold border border-zinc-700/60 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Consultar con el Dueño</span>
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
