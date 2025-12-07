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
      <div className="flex flex-col lg:flex-row items-center justify-between px-2 sm:px-4 lg:px-8 py-4 lg:py-8 min-h-[calc(100vh-120px)]">
        <div className="lg:w-1/2 lg:pr-8 w-full">
          <HeroOverview />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
