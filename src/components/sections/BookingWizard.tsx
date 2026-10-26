import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
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
    clientName: ''
  });

  useEffect(() => {
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

    const messageLines = [
      `*SOLICITUD DE TURNO - ELECTROBORR* 🛠️`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Cliente:* ${formData.clientName || 'Cliente Web'}`,
      `🚗 *Vehículo:* ${formData.brand} ${formData.model} (${formData.year || 'S/D'}) - ${formData.fuelType}`,
      `🔧 *Servicio:* ${serviceName}`,
      formData.symptomText ? `⚠️ *Falla:* ${formData.symptomText}` : '',
      `📅 *Fecha:* ${formData.preferredDate || 'A coordinar'} (${formData.preferredTimeSlot})`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `_Enviado desde el turnero online de electroborr.com.ar_`
    ].filter(Boolean);

    const fullMessage = messageLines.join('\n');
    const waUrl = `https://wa.me/${WORKSHOP_DATA.contact.whatsappRaw}?text=${encodeURIComponent(fullMessage)}`;

    window.open(waUrl, '_blank');
  };

  return (
    <section id="turnero" className="py-14 sm:py-20 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-2.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>AGENDA DIRECTA 24/7 • COSTO $0</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-zinc-50 tracking-tight">
            Reservá Tu Turno en 30 Segundos
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Ingresá los datos de tu vehículo y coordiná directamente por WhatsApp sin intermediarios ni costos de reserva.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Formulario Compacto */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit}
              className="rounded-2xl bg-zinc-900/70 border border-zinc-800 p-5 sm:p-7 space-y-4 backdrop-blur-sm"
            >
              {/* Fila 1: Auto y Motor */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Marca *</label>
                  <input
                    required
                    type="text"
                    placeholder="Ej: VW, Fiat"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Modelo *</label>
                  <input
                    required
                    type="text"
                    placeholder="Ej: Gol, Amarok"
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="col-span-1">
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Año</label>
                  <input
                    type="text"
                    placeholder="Ej: 2018"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-2.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 font-mono"
                  />
                </div>

                <div className="col-span-1">
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Motor</label>
                  <select
                    value={formData.fuelType}
                    onChange={(e) => setFormData({ ...formData, fuelType: e.target.value as BookingFormData['fuelType'] })}
                    className="w-full px-2 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Nafta">Nafta</option>
                    <option value="Diésel">Diésel</option>
                    <option value="GNC">GNC</option>
                    <option value="Híbrido">Híbrido</option>
                  </select>
                </div>
              </div>

              {/* Fila 2: Servicio & Falla */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Servicio Requerido</label>
                  <select
                    value={formData.serviceSlug}
                    onChange={(e) => setFormData({ ...formData, serviceSlug: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-emerald-500"
                  >
                    {SERVICES_DATA.map((service) => (
                      <option key={service.id} value={service.slug}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Síntoma o Comentario</label>
                  <input
                    type="text"
                    placeholder="Ej: Prende Check Engine, tironea..."
                    value={formData.symptomText}
                    onChange={(e) => setFormData({ ...formData, symptomText: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Fila 3: Turno y Nombre */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Tu Nombre *</label>
                  <input
                    required
                    type="text"
                    placeholder="Ej: Matías"
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Día Preferido</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Franja Horaria</label>
                  <select
                    value={formData.preferredTimeSlot}
                    onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                    className="w-full px-2 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Mañana (08:30 a 12:30 hs)">Mañana (08:30 a 12:30)</option>
                    <option value="Tarde (13:30 a 18:00 hs)">Tarde (13:30 a 18:00)</option>
                    <option value="Sábado (08:30 a 13:00 hs)">Sábado (08:30 a 13:00)</option>
                  </select>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-sm transition-all flex items-center justify-center gap-2.5 shadow-md active:scale-98"
              >
                <MessageSquare className="w-4 h-4 fill-zinc-950" />
                <span>Confirmar y Enviar Turno por WhatsApp</span>
              </button>

            </form>
          </div>

          {/* Columna Derecha: Presupuesto Transparente y Pagos Compactos */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-5 space-y-3">
              <div className="flex items-center gap-2 text-zinc-100 font-heading font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Presupuesto Cerrado Sin Sorpresas</span>
              </div>
              
              <p className="text-xs text-zinc-400 leading-relaxed">
                Ningún trabajo se realiza sin tu previa autorización tras el escaneo inicial. Te enviamos fotos y mediciones del osciloscopio que justifican el presupuesto.
              </p>

              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-[11px] text-zinc-300 flex items-start gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Cero piezas cambiadas por sospecha. Mostramos la falla antes de tocar un tornillo.</span>
              </div>
            </div>

            {/* Dirección y Horarios */}
            <div className="p-3.5 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Florida 647, Loma Hermosa</span>
              </span>
              <span>Lun a Vie 08:30 a 18:00</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
