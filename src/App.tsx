/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactMapSection } from './components/ContactMapSection';
import { Footer } from './components/Footer';
import { TrialModal } from './components/TrialModal';
import { CoursesModal } from './components/CoursesModal';
import { LegalModal } from './components/LegalModal';
import { Toast } from './components/Toast';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 6000);
  };

  const handleOpenTrialWithCourse = (_courseId: string) => {
    setIsTrialOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0c0e11] text-[#e2e2e6] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#ffb59d] selection:text-[#390c00] relative">
      {/* Sticky Top Navigation */}
      <Navbar onOpenTrialModal={() => setIsTrialOpen(true)} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onOpenTrialModal={() => setIsTrialOpen(true)}
          onOpenCoursesModal={() => setIsCoursesOpen(true)}
        />

        {/* 2. About Us / Image & Text Block ("L'eccellenza incontra la passione") */}
        <AboutSection />

        {/* 3. Testimonials / Reviews Section ("Cosa dicono di noi") */}
        <ReviewsSection />

        {/* 4. Contact Form & Stylized Map Section ("Vieni a trovarci") */}
        <ContactMapSection onSuccessToast={showToast} />
      </main>

      {/* 5. Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Floating Quick WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Interactive Modal Dialogs */}
      <TrialModal
        isOpen={isTrialOpen}
        onClose={() => setIsTrialOpen(false)}
        onSuccess={showToast}
      />

      <CoursesModal
        isOpen={isCoursesOpen}
        onClose={() => setIsCoursesOpen(false)}
        onSelectCourseForTrial={handleOpenTrialWithCourse}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Dynamic Toast Feedback */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
