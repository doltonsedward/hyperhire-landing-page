import { Header } from '@components/composite/Header';
import HeroOverview from './HeroOverview';
import React from 'react';
import Tooltip from '@components/base/Tooltip';
import TalentSection from './TalentSection';
import FeatureCategories from './FeatureCategories';

const mockTalents = [
  {
    id: 1,
    name: 'Abhishek Gupta',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    country: 'colombia',
    experience: '마케팅 · 2y+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
  {
    id: 2,
    name: 'Maria Santos',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    country: 'brazil',
    experience: 'UI/UX · 3y+',
    skills: ['UI 디자인', 'UX 리서치', '프로토타이핑', '사용자 테스트'],
  },
  {
    id: 3,
    name: 'Carlos Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    country: 'argentina',
    experience: '개발 · 4y+',
    skills: ['React 개발', 'Node.js', 'TypeScript', 'API 개발'],
  },
];

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
      <div className="constrain grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-[60px]">
        <div className="lg:pr-8 w-full">
          <HeroOverview />
        </div>

        {/* Right Content */}
        <div className="mt-4 lg:mt-0 justify-center w-full px-4 sm:px-0">
          <Tooltip />
          <TalentSection talents={mockTalents} />
        </div>
      </div>

      <FeatureCategories />
    </div>
  );
};

export default HeroSection;
