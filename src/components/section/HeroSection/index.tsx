'use client';

import Header from '@components/composite/Header';
import HeroOverview from './HeroOverview';
import React from 'react';
import Tooltip from '@components/base/Tooltip';
import FeatureCategories from './FeatureCategories';
import TalentsSection from './TalentSection';
import { FeatureDataType, TalentDataType } from '../../../types/api';
import BenefitSection from './BenefitSection';

type HeroSectionPropsType = {
  talents: TalentDataType[];
  features: FeatureDataType[];
  benefits: string[];
};

const HeroSection = ({ talents, features, benefits }: HeroSectionPropsType) => (
  <div className="bg-hero-gradient bg-[url('/assets/hero-background.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay min-h-screen overflow-hidden">
    <Header
      logo="HyperHire"
      navItems={[
        { label: '채용', href: '/' },
        { label: '해외 개발자 활용 서비스', href: '#' },
      ]}
      ctaLabel="문의하기"
    />
    <div className="constrain grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-[60px]">
      <div className="lg:pr-8 w-full">
        <HeroOverview featuredData={features} />
      </div>

      {/* Right Content */}
      <div className="mt-4 lg:mt-0 justify-center w-full px-4 sm:px-0">
        <Tooltip />
        {/* <TalentSection talents={mockTalents} /> */}
        <TalentsSection talentsData={talents} />
      </div>

      {/* Mobile View */}
      {benefits && <BenefitSection benefitData={benefits} />}
    </div>

    <FeatureCategories />
  </div>
);

export default HeroSection;
