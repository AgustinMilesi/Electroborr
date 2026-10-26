import React, { useState } from 'react';
import { Hero } from '../components/sections/Hero';
import { BrandTicker } from '../components/sections/BrandTicker';
import { InteractiveHub } from '../components/sections/InteractiveHub';
import { TrustAndWarranty } from '../components/sections/TrustAndWarranty';
import { BookingWizard } from '../components/sections/BookingWizard';
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
      <InteractiveHub onSelectSymptom={handleSymptomSelect} />
      <TrustAndWarranty />
      <BookingWizard initialSymptom={selectedSymptom} />
      <ReviewsSection />
      <LocalBlogSection />
      <FaqSection />
    </>
  );
};
