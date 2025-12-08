import Badge from '@components/composite/Badge';
import { Heading } from '@components/base/Heading';
import React from 'react';
import FeaturedSection from './FeaturedSection';
import { FeatureDataType } from '../../../../types/api';

type HeroOverViewPropsType = {
  featuredData: FeatureDataType[];
};

const HeroOverview = ({ featuredData }: HeroOverViewPropsType) => {
  return (
    <div className="space-y-6">
      {/* desktop view */}
      <Badge tailPosition="left" textColor="#40E2E8" className="hidden md:flex">
        풀타임, 파트타임
      </Badge>

      {/* mobile view */}
      <Badge tailPosition="left" bgColor="#8BC4FF" className="md:hidden">
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
      <FeaturedSection featuredData={featuredData} />
    </div>
  );
};

export default HeroOverview;
