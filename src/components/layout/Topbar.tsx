import React from 'react';
import { Phone, MapPin, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';
import { WORKSHOP_DATA } from '../../data/electroborrData';

export const Topbar: React.FC = () => {
  return (
    <div className="bg-zinc-950/95 border-b border-zinc-800/80 text-xs text-zinc-400 py-2 px-4 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-6">
        
        {/* Left: Dirección y Horarios (Tekmetric Pilar 1) */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <a
            href={WORKSHOP_DATA.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors group"
          >
            <MapPin className="w-3.5 h-3.5 text-emerald-500 group-hover:scale-110 transition-transform" />
            <span>{WORKSHOP_DATA.address.fullText}</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-zinc-400" />
          </a>

          <div className="hidden sm:flex items-center gap-1.5 text-zinc-400">
            <Clock className="w-3.5 h-3.5 text-zinc-500" />
            <span className="font-mono text-[11px] tracking-tight">{WORKSHOP_DATA.hours.weekdays} | Sáb: 08:30 a 13:00</span>
          </div>
        </div>

        {/* Right: Teléfono Urgencias y WhatsApp Directo */}
        <div className="flex items-center gap-4 ml-auto sm:ml-0">
          <a
            href={`tel:${WORKSHOP_DATA.contact.phoneRaw}`}
            className="flex items-center gap-1.5 hover:text-zinc-100 transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-500" />
            <span className="font-mono">{WORKSHOP_DATA.contact.phoneDisplay}</span>
          </a>

          <a
            href={WORKSHOP_DATA.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all font-medium text-[11px]"
          >
            <MessageSquare className="w-3 h-3" />
            <span>WhatsApp Directo</span>
          </a>
        </div>

      </div>
    </div>
  );
};
