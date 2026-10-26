import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  MessageSquare, 
  ShieldCheck, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { WORKSHOP_DATA, SERVICES_DATA } from '../../data/electroborrData';
import { ElectroborrLogo } from '../brand/ElectroborrLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Col 1: Identidad & Propuesta de Valor */}
          <div className="space-y-4">
            <div className="flex items-start">
              <ElectroborrLogo variant="full" size="sm" />
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Laboratorio de electrónica automotriz y mecánica de precisión en Loma Hermosa. Diagnóstico con instrumental original, reparación de ECUs y soluciones definitivas de software.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a 
                href={WORKSHOP_DATA.contact.instagramUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="Instagram de Electroborr"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={WORKSHOP_DATA.contact.facebookUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="Facebook de Electroborr"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={WORKSHOP_DATA.contact.whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="WhatsApp de Electroborr"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Atendido directamente por su dueño</span>
            </div>
          </div>

          {/* Col 2: Tekmetric Pilar 2 - Páginas Dedicadas por Servicio */}
          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-zinc-200 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Servicios Especializados
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/servicios/${service.slug}`}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-zinc-600 group-hover:text-emerald-500 transition-transform group-hover:translate-x-0.5" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Tekmetric Pilar 1 - Contacto y Horarios Abajo */}
          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-zinc-200 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Contacto y Horarios
            </h4>
            <div className="space-y-3 text-xs">
              
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-zinc-200 font-medium">{WORKSHOP_DATA.address.street}</p>
                  <p className="text-zinc-400">{WORKSHOP_DATA.address.neighborhood}, {WORKSHOP_DATA.address.municipality}</p>
                  <a 
                    href={WORKSHOP_DATA.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:underline mt-0.5"
                  >
                    <span>Abrir en Google Maps</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <a 
                    href={`tel:${WORKSHOP_DATA.contact.phoneRaw}`}
                    className="text-zinc-200 font-medium hover:text-emerald-400 transition-colors font-mono"
                  >
                    {WORKSHOP_DATA.contact.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-zinc-400">Atención telefónica y WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-zinc-200 font-mono text-[11px]">{WORKSHOP_DATA.hours.weekdays}</p>
                  <p className="text-zinc-400 font-mono text-[11px]">{WORKSHOP_DATA.hours.saturdays}</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5">{WORKSHOP_DATA.hours.sundays}</p>
                </div>
              </div>

            </div>
          </div>

          {/* Col 4: Mapa Embebido de Google Maps */}
          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-zinc-200 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Ubicación del Taller
            </h4>
            <div className="w-full h-36 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 relative">
              <iframe
                title="Ubicación de ELECTROBORR en Google Maps"
                src={WORKSHOP_DATA.address.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-[10px] text-zinc-400 mt-2 font-mono">
              Fácil acceso desde Ruta 8 y Av. Márquez (Tres de Febrero)
            </p>
          </div>

        </div>

        {/* Bottom Bar con Cobertura Local SEO y Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-zinc-200">ELECTROBORR</strong> — Electromecánica Integral del Automotor. Todos los derechos reservados.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-zinc-400">
            <span>Zona de atención: Loma Hermosa</span>
            <span>•</span>
            <span>Tres de Febrero</span>
            <span>•</span>
            <span>San Martín</span>
            <span>•</span>
            <span>Caseros</span>
            <span>•</span>
            <span>El Palomar</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
