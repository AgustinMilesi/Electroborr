import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { FAQS_DATA, WORKSHOP_DATA } from '../../data/electroborrData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const displayedFaqs = showAllFaqs ? FAQS_DATA : FAQS_DATA.slice(0, 4);

  return (
    <section id="faqs" className="py-14 sm:py-20 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-2.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>PREGUNTAS FRECUENTES</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-zinc-50 tracking-tight">
            Dudas Rápidas Antes de Venir
          </h2>
        </div>

        {/* Acordeón Compacto */}
        <div className="space-y-2.5">
          {displayedFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-zinc-900/50 border border-zinc-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-zinc-900/80 transition-colors"
                >
                  <span className="font-heading font-semibold text-xs sm:text-sm text-zinc-100">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'transform rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-zinc-300 leading-relaxed border-t border-zinc-800/60 animate-in fade-in duration-150">
                    <p className="pt-1.5">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Toggle para ver más FAQs */}
        {!showAllFaqs && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowAllFaqs(true)}
              className="text-xs font-semibold text-zinc-400 hover:text-emerald-400 transition-colors py-2 px-4 rounded-lg bg-zinc-900/50 border border-zinc-800"
            >
              Ver más preguntas frecuentes ({FAQS_DATA.length - 4} más)
            </button>
          </div>
        )}

        {/* Footer de Soporte Directo */}
        <div className="mt-8 text-center p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-left text-xs">
            <span className="font-semibold text-zinc-200 block">¿Tenés otra consulta sobre tu vehículo?</span>
            <span className="text-zinc-400">Nacho responde directamente por WhatsApp.</span>
          </div>

          <a
            href={WORKSHOP_DATA.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs font-semibold border border-zinc-700/60 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Consultar a Nacho</span>
          </a>
        </div>

      </div>
    </section>
  );
};
