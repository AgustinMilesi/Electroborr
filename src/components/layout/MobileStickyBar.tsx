import React from 'react';
import { PhoneCall, MessageCircle } from 'lucide-react';
import { WORKSHOP_DATA } from '../../data/electroborrData';

interface MobileStickyBarProps {
  onOpenBooking?: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  const handleBookingClick = () => {
    if (onOpenBooking) {
      onOpenBooking();
      return;
    }
    const element = document.getElementById('turnero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(WORKSHOP_DATA.contact.whatsappUrl, '_blank');
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-zinc-950/95 border-t border-zinc-800 p-2.5 backdrop-blur-lg">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        
        {/* Botón de Llamada Telefónica */}
        <a
          href={`tel:${WORKSHOP_DATA.contact.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-zinc-900 border border-zinc-700/80 text-zinc-100 font-semibold text-xs active:bg-zinc-800 transition-colors"
        >
          <PhoneCall className="w-4 h-4 text-emerald-400" />
          <span>Llamar Directo</span>
        </a>

        {/* Botón de Turno WhatsApp */}
        <button
          onClick={handleBookingClick}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-emerald-500 text-zinc-950 font-bold text-xs active:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/10"
        >
          <MessageCircle className="w-4 h-4 fill-zinc-950" />
          <span>Pedir Turno</span>
        </button>

      </div>
    </div>
  );
};
