import { Badge } from '@components/base/Badge';
import { Heading } from '@components/base/Heading';
import React from 'react';
import FeaturedSection from './FeaturedSection';

const HeroOverview = () => {
  return (
    <div className="space-y-6">
      <Badge variant="accent" className="w-fit">
        풀타임, 파트타임
      </Badge>
      <Heading level={1} className="text-white text-balance">
        최고의 실력을 가진{'\n'}
        외국인 인재를 찾고 계신가요?
      </Heading>
      <Heading level={2} className="text-white/80 font-normal text-balance">
        법률 및 인사관리 부담없이{'\n'}
        1주일 이내에 원격으로 채용해보세요.
      </Heading>
      <FeaturedSection />
    </div>
  );
};

export default HeroOverview;
