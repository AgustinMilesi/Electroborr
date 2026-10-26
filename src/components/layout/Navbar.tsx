import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Cpu, 
  ChevronDown, 
  Calendar, 
  Wrench, 
  HelpCircle, 
  BookOpen, 
  Award,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA } from '../../data/electroborrData';
import { ElectroborrLogo } from '../brand/ElectroborrLogo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const targetId = id === 'servicios' ? 'carrusel-servicios' : id === 'sintomas' ? 'sintomas' : id === 'garantia' ? 'taller' : id;
    if (!isHome) {
      window.location.href = `/#${targetId}`;
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-zinc-950/90 border-b border-zinc-800 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
          
          {/* Emblema Oficial Electroborr */}
          <Link to="/" className="flex items-center group focus:outline-none py-1 min-w-0 flex-1 sm:flex-initial">
            <ElectroborrLogo variant="full" size="sm" />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-zinc-300">
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1.5 py-2 hover:text-white transition-colors focus:outline-none"
                onClick={() => scrollToSection('servicios')}
              >
                <span>Servicios de Laboratorio</span>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-500 transition-transform" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 py-2 bg-zinc-900/95 border border-zinc-800 rounded-xl shadow-2xl backdrop-blur-lg animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-zinc-500 border-b border-zinc-800/80 mb-1">
                    Especialidades Técnicas
                  </div>
                  {SERVICES_DATA.map((service) => (
                    <Link
                      key={service.id}
                      to={`/servicios/${service.slug}`}
                      className="flex items-start gap-3 px-3.5 py-2.5 hover:bg-zinc-800/60 rounded-lg transition-colors group"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className="mt-0.5 p-1 rounded bg-zinc-800 border border-zinc-700/60 text-emerald-400 group-hover:border-emerald-500/40">
                        <Cpu className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                          {service.title}
                        </div>
                        <div className="text-[11px] text-zinc-400 line-clamp-1">
                          {service.tagline}
                        </div>
                      </div>
                    </Link>
                  ))}
                  <div className="mt-1 pt-1 border-t border-zinc-800/80 px-3">
                    <Link
                      to="/#servicios"
                      onClick={() => { setServicesDropdownOpen(false); scrollToSection('servicios'); }}
                      className="text-[11px] text-emerald-400 hover:text-emerald-300 flex items-center justify-between py-1"
                    >
                      <span>Ver todas las especialidades</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => scrollToSection('sintomas')}
              className="hover:text-white transition-colors"
            >
              Diagnosticador
            </button>

            <button 
              onClick={() => scrollToSection('taller')}
              className="hover:text-white transition-colors"
            >
              El Taller
            </button>

            <button 
              onClick={() => scrollToSection('garantia')}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Award className="w-3.5 h-3.5 text-zinc-500" />
              <span>Garantía & Cupón</span>
            </button>

            <button 
              onClick={() => scrollToSection('blog')}
              className="hover:text-white transition-colors"
            >
              Guías Técnicas
            </button>

            <button 
              onClick={() => scrollToSection('faqs')}
              className="hover:text-white transition-colors"
            >
              Preguntas
            </button>
          </div>

          {/* Desktop Turnero CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => scrollToSection('turnero')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-semibold text-sm transition-all shadow-sm hover:shadow-emerald-500/10 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Pedir Turno Online</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => scrollToSection('turnero')}
              className="px-3 py-1.5 rounded-lg bg-emerald-500 text-zinc-950 text-xs font-bold"
            >
              Turno
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 px-2 pt-1">
            Navegación
          </div>
          
          <div className="grid grid-cols-1 gap-1">
            <button
              onClick={() => scrollToSection('servicios')}
              className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-900 rounded-lg text-left"
            >
              <Wrench className="w-4 h-4 text-emerald-500" />
              <span>Servicios Especializados</span>
            </button>

            <button
              onClick={() => scrollToSection('sintomas')}
              className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-900 rounded-lg text-left"
            >
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span>Diagnosticador de Fallas</span>
            </button>

            <button
              onClick={() => scrollToSection('taller')}
              className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-900 rounded-lg text-left"
            >
              <Cpu className="w-4 h-4 text-emerald-500" />
              <span>Historia de Nacho y el Taller</span>
            </button>

            <button
              onClick={() => scrollToSection('garantia')}
              className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-900 rounded-lg text-left"
            >
              <Award className="w-4 h-4 text-emerald-500" />
              <span>Garantía & Cupón Web</span>
            </button>

            <button
              onClick={() => scrollToSection('blog')}
              className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-900 rounded-lg text-left"
            >
              <BookOpen className="w-4 h-4 text-emerald-500" />
              <span>Blog Local (Tres de Febrero)</span>
            </button>

            <button
              onClick={() => scrollToSection('faqs')}
              className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-900 rounded-lg text-left"
            >
              <HelpCircle className="w-4 h-4 text-emerald-500" />
              <span>Preguntas Frecuentes</span>
            </button>
          </div>

          <div className="pt-3 border-t border-zinc-800">
            <button
              onClick={() => scrollToSection('turnero')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Turno por WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
