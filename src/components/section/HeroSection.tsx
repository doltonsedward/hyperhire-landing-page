import { Header } from '@components/composite/Header';
import HeroOverview from '@components/composite/HeroOverview';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-hero-gradient bg-[url('/assets/hero-background.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay min-h-screen">
      <Header
        logo="HyperHire"
        navItems={[
          { label: '채용', href: '/' },
          { label: '해외 개발자 활용 서비스', href: '#' },
        ]}
        ctaLabel="문의하기"
      />
      <HeroOverview />
    </div>
  );
};

export default HeroSection;
