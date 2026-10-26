import React from 'react';

interface ElectroborrLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'symbol-only';
  size?: 'sm' | 'md' | 'lg';
}

export const ElectroborrLogo: React.FC<ElectroborrLogoProps> = ({ 
  className = '', 
  variant = 'full',
  size = 'md'
}) => {
  const heightClass = size === 'sm' ? 'h-8' : size === 'lg' ? 'h-16' : 'h-11';

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      
      {/* Silueta del Auto con Circuitos Integrados (Vector SVG Limpio) */}
      {(variant === 'full' || variant === 'symbol-only') && (
        <svg 
          className={`${heightClass} w-auto transition-transform duration-300 group-hover:scale-[1.02]`}
          viewBox="0 0 420 130" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Silueta aerodinámica del vehículo */}
          <path 
            d="M 30,68 L 70,55 C 80,50 115,22 195,16 C 265,11 315,35 348,56 C 375,70 395,78 405,82 C 385,81 370,76 355,70 C 330,60 300,48 240,48 C 170,48 110,65 90,75 L 30,68 Z" 
            fill="#FAFAFA"
          />

          {/* Alerón / Cola trasera deportiva */}
          <path 
            d="M 12,58 L 65,48 L 48,96 L 56,58 L 82,78 L 65,48 Z" 
            fill="#FAFAFA"
          />

          {/* Línea inferior de carrocería frontal */}
          <path 
            d="M 320,60 C 350,68 385,76 410,85 C 380,85 350,81 320,74 C 295,68 260,65 220,66 C 180,67 130,75 95,84 C 115,75 145,67 185,63 C 230,59 280,58 320,60 Z" 
            fill="#E4E4E7"
          />

          {/* Circuitos Electrónicos PCB en Verde Esmeralda (ADN Electroborr) */}
          <g stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Traza 1 Superior */}
            <path d="M 110,60 L 140,60 L 155,48 L 220,48 L 235,58 L 270,58" />
            <circle cx="270" cy="58" r="2.5" fill="#10B981" />
            
            {/* Traza 2 Media */}
            <path d="M 95,70 L 130,70 L 145,62 L 205,62 L 215,70 L 290,70 L 305,62 L 325,62" />
            <circle cx="325" cy="62" r="2.5" fill="#10B981" />

            {/* Traza 3 Inferior */}
            <path d="M 115,78 L 150,78 L 165,70 L 245,70 L 255,78 L 335,78" />
            <circle cx="335" cy="78" r="2.5" fill="#10B981" />

            {/* Derivaciones secundarias de circuito */}
            <path d="M 170,62 L 180,52 L 195,52" />
            <circle cx="195" cy="52" r="2" fill="#10B981" />

            <path d="M 240,70 L 250,62 L 275,62" />
            <circle cx="275" cy="62" r="2" fill="#10B981" />
          </g>

          {/* Puntos de soldadura / nodos PCB */}
          <circle cx="110" cy="60" r="2.5" fill="#10B981" />
          <circle cx="95" cy="70" r="2.5" fill="#10B981" />
          <circle cx="115" cy="78" r="2.5" fill="#10B981" />
        </svg>
      )}

      {/* Logotipo Tipográfico: ELECTROBORR con botones de encendido en las "O" */}
      {variant !== 'symbol-only' && (
        <div className="flex flex-col items-center mt-0.5">
          <div className="flex items-center tracking-tight font-heading font-black text-zinc-100 text-lg sm:text-2xl leading-none">
            <span>ELECTR</span>
            
            {/* Primera O con botón de Power */}
            <span className="relative inline-flex items-center justify-center mx-0.5 w-[0.85em] h-[0.85em]">
              <svg className="w-full h-full text-zinc-100" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M 6.34 7.34 A 8 8 0 1 0 17.66 7.34" 
                  stroke="currentColor" 
                  strokeWidth="3.2" 
                  strokeLinecap="round" 
                />
                <line 
                  x1="12" y1="3" x2="12" y2="10" 
                  stroke="#10B981" 
                  strokeWidth="3.2" 
                  strokeLinecap="round" 
                />
              </svg>
            </span>

            <span>B</span>

            {/* Segunda O con botón de Power */}
            <span className="relative inline-flex items-center justify-center mx-0.5 w-[0.85em] h-[0.85em]">
              <svg className="w-full h-full text-zinc-100" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M 6.34 7.34 A 8 8 0 1 0 17.66 7.34" 
                  stroke="currentColor" 
                  strokeWidth="3.2" 
                  strokeLinecap="round" 
                />
                <line 
                  x1="12" y1="3" x2="12" y2="10" 
                  stroke="#10B981" 
                  strokeWidth="3.2" 
                  strokeLinecap="round" 
                />
              </svg>
            </span>

            <span>RR</span>
          </div>

          {/* Subtítulo Oficial con Líneas de Acento en Verde */}
          <div className="flex items-center gap-2 mt-1 w-full justify-center">
            <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-emerald-500/80" />
            <span className="font-mono text-[8px] sm:text-[9.5px] uppercase tracking-[0.22em] text-zinc-300 font-medium whitespace-nowrap">
              Electromecánica Integral del Automotor
            </span>
            <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-emerald-500/80" />
          </div>
        </div>
      )}

    </div>
  );
};
