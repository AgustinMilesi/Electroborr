import React, { useState } from 'react';
import { Hero } from '../components/sections/Hero';
import { BrandTicker } from '../components/sections/BrandTicker';
import { ServicePagesGrid } from '../components/sections/ServicePagesGrid';
import { SymptomChecker } from '../components/sections/SymptomChecker';
import { BookingWizard } from '../components/sections/BookingWizard';
import { OurStoryAndWorkshop } from '../components/sections/OurStoryAndWorkshop';
import { WarrantyAndCoupons } from '../components/sections/WarrantyAndCoupons';
import { ReviewsSection } from '../components/sections/ReviewsSection';
import { LocalBlogSection } from '../components/sections/LocalBlogSection';
import { FaqSection } from '../components/sections/FaqSection';
import { Symptom } from '../types/electroborr';

export const HomePage: React.FC = () => {
  const [selectedSymptom, setSelectedSymptom] = useState<Symptom | null>(null);

  const handleSymptomSelect = (symptom: Symptom) => {
    setSelectedSymptom(symptom);
  };

  return (
    <>
      <Hero />
      <BrandTicker />
      <ServicePagesGrid />
      <SymptomChecker onSelectSymptom={handleSymptomSelect} />
      <BookingWizard initialSymptom={selectedSymptom} />
      <OurStoryAndWorkshop />
      <WarrantyAndCoupons />
      <ReviewsSection />
      <LocalBlogSection />
      <FaqSection />
    </>
  );
};
