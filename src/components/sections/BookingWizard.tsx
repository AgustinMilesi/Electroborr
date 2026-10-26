import React, { useState } from 'react';
import { 
  Calendar, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  Tag, 
  AlertCircle 
} from 'lucide-react';
import { WORKSHOP_DATA, SERVICES_DATA } from '../../data/electroborrData';
import { BookingFormData, Symptom } from '../../types/electroborr';

interface BookingWizardProps {
  initialSymptom?: Symptom | null;
}

export const BookingWizard: React.FC<BookingWizardProps> = ({ initialSymptom }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    serviceSlug: initialSymptom?.recommendedServiceSlug || SERVICES_DATA[0].slug,
    symptomText: initialSymptom?.label || '',
    brand: '',
    model: '',
    year: '',
    fuelType: 'Nafta',
    preferredDate: '',
    preferredTimeSlot: 'Mañana (08:30 a 12:30 hs)',
    clientName: '',
    couponApplied: true
  });

  // Sync if initialSymptom changes
  React.useEffect(() => {
    if (initialSymptom) {
      setFormData((prev) => ({
        ...prev,
        serviceSlug: initialSymptom.recommendedServiceSlug,
        symptomText: initialSymptom.label
      }));
    }
  }, [initialSymptom]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedService = SERVICES_DATA.find((s) => s.slug === formData.serviceSlug);
    const serviceName = selectedService ? selectedService.title : 'Diagnóstico General';

    // Construcción del mensaje estructurado de WhatsApp
    const messageLines = [
      `*SOLICITUD DE TURNO - ELECTROBORR* 🛠️`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Cliente:* ${formData.clientName || 'Cliente Web'}`,
      `🚗 *Vehículo:* ${formData.brand} ${formData.model} (${formData.year || 'S/D'})`,
      `⛽ *Combustible:* ${formData.fuelType}`,
      `🔧 *Servicio Solicitado:* ${serviceName}`,
      formData.symptomText ? `⚠️ *Falla/Síntoma:* ${formData.symptomText}` : '',
      `📅 *Fecha Preferida:* ${formData.preferredDate || 'A coordinar'}`,
      `⏰ *Franja Horaria:* ${formData.preferredTimeSlot}`,
      formData.couponApplied ? `🎟️ *Cupón Web:* [${WORKSHOP_DATA.coupon.code}] Aplicado` : '',
      `━━━━━━━━━━━━━━━━━━━━`,
      `_Enviado desde el turnero online de electroborr.com.ar_`
    ].filter(Boolean);

    const fullMessage = messageLines.join('\n');
    const waUrl = `https://wa.me/${WORKSHOP_DATA.contact.whatsappRaw}?text=${encodeURIComponent(fullMessage)}`;

    window.open(waUrl, '_blank');
  };

  return (
    <section id="turnero" className="py-20 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>TEKMETRIC PILAR 3 • RECEPCIÓN 24/7 SIN COSTO OPERATIVO</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-zinc-50 tracking-tight">
            Agenda tu Turno de Diagnóstico o Mecánica
          </h2>
          <p className="mt-3 text-base text-zinc-400 leading-relaxed">
            Completá los datos de tu vehículo para coordinar tu ingreso a taller. Al confirmar, se abrirá WhatsApp con todos los datos estructurados listos para que Nacho te confirme la agenda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Columna Izquierda: Formulario Wizard */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit}
              className="rounded-2xl bg-zinc-900/70 border border-zinc-800 p-6 sm:p-8 space-y-6 backdrop-blur-sm"
            >
              
              {/* Paso 1: Servicio y Síntoma */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 font-semibold">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[10px]">1</span>
                    Servicio o Falla
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Área Técnica Requerida
                    </label>
                    <select
                      value={formData.serviceSlug}
                      onChange={(e) => setFormData({ ...formData, serviceSlug: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-emerald-500"
                    >
                      {SERVICES_DATA.map((service) => (
                        <option key={service.id} value={service.slug}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Detalle de la falla o testigo
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Check Engine prendido, tironea en 2da..."
                      value={formData.symptomText}
                      onChange={(e) => setFormData({ ...formData, symptomText: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              {/* Paso 2: Datos del Vehículo */}
              <div className="pt-4 border-t border-zinc-800/80 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 font-semibold">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[10px]">2</span>
                  Datos de tu Auto o Utilitario
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Marca *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Ej: VW, Peugeot"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Modelo *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Ej: Amarok, 208"
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="col-span-1">
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Año
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: 2018"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 font-mono"
                    />
                  </div>

                  <div className="col-span-1">
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Motor
                    </label>
                    <select
                      value={formData.fuelType}
                      onChange={(e) => setFormData({ ...formData, fuelType: e.target.value as BookingFormData['fuelType'] })}
                      className="w-full px-2 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Nafta">Nafta</option>
                      <option value="Diésel">Diésel</option>
                      <option value="GNC">GNC</option>
                      <option value="Híbrido">Híbrido</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Paso 3: Preferencia de Agenda y Contacto */}
              <div className="pt-4 border-t border-zinc-800/80 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 font-semibold">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[10px]">3</span>
                  Preferencia de Horario y Tu Nombre
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Tu Nombre *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Ej: Juan Pérez"
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Día Preferido
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Franja Horaria
                    </label>
                    <select
                      value={formData.preferredTimeSlot}
                      onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                      className="w-full px-2 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Mañana (08:30 a 12:30 hs)">Mañana (08:30 a 12:30 hs)</option>
                      <option value="Tarde (13:30 a 18:00 hs)">Tarde (13:30 a 18:00 hs)</option>
                      <option value="Sábado (08:30 a 13:00 hs)">Sábado (08:30 a 13:00 hs)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Beneficio Web Toggle */}
              <div className="pt-2">
                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-950 border border-zinc-800/80 cursor-pointer hover:border-emerald-500/40 transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.couponApplied}
                    onChange={(e) => setFormData({ ...formData, couponApplied: e.target.checked })}
                    className="w-4 h-4 rounded text-emerald-500 focus:ring-emerald-500 bg-zinc-900 border-zinc-700"
                  />
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-zinc-200 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-emerald-400" />
                      Aplicar Beneficio Web [{WORKSHOP_DATA.coupon.code}]
                    </span>
                    <span className="text-[11px] text-zinc-400 block">
                      Prioridad de agenda + control visual de batería y carga sin cargo.
                    </span>
                  </div>
                </label>
              </div>

              {/* Botón de Envío */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/10 active:scale-[0.99]"
              >
                <MessageSquare className="w-5 h-5 fill-zinc-950" />
                <span>Confirmar y Enviar Turno por WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-zinc-500 font-mono">
                * Costo de reserva $0. No solicitamos tarjetas ni pagos por adelantado.
              </p>

            </form>
          </div>

          {/* Columna Derecha: Política de Pagos y Presupuesto Transparente (Tekmetric) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Tarjeta de Presupuesto Cerrado */}
            <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 space-y-4">
              <div className="flex items-center gap-2.5 text-zinc-100 font-heading font-bold text-base">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>{WORKSHOP_DATA.paymentPolicy.title}</span>
              </div>
              
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {WORKSHOP_DATA.paymentPolicy.quoteGuarantee}
              </p>

              <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 text-xs text-zinc-300 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Te enviamos fotos, mediciones con osciloscopio y el valor exacto de mano de obra y repuestos antes de iniciar.</span>
              </div>
            </div>

            {/* Medios de Pago Aceptados */}
            <div className="rounded-2xl bg-zinc-900/40 border border-zinc-800 p-6 space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold block">
                Modalidades de Pago Aceptadas
              </span>

              <div className="space-y-3">
                {WORKSHOP_DATA.paymentPolicy.methods.map((method, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex items-start justify-between gap-3"
                  >
                    <div>
                      <div className="text-xs font-semibold text-zinc-200">
                        {method.title}
                      </div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">
                        {method.description}
                      </div>
                    </div>
                    <span className="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700/60 text-emerald-400">
                      {method.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Horarios de Atención del Taller */}
            <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Loma Hermosa, BA</span>
              </span>
              <span>Lun a Vie 08:30 a 18:00</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
