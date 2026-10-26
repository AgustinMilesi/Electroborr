import React from 'react';
import { WORKSHOP_DATA } from '../../data/electroborrData';

export const BrandTicker: React.FC = () => {
  return (
    <div className="bg-zinc-950 py-8 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Label de Multimarca */}
          <div className="shrink-0 text-center md:text-left">
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold block">
              COBERTURA MULTIMARCA
            </span>
            <span className="text-xs text-zinc-400">
              Protocolos de comunicación y calado original
            </span>
          </div>

          {/* Grilla / Ticker de Marcas */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-3">
            {WORKSHOP_DATA.supportedBrands.map((brand) => (
              <div
                key={brand.name}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 text-xs font-medium text-zinc-300 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                <span>{brand.name}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
