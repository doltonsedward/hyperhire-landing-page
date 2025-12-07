import { Header } from '@components/composite/Header';
import HeroOverview from '@components/composite/HeroOverview';
import { TalentSlider } from '@components/composite/TalentSlider';
import React from 'react';

const HeroSection = () => {
  // TODO(stagewise): Replace with real talent data from API
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
        <div className="lg:w-1/2 mt-4 lg:mt-0 flex justify-center w-full px-4 sm:px-0">
          <TalentSlider talents={mockTalents} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
