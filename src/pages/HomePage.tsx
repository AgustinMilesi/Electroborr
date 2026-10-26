import React, { useState } from 'react';
import { Hero } from '../components/sections/Hero';
import { BrandTicker } from '../components/sections/BrandTicker';
import { ServicesCarousel } from '../components/sections/ServicesCarousel';
import { SymptomChecker } from '../components/sections/SymptomChecker';
import { BookingWizard } from '../components/sections/BookingWizard';
import { ReviewsCarousel } from '../components/sections/ReviewsCarousel';
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
      <ServicesCarousel />
      <SymptomChecker onSelectSymptom={handleSymptomSelect} />
      <BookingWizard initialSymptom={selectedSymptom} />
      <ReviewsCarousel />
      <FaqSection />
    </>
  );
};
