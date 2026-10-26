import React from 'react';
import { Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { WORKSHOP_DATA } from '../../data/electroborrData';

export const Topbar: React.FC = () => {
  return (
    <div className="bg-zinc-950/95 border-b border-zinc-800/80 text-xs text-zinc-400 py-1.5 sm:py-2 px-3 sm:px-4 backdrop-blur-sm z-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-x-3">
        
        {/* Left: Dirección con link al mapa */}
        <a
          href={WORKSHOP_DATA.address.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors group min-w-0 flex-1 truncate"
          title="Ver ubicación en Google Maps"
        >
          <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
          <span className="truncate text-[11px] sm:text-xs">
            <span className="sm:hidden font-medium text-zinc-300">Florida 647, Loma Hermosa</span>
            <span className="hidden sm:inline">{WORKSHOP_DATA.address.fullText}</span>
          </span>
          <ArrowUpRight className="hidden sm:inline w-3 h-3 text-zinc-600 group-hover:text-zinc-400 shrink-0" />
        </a>

        {/* Right: Horarios en desktop y Teléfono en móvil */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:flex items-center gap-1.5 text-zinc-400">
            <Clock className="w-3.5 h-3.5 text-zinc-500" />
            <span className="font-mono text-[11px]">{WORKSHOP_DATA.hours.weekdays} | Sáb: 08:30 a 13:00</span>
          </div>

          <a
            href={`tel:${WORKSHOP_DATA.contact.phoneRaw}`}
            className="flex items-center gap-1.5 hover:text-zinc-100 transition-colors font-medium text-[11px] sm:text-xs"
          >
            <Phone className="w-3 h-3 text-emerald-500 shrink-0" />
            <span className="font-mono">{WORKSHOP_DATA.contact.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
