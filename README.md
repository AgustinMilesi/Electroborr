# ELECTROBORR — Electromecánica Integral del Automotor

Sitio web oficial y plataforma de recepción digital 24/7 para el taller **ELECTROBORR**, ubicado en **Florida 647, Loma Hermosa, Partido de Tres de Febrero, Buenos Aires**.

Diseñado bajo la **Guía Oficial de Tekmetric para Sitios Web de Talleres Mecánicos**, con un **Design System 90/10** de estética industrial automotriz sobria (referencias: *Bosch Mobility*, *Rivian*, *Porsche Motorsport*, *Linear*) y arquitectura de **Costo Operativo $0**.

---

## 🛠️ Stack Tecnológico
- **Frontend Core:** React 18 + TypeScript + Vite
- **Enrutamiento:** `react-router-dom` v6
- **Estilos:** Tailwind CSS v3 puro (sin hojas CSS sueltas)
- **Iconografía:** `lucide-react` (trazos técnicos de 1.5px / 2px)
- **Tipografías:** Plus Jakarta Sans & Space Grotesk (títulos), Inter (lectura), JetBrains Mono (telemetría y datos técnicos)
- **Integraciones:** WhatsApp API (`https://wa.me/5491125561949`), Google Maps Embed, Schema.org JSON-LD (`AutoRepair`)

---

## 📐 Cumplimiento de los 9 Pilares de Tekmetric
1. **Contacto y Horarios Arriba y Abajo (`Topbar.tsx` y `Footer.tsx`):**
   - Teléfono clickeable `11-2556-1949` (`tel:+5491125561949`).
   - Dirección clickeable `Florida 647, Loma Hermosa, Tres de Febrero` con enlace a Google Maps y mapa interactivo embebido.
   - Horarios de atención: Lun a Vie de 08:30 a 18:00 hs | Sáb de 08:30 a 13:00 hs.
2. **Páginas Dedicadas por Servicio (`/servicios/:slug`):**
   - `/servicios/diagnostico-integral-avanzado`
   - `/servicios/laboratorio-electronica-automotriz`
   - `/servicios/soluciones-software-motor`
   - `/servicios/electricidad-integral-adas`
   - `/servicios/mecanica-general-precision`
   - *Perfil Dual:* Lenguaje claro para conductores y ficha técnica con protocolos OEM para perfiles técnicos.
3. **Turnero Online 24/7 + Medios de Pago (`BookingWizard.tsx`):**
   - Asistente de 4 pasos con estructuración automática para WhatsApp (`encodeURIComponent`).
   - Política de **Presupuesto Transparente** y detalle de modalidades de pago (Efectivo con descuento, Transferencia, Billeteras).
4. **Prueba Social y Reseñas (`ReviewsSection.tsx`):**
   - Calificación promedio 4.9/5 y tarjetas estilo Google Reviews con modelo de vehículo atendido y localidad.
5. **Mobile-First & Barra Flotante (`MobileStickyBar.tsx`):**
   - Acceso táctil inmediato a "Llamar Directo" y "Pedir Turno".
6. **Blog Geo-Localizado (`LocalBlogSection.tsx` y `/blog/:slug`):**
   - 4 artículos orientados a resolver dudas locales en Loma Hermosa y Tres de Febrero (Check Engine, ECUs en banco vs nueva, DPF/AdBlue en diésel urbano, mantenimiento de distribución).
7. **Elementos de Casos de Éxito de Tekmetric:**
   - *KARR & Anderson Auto Repair:* Showcase de telemetría de laboratorio, osciloscopio 4CH y banco ECU.
   - *Hansen Auto Repair:* Sección de Garantía Escrita de 90 días + Beneficio Web Exclusivo (`WEB-ELECTRO2026`).
   - *Quality RV Solutions:* Acordeón de FAQs técnicas y operativas.
8. **Historia del Taller (`OurStoryAndWorkshop.tsx`):**
   - Presentación de **Nacho**, origen del taller en Loma Hermosa y filosofía: *"La electrónica también es parte del motor"*.
9. **Diagnosticador Interactivo (`SymptomChecker.tsx`):**
   - Selector interactivo de fallas con dictamen técnico previo y precarga directa en el turnero.

---

## 🚀 Comandos del Proyecto

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción (Typecheck + Build)
npm run build

# Previsualizar build de producción
npm run preview
```

---

## 📂 Estructura de Directorios

```
electroborr/
├── index.html                     # SEO Local + Meta Tags + Schema.org AutoRepair JSON-LD
├── package.json
├── tailwind.config.js             # Design System 90/10 + Tipografías
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── types/
│   │   └── electroborr.ts         # Interfaces TypeScript estrictas
│   ├── data/
│   │   └── electroborrData.ts     # Fuente única de verdad con datos reales de Electroborr
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Topbar.tsx         # Pilar 1: Contacto arriba
│   │   │   ├── Navbar.tsx         # Brand emblem + navegación + CTA
│   │   │   ├── Footer.tsx         # Pilar 1: Contacto abajo + Mapa Maps
│   │   │   ├── MobileStickyBar.tsx# Pilar 5: Barra táctil para móviles
│   │   │   └── Layout.tsx         # Contenedor con scroll to top
│   │   └── sections/
│   │       ├── Hero.tsx           # Telemetría y showcase de laboratorio
│   │       ├── BrandTicker.tsx    # Cobertura multimarca
│   │       ├── ServicePagesGrid.tsx # Pilar 2: Grilla de servicios
│   │       ├── SymptomChecker.tsx # Pilar 9: Diagnosticador 24/7
│   │       ├── BookingWizard.tsx  # Pilar 3: Turnero WhatsApp + Pagos
│   │       ├── OurStoryAndWorkshop.tsx # Pilar 8: Historia de Nacho
│   │       ├── WarrantyAndCoupons.tsx  # Pilar 7: Garantía y Cupón Hansen
│   │       ├── ReviewsSection.tsx # Pilar 4: Reseñas Google
│   │       ├── LocalBlogSection.tsx # Pilar 6: Blog local
│   │       └── FaqSection.tsx     # Pilar 7: FAQs Quality RV
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ServiceDetailPage.tsx  # Ruta dinámica /servicios/:slug
│   │   └── BlogPostPage.tsx       # Ruta dinámica /blog/:slug
│   ├── App.tsx                    # Enrutamiento React Router
│   ├── main.tsx
│   └── index.css                  # Directivas Tailwind
```
