import { Badge } from '@components/base/Badge';
import { Heading } from '@components/base/Heading';
import { Text } from '@components/base/Text';
import React from 'react';
import { CheckboxGroup } from './CheckboxGroup';
import Tooltip from '@components/base/Tooltip';
import { TalentSlider } from './TalentSlider';

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

const HeroOverview = () => {
  return (
    <div className="constrain max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Content */}
      <div className="space-y-6">
        <Badge variant="accent" className="w-fit">
          풀타임, 파트타임
        </Badge>
        <Heading level={1} className="text-white text-balance">
          최고의 실력을 가진{'\n'}
          외국인 인재를 찾고 계신가요?
        </Heading>
        <Heading level={2} className="text-white/90 font-normal text-balance">
          법률 및 인사관리 부담없이{'\n'}
          1주일 이내에 원격으로 채용해보세요.
        </Heading>
        <Text className="text-white/80">개발자가 필요하신가요?</Text>
        <CheckboxGroup items={['한국어 능력', '업무 수행 능력', '겸업 여부', '평판 조회']} />
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 mt-4 lg:mt-0 justify-center w-full px-4 sm:px-0">
        <Tooltip />
        <TalentSlider talents={mockTalents} />
      </div>
      {/* <div>Slider</div> */}
    </div>
  );
};

export default HeroOverview;
