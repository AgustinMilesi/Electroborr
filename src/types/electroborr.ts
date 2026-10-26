export type ServiceCategory = 
  | 'diagnostico' 
  | 'laboratorio-ecu' 
  | 'software-motor' 
  | 'electricidad-adas' 
  | 'mecanica-precision';

export interface ServiceProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  category: ServiceCategory;
  title: string;
  badge: string;
  tagline: string;
  shortDescription: string;
  heroHighlight: string;
  iconName: string;
  imageUrl: string;
  // Perfil Dual Tekmetric: Explicación amigable vs Ficha de ingeniería
  clientProfileSimple: {
    summary: string;
    benefits: string[];
  };
  clientProfileTechnical: {
    specifications: string[];
    equipmentUsed: string[];
    protocols: string[];
  };
  symptomsSolved: string[];
  processSteps: ServiceProcessStep[];
  deliverables: string[];
  metaTitle: string;
  metaDescription: string;
}

export interface Symptom {
  id: string;
  category: 'tablero' | 'motor' | 'arranque' | 'frenos-tren' | 'laboratorio';
  label: string;
  iconName: string;
  technicalDiagnosis: string;
  urgency: 'critica' | 'moderada' | 'preventiva';
  recommendedServiceSlug: string;
  initialAdvice: string;
}

export interface Review {
  id: string;
  author: string;
  carModel: string;
  rating: number;
  date: string;
  comment: string;
  serviceCategory: string;
  verified: boolean;
  location: string;
}

export interface BlogPostSection {
  heading: string;
  body: string;
  bulletPoints?: string[];
  technicalCallout?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  readTime: string;
  date: string;
  category: string;
  author: string;
  geoTarget: string; // Loma Hermosa / Tres de Febrero
  intro: string;
  sections: BlogPostSection[];
  localTakeaway: string;
  metaTitle: string;
  metaDescription: string;
}

export interface FaqItem {
  id: string;
  category: 'laboratorio' | 'mecanica' | 'pagos-turnos' | 'garantia';
  question: string;
  answer: string;
}

export interface PaymentMethod {
  title: string;
  description: string;
  badge: string;
  iconName: string;
}

export interface WarrantyDetail {
  title: string;
  description: string;
  coveragePoints: string[];
  originalEquipmentProof: string;
}

export interface WebCoupon {
  code: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  terms: string;
  whatsappPresetText: string;
}

export interface WorkshopData {
  name: string;
  brandSubtitle: string;
  owner: string;
  taglines: string[];
  address: {
    street: string;
    neighborhood: string;
    municipality: string;
    province: string;
    fullText: string;
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
  };
  contact: {
    phoneDisplay: string;
    phoneRaw: string;
    whatsappRaw: string;
    whatsappUrl: string;
    instagramHandle: string;
    instagramUrl: string;
    facebookName: string;
    facebookUrl: string;
  };
  hours: {
    weekdays: string;
    saturdays: string;
    sundays: string;
    shortNotice: string;
  };
  supportedBrands: {
    name: string;
    category: 'nacional' | 'importado' | 'utilitario';
  }[];
  paymentPolicy: {
    title: string;
    quoteGuarantee: string;
    methods: PaymentMethod[];
  };
  warranty: WarrantyDetail;
  coupon: WebCoupon;
  story: {
    lead: string;
    body: string[];
    pillars: { title: string; desc: string }[];
  };
}

export interface BookingFormData {
  serviceSlug: string;
  symptomText: string;
  brand: string;
  model: string;
  year: string;
  fuelType: 'Nafta' | 'Diésel' | 'Híbrido' | 'GNC';
  preferredDate: string;
  preferredTimeSlot: string;
  clientName: string;
  couponApplied?: boolean;
}
